import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Skylar's Chinese portfolio shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Skylar Li \/ 李香蓄 · AI Product Manager<\/title>/i);
  assert.match(html, /把复杂的 AI 能力/);
  assert.match(html, /AI 产品经理｜用 AI \+ Vibe Coding 全方位提效产品/);
  assert.match(html, /查看我的项目/);
  assert.match(html, /联系我/);
  assert.match(html, /我关注 AI 如何进入真实业务流程/);
  assert.match(html, /三个案例/);
  assert.doesNotMatch(html, /先把问题说清楚，再开始做方案/);
  assert.match(html, /联系方式|联系我|LET'S TALK/);
  assert.match(html, /教育经历/);
  assert.match(html, /澳大利亚莫那什大学/);
  assert.match(html, /2021\.08-2023\.05/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps bilingual content and interaction contracts in source", async () => {
  const [page, data, css, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/profile.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /useSyncExternalStore\(subscribeToLocale, getSavedLocale/);
  assert.match(page, /useState<number \| null>\(0\)/);
  assert.match(page, /localStorage\.setItem\(storageKey, nextLocale\)/);
  assert.match(page, /dispatchEvent\(new Event\(localeChangeEvent\)\)/);
  assert.match(page, /aria-expanded=\{isExpanded\}/);
  assert.match(page, /contact-rail/);
  assert.match(page, /mobile-contact-bar/);
  assert.match(page, /education-section/);
  assert.match(page, /education-record__school/);
  assert.doesNotMatch(page, /education-note/);
  assert.doesNotMatch(page, /approach-section/);
  assert.doesNotMatch(page, /principle-strip/);
  assert.doesNotMatch(data, /principles:/);
  assert.doesNotMatch(data, /capabilities:\s*\{/);

  assert.match(data, /zh:\s*\{/);
  assert.match(data, /en:\s*\{/);
  assert.match(data, /Boosting product efficiency end to end with AI \+ Vibe Coding/);
  assert.match(data, /product practitioner focused on making AI useful in real work/);
  assert.doesNotMatch(data, /这里还会补充我的经历、行业背景和正在关注的方向/);
  assert.match(data, /I focus on how AI fits into real business workflows/);
  assert.doesNotMatch(data, /approach:\s*\{/);
  assert.match(data, /school: "澳大利亚莫那什大学（QS：36）"/);
  assert.match(data, /location: "澳大利亚，墨尔本"/);
  assert.match(data, /honors: "荣获莫那什大学研究生奖学金"/);
  assert.match(data, /school: "Monash University, Australia \(QS 36\)"/);
  assert.match(data, /honors: "Outstanding Graduate\./);
  assert.equal((data.match(/eyebrow: "案例 0/g) ?? []).length, 3);
  assert.equal((data.match(/eyebrow: "CASE 0/g) ?? []).length, 3);
  assert.match(page, /Skylar Li \/ 李香蓄/);
  assert.match(data, /value: "lixiangxu0309@qq\.com"/);
  assert.match(data, /href: "mailto:lixiangxu0309@qq\.com"/);
  assert.match(data, /id: "social", label: "Social", value: "Skyllok", href: null/);
  assert.match(data, /id: "linkedin", label: "LinkedIn", value: null, href: null/);
  assert.ok(data.indexOf('id: "social"') < data.indexOf('id: "linkedin"'));
  assert.match(data, /待 Skylar 补充真实项目/);
  assert.match(data, /Real project details to be added by Skylar/);

  assert.match(css, /@media \(max-width: 680px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /\.hero-copy h1 span,[\s\S]*white-space: nowrap/);
  assert.match(css, /html\[lang="en"\] \.hero-copy h1/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
