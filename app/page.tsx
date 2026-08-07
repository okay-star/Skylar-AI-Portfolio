"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  contacts,
  profileCopy,
  type CaseStudy,
  type Locale,
} from "../data/profile";

const storageKey = "skylar-portfolio-locale";
const localeChangeEvent = "skylar-portfolio-locale-change";

function getSavedLocale(): Locale {
  const savedLocale = window.localStorage.getItem(storageKey);
  return savedLocale === "en" ? "en" : "zh";
}

function subscribeToLocale(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(localeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(localeChangeEvent, onStoreChange);
  };
}

function useLocale() {
  return useSyncExternalStore(subscribeToLocale, getSavedLocale, () => "zh");
}

function ContactItems({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const copy = profileCopy[locale];

  return (
    <div className={compact ? "contact-items contact-items--compact" : "contact-items"}>
      {contacts.map((contact) =>
        contact.href ? (
          <a className="contact-link" href={contact.href} key={contact.id}>
            <span>{contact.label}</span>
            <small>
              {contact.value}
              <i aria-hidden="true">↗</i>
            </small>
          </a>
        ) : (
          <span
            className={contact.value ? "contact-link contact-link--static" : "contact-link contact-link--missing"}
            key={contact.id}
            aria-disabled={contact.value ? undefined : "true"}
          >
            <span>{contact.label}</span>
            <small>{contact.value ?? copy.contact.missing}</small>
          </span>
        ),
      )}
    </div>
  );
}

function CaseField({ label, value, emphasized = false }: { label: string; value: string; emphasized?: boolean }) {
  return (
    <div className={emphasized ? "case-field case-field--emphasized" : "case-field"}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function CaseDetails({ item, locale }: { item: CaseStudy; locale: Locale }) {
  const labels = profileCopy[locale].work.fieldLabels;
  const trace = [
    { label: labels.judgment, value: item.judgment },
    { label: labels.solution, value: item.solution },
    { label: labels.validation, value: item.validation },
    { label: labels.result, value: item.result },
    { label: labels.reflection, value: item.reflection },
  ];

  return (
    <div className="case-details">
      <dl className="case-foundation">
        <CaseField label={labels.context} value={item.context} />
        <CaseField label={labels.problem} value={item.problem} />
        <CaseField label={labels.role} value={item.role} />
      </dl>

      <div className="decision-record" aria-label={locale === "zh" ? "产品决策记录" : "Product decision record"}>
        <div className="decision-record__heading">
          <span>{locale === "zh" ? "产品决策记录" : "PRODUCT DECISION RECORD"}</span>
          <small>{locale === "zh" ? "从判断到复盘" : "From judgment to reflection"}</small>
        </div>
        <dl className="decision-trace">
          {trace.map((field, index) => (
            <div className="decision-step" key={field.label}>
              <span className="decision-step__mark" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <CaseField label={field.label} value={field.value} emphasized={index === 0} />
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function Home() {
  const locale = useLocale();
  const [expandedCase, setExpandedCase] = useState<number | null>(0);
  const copy = profileCopy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  function toggleLocale() {
    const nextLocale = locale === "zh" ? "en" : "zh";
    window.localStorage.setItem(storageKey, nextLocale);
    window.dispatchEvent(new Event(localeChangeEvent));
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label={locale === "zh" ? "回到首页" : "Back to top"}>
            <span className="wordmark__name">Skylar Li / 李香蓄</span>
            <span className="wordmark__role">AI Product Manager</span>
          </a>

          <nav className="desktop-nav" aria-label={locale === "zh" ? "主要导航" : "Primary navigation"}>
            <a href="#work">{copy.nav.work}</a>
            <a href="#approach">{copy.nav.approach}</a>
            <a href="#about">{copy.nav.about}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </nav>

          <button className="language-switch" type="button" onClick={toggleLocale} aria-label={copy.languageLabel}>
            <span className={locale === "zh" ? "is-active" : ""}>中</span>
            <i aria-hidden="true">/</i>
            <span className={locale === "en" ? "is-active" : ""}>EN</span>
          </button>
        </div>
      </header>

      <div className="mobile-contact-bar" aria-label={locale === "zh" ? "快速联系" : "Quick contact"}>
        <span>{locale === "zh" ? "联系我" : "Contact"}</span>
        <ContactItems locale={locale} compact />
      </div>

      <aside className="contact-rail" aria-label={locale === "zh" ? "联系方式" : "Contact details"}>
        <span className="contact-rail__eyebrow">{copy.contact.eyebrow}</span>
        <p>{locale === "zh" ? "浏览时随时联系" : "Reach out anytime"}</p>
        <ContactItems locale={locale} />
        <span className="contact-rail__line" aria-hidden="true" />
      </aside>

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <p className="hero-positioning">{copy.hero.positioning}</p>
            <h1>
              <span>{copy.hero.headlineLead}</span>
              <strong>{copy.hero.headlineFocus}</strong>
            </h1>
            <p className="hero-intro">{copy.hero.intro}</p>

            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                {copy.hero.primaryAction}
                <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#contact">
                {copy.hero.secondaryAction}
                <span aria-hidden="true">↘</span>
              </a>
            </div>

            <div className="working-note">
              <span>{copy.hero.noteLabel}</span>
              <p>{copy.hero.note}</p>
            </div>
          </div>

          <div className="portrait-block" aria-label={copy.hero.portraitTitle}>
            <div className="portrait-frame">
              <span className="portrait-frame__label">{copy.hero.portraitLabel}</span>
              <span className="portrait-initial" aria-hidden="true">S</span>
              <p>{copy.hero.portraitTitle}</p>
            </div>
            <p className="portrait-note">{copy.hero.portraitNote}</p>
          </div>

          <div className="principle-strip">
            {copy.principles.map((principle) => (
              <div key={principle.label}>
                <span>{principle.label}</span>
                <strong>{principle.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell section-block capabilities" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <p className="eyebrow">{copy.capabilities.eyebrow}</p>
            <h2 id="capabilities-title">{copy.capabilities.title}</h2>
            <p>{copy.capabilities.intro}</p>
          </div>

          <div className="capability-list">
            {copy.capabilities.items.map((item, index) => (
              <article className="capability-item" key={item.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-block work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">{copy.work.eyebrow}</p>
              <h2 id="work-title">{copy.work.title}</h2>
            </div>
            <p>{copy.work.intro}</p>
          </div>

          <div className="case-list">
            {copy.work.cases.map((item, index) => {
              const isExpanded = expandedCase === index;
              const panelId = `case-panel-${index}`;

              return (
                <article className={isExpanded ? "case-card is-expanded" : "case-card"} key={item.eyebrow}>
                  <button
                    className="case-summary"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => setExpandedCase(isExpanded ? null : index)}
                  >
                    <span className="case-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="case-summary__content">
                      <span className="case-eyebrow">{item.eyebrow}</span>
                      <strong>{item.title}</strong>
                      <span className="case-description">{item.summary}</span>
                    </span>
                    <span className="case-placeholder">{copy.work.placeholder}</span>
                    <span className="case-toggle">
                      {isExpanded ? copy.work.close : copy.work.open}
                      <i aria-hidden="true">{isExpanded ? "−" : "+"}</i>
                    </span>
                  </button>

                  {isExpanded ? (
                    <div className="case-panel" id={panelId}>
                      <CaseDetails item={item} locale={locale} />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="section-shell">
            <div className="approach-intro">
              <p className="eyebrow">{copy.approach.eyebrow}</p>
              <h2 id="approach-title">{copy.approach.title}</h2>
              <p>{copy.approach.intro}</p>
            </div>

            <ol className="approach-steps">
              {copy.approach.steps.map((item) => (
                <li key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-shell section-block about-section" id="about" aria-labelledby="about-title">
          <div className="about-heading">
            <p className="eyebrow">{copy.about.eyebrow}</p>
            <h2 id="about-title">{copy.about.title}</h2>
          </div>

          <div className="about-body">
            <div className="about-copy">
              {copy.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside className="currently-note">
              <span>{copy.about.asideLabel}</span>
              <p>{copy.about.aside}</p>
            </aside>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-section__inner">
            <div>
              <p className="eyebrow">{copy.contact.eyebrow}</p>
              <h2 id="contact-title">{copy.contact.title}</h2>
            </div>
            <div className="contact-card">
              <p>{copy.contact.availability}</p>
              <ContactItems locale={locale} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <span>© {new Date().getFullYear()} Skylar Li / 李香蓄</span>
          <span>{copy.footer}</span>
          <a href="#top">{locale === "zh" ? "回到顶部 ↑" : "Back to top ↑"}</a>
        </div>
      </footer>
    </>
  );
}
