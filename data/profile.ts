export type Locale = "zh" | "en";

export type CaseStudy = {
  eyebrow: string;
  title: string;
  summary: string;
  context: string;
  problem: string;
  role: string;
  judgment: string;
  solution: string;
  validation: string;
  result: string;
  reflection: string;
};

export type CareerExperience = {
  title: string;
  time: string;
  results: string[];
  transfer: string;
};

export type ProfileCopy = {
  skip: string;
  nav: {
    work: string;
    about: string;
    contact: string;
  };
  languageLabel: string;
  hero: {
    eyebrow: string;
    positioning: string;
    headlineLead: string;
    headlineFocus: string;
    intro: string;
    primaryAction: string;
    secondaryAction: string;
    noteContext: string;
    portraitLabel: string;
    portraitTitle: string;
    portraitNote: string;
  };
  career: {
    eyebrow: string;
    title: string;
    intro: string;
    tags: string[];
    transferLabel: string;
    experiences: CareerExperience[];
  };
  education: {
    eyebrow: string;
    title: string;
    intro: string;
    fieldLabels: {
      location: string;
      degree: string;
      coursework: string;
      honors: string;
    };
    records: Array<{
      school: string;
      location: string;
      degree: string;
      coursework: string;
      honors: string;
      time: string;
    }>;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    placeholder: string;
    open: string;
    close: string;
    fieldLabels: {
      context: string;
      problem: string;
      role: string;
      judgment: string;
      solution: string;
      validation: string;
      result: string;
      reflection: string;
    };
    cases: CaseStudy[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    asideLabel: string;
    aside: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    availability: string;
    missing: string;
  };
  footer: string;
};

export type ContactItem = {
  id: string;
  label: string;
  value: string | null;
  href: string | null;
};

export const contacts: ContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: "lixiangxu0309@qq.com",
    href: "mailto:lixiangxu0309@qq.com",
  },
  { id: "social", label: "Social", value: "Skyllok", href: null },
  { id: "linkedin", label: "LinkedIn", value: null, href: null },
];

export const profileCopy: Record<Locale, ProfileCopy> = {
  zh: {
    skip: "跳到主要内容",
    nav: {
      work: "项目案例",
      about: "关于我",
      contact: "联系",
    },
    languageLabel: "切换为英文",
    hero: {
      eyebrow: "AI PRODUCT MANAGER · PERSONAL PORTFOLIO",
      positioning: "AI 产品经理｜用 AI + Vibe Coding 全方位提效产品",
      headlineLead: "把复杂的 AI 能力，",
      headlineFocus: "变成用户愿意使用的产品。",
      intro:
        "我是 Skylar Li / 李香蓄，一名关注 AI 产品落地的产品人。我从真实问题出发，判断什么值得做、怎样验证，并把模糊想法推进成可用的产品。",
      primaryAction: "查看我的项目",
      secondaryAction: "联系我",
      noteContext:
        "我关注 AI 如何进入真实业务流程，帮助用户更快完成决策、表达与交付；我的产品判断来自长期的一线交易、用户运营和增长实践。",
      portraitLabel: "PORTRAIT",
      portraitTitle: "职业照片待补充",
      portraitNote: "建议换成一张自然、有工作状态的照片",
    },
    career: {
      eyebrow: "PRODUCT-RELEVANT EXPERIENCE",
      title: "职业经历｜从产品实践到 AI 产品",
      intro:
        "具备 6 年+跨境电商运营、用户增长与商业化实践经验，关注大模型、AIGC 与智能化工作流在真实业务场景中的应用，并将相关经验运用到 AI 产品中。曾负责市场调研、用户需求洞察、活动策划、内容营销、社群运营、供应链与品牌合作及销售数据分析，形成了以用户任务为中心、以数据验证方案、以业务结果衡量价值的产品工作方式。",
      tags: ["用户洞察与增长", "数据驱动迭代", "商业化与跨方协作"],
      transferLabel: "产品能力迁移",
      experiences: [
        {
          title: "跨境电商自主运营",
          time: "2018.09–2025.07",
          results: ["年销售额 50 万+", "建立 15+ 品牌合作", "运营 3 个 400+ 人社群", "社群订单转化率 60%+"],
          transfer: "用户分层、增长漏斗、内容与社群运营、商业化转化、供应链协同。",
        },
        {
          title: "京东到家｜营销推广实习生",
          time: "2020.12–2021.04",
          results: ["月均新注册用户 200+", "月均回购用户 100+", "基于销售数据迭代选品与活动"],
          transfer: "用户拉新、活动路径设计、数据分析、增长实验与方案迭代。",
        },
      ],
    },
    education: {
      eyebrow: "EDUCATION",
      title: "教育经历",
      intro: "",
      fieldLabels: {
        location: "地点",
        degree: "学位 / 专业",
        coursework: "课程 / 学习重点",
        honors: "奖励 / 荣誉",
      },
      records: [
        {
          school: "澳大利亚莫那什大学（QS：36）",
          location: "澳大利亚，墨尔本",
          degree: "银行与金融学专业，硕士",
          coursework: "统计与计量学、数据分析与应用、金融管理、编程 VBA、财务报表分析与企业价值评估等",
          honors: "荣获莫那什大学研究生奖学金",
          time: "2021.08-2023.05",
        },
        {
          school: "澳大利亚莫那什大学（QS：36）",
          location: "澳大利亚，墨尔本",
          degree: "会计学专业；辅修经济学与商务战略，学士",
          coursework: "审计学、金融会计学、税法、公司法、商务英语翻译、经济学、货币政策学等",
          honors: "优秀毕业生，并获专业课程卓越减免（4门研究生课程）",
          time: "2018.02-2021.07",
        },
      ],
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "三个案例，展示我是怎样做产品的",
      intro:
        "这里不会只放最终页面，而会保留问题、判断和取舍。真实项目信息补齐后，HR 可以快速看见你在每一步中的贡献。",
      placeholder: "待 Skylar 补充真实项目",
      open: "展开案例",
      close: "收起案例",
      fieldLabels: {
        context: "背景",
        problem: "问题",
        role: "我的角色",
        judgment: "关键判断",
        solution: "产品方案",
        validation: "验证方式",
        result: "结果",
        reflection: "复盘",
      },
      cases: [
        {
          eyebrow: "案例 01 · AI 原生产品",
          title: "从零定义一个值得做的 AI 产品",
          summary:
            "用于展示你怎样发现机会、界定首批用户，并把模型能力转化成完整产品。",
          context: "补充目标用户、使用场景，以及项目为什么在当时出现。",
          problem: "补充用户原来的做法、最明显的阻力，以及你如何确认问题真实存在。",
          role: "补充你负责的范围、合作对象和关键决策权。",
          judgment: "补充最重要的一次取舍：什么没有做，为什么。",
          solution: "补充核心流程、AI 在其中承担的具体任务，以及失败时的处理方式。",
          validation: "补充原型、访谈、可用性测试或灰度实验等真实方法。",
          result: "补充可核实的用户行为、业务结果或定性反馈；没有数据时如实说明。",
          reflection: "补充如果重做一次，你会更早验证什么。",
        },
        {
          eyebrow: "案例 02 · AI 增强体验",
          title: "让 AI 进入流程，而不是增加一个按钮",
          summary:
            "用于展示你怎样理解既有产品，在不打断用户习惯的前提下增加 AI 能力。",
          context: "补充原产品、主要用户和当时的业务目标。",
          problem: "补充现有流程的卡点，以及为什么普通功能优化不足以解决。",
          role: "补充你在需求研究、方案设计、协作和上线中的具体职责。",
          judgment: "补充你怎样选择 AI 介入的位置，并控制错误带来的影响。",
          solution: "补充修改前后的流程，以及 AI 建议如何被理解、编辑或拒绝。",
          validation: "补充怎样比较新旧流程，验证效率、质量或信任是否改变。",
          result: "补充真实使用率、完成时间、采纳率或用户反馈。",
          reflection: "补充实际结果与你最初判断之间的差异。",
        },
        {
          eyebrow: "案例 03 · 验证与调整",
          title: "当证据不支持原方案时，重新定义问题",
          summary:
            "用于展示面对失败信号时，你怎样暂停惯性投入、找到原因并调整方向。",
          context: "补充项目阶段、已有投入和必须作出决定的时间点。",
          problem: "补充哪些现象表明原方案没有解决问题。",
          role: "补充你怎样组织复盘、收集证据并推动团队形成新共识。",
          judgment: "补充你决定停止、保留或重做哪些部分，以及判断依据。",
          solution: "补充调整后的产品方向和最小验证方案。",
          validation: "补充新旧假设分别对应的观察指标和反馈渠道。",
          result: "补充调整后的真实结果；如果项目终止，也说明终止避免了什么。",
          reflection: "补充这次经历怎样改变了你之后的产品工作方式。",
        },
      ],
    },
    about: {
      eyebrow: "ABOUT SKYLAR",
      title: "我喜欢把复杂事情讲明白，也喜欢和人一起把事情做成",
      paragraphs: [
        "我是一名关注 AI 产品落地的产品人。相比追逐每一个新概念，我更关心技术进入真实工作之后，人是否理解、信任并愿意持续使用。",
        "我享受从混乱信息中找到关键问题，也重视讨论过程中的不同意见。好的产品判断很少来自一个人的灵感，更多来自团队对事实的共同理解。",
      ],
      asideLabel: "Zestful & Grateful",
      aside:
        "热爱工作，同时热爱生活，喜欢运动，喜欢音乐，喜欢小动物，喜欢一切美好的事物。我一直坚信，相遇不一定有结局，但一定有意义。",
    },
    contact: {
      eyebrow: "LET'S TALK",
      title: "如果你想更具体地了解我，欢迎直接联系",
      availability: "开放交流：AI 产品岗位 · 项目合作 · 同行讨论",
      missing: "待补充",
    },
    footer: "个人主页",
  },
  en: {
    skip: "Skip to main content",
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    languageLabel: "Switch to Chinese",
    hero: {
      eyebrow: "AI PRODUCT MANAGER · PERSONAL PORTFOLIO",
      positioning: "AI Product Manager | Boosting product efficiency end to end with AI + Vibe Coding",
      headlineLead: "Turning complex AI capabilities",
      headlineFocus: "into products people choose to use.",
      intro:
        "I’m Skylar, a product practitioner focused on making AI useful in real work. I start with the problem, decide what is worth testing, and move ambiguous ideas toward products people can actually use.",
      primaryAction: "View my work",
      secondaryAction: "Contact me",
      noteContext:
        "I focus on how AI fits into real business workflows, helping users make decisions, communicate, and deliver work faster. My product judgment comes from years of hands-on work in trading, user operations, and growth.",
      portraitLabel: "PORTRAIT",
      portraitTitle: "Professional photo to be added",
      portraitNote: "Use a natural photo that shows you in a real working moment",
    },
    career: {
      eyebrow: "PRODUCT-RELEVANT EXPERIENCE",
      title: "Career Experience | From Product Practice to AI Products",
      intro:
        "With 6+ years of hands-on experience in cross-border ecommerce, user growth, and commercialization, I focus on applying large language models, AIGC, and intelligent workflows to real business scenarios. I bring these experiences into AI product work: starting from user tasks, validating with data, and measuring value through business outcomes.",
      tags: ["User insight & growth", "Data-driven iteration", "Commercialization & collaboration"],
      transferLabel: "Product transfer",
      experiences: [
        {
          title: "Independent Cross-border Ecommerce Operator",
          time: "2018.09–2025.07",
          results: ["RMB 500K+ annual sales", "15+ brand partnerships", "Three 400+ member communities", "60%+ community order conversion"],
          transfer: "User segmentation, growth funnels, content and community operations, conversion, and supply coordination.",
        },
        {
          title: "JD Daojia | Marketing Promotion Intern",
          time: "2020.12–2021.04",
          results: ["200+ new registered users per month", "100+ monthly repeat customers", "Data-led product selection and campaign iteration"],
          transfer: "User acquisition, activity-flow design, data analysis, growth experiments, and iteration.",
        },
      ],
    },
    education: {
      eyebrow: "EDUCATION",
      title: "Education",
      intro: "",
      fieldLabels: {
        location: "LOCATION",
        degree: "DEGREE / MAJOR",
        coursework: "COURSEWORK / FOCUS",
        honors: "HONORS / AWARDS",
      },
      records: [
        {
          school: "Monash University, Australia (QS 36)",
          location: "Melbourne, Australia",
          degree: "Master of Banking and Finance",
          coursework: "Statistics and econometrics, data analysis and applications, financial management, VBA programming, financial statement analysis, and business valuation.",
          honors: "Monash University postgraduate scholarship.",
          time: "2021.08-2023.05",
        },
        {
          school: "Monash University, Australia (QS 36)",
          location: "Melbourne, Australia",
          degree: "Bachelor of Accounting, with minors in Economics and Business Strategy",
          coursework: "Auditing, financial accounting, tax law, corporate law, business English translation, economics, and monetary policy.",
          honors: "Outstanding Graduate. Excellence-based exemptions for four postgraduate courses.",
          time: "2018.02-2021.07",
        },
      ],
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "Three cases that show how I make product decisions",
      intro:
        "These cases will show more than final screens. They preserve the problem, judgment, and trade-offs so a hiring team can see Skylar’s contribution at each step.",
      placeholder: "Real project details to be added by Skylar",
      open: "Open case",
      close: "Close case",
      fieldLabels: {
        context: "Context",
        problem: "Problem",
        role: "My role",
        judgment: "Key judgment",
        solution: "Product direction",
        validation: "Validation",
        result: "Outcome",
        reflection: "Reflection",
      },
      cases: [
        {
          eyebrow: "CASE 01 · AI-NATIVE PRODUCT",
          title: "Defining an AI product worth building from zero",
          summary:
            "A case for showing how you found the opportunity, chose the first users, and turned model capability into a complete product.",
          context: "Add the target users, situation, and why this project emerged at that moment.",
          problem: "Add the old workflow, the clearest friction, and how you confirmed the problem was real.",
          role: "Add your scope, collaborators, and the decisions you owned.",
          judgment: "Add the most important trade-off: what you did not build, and why.",
          solution: "Add the core flow, the exact job AI performed, and what happened when it failed.",
          validation: "Add the real prototypes, interviews, usability tests, or staged experiments you used.",
          result: "Add verifiable behavior, business results, or qualitative feedback. Be direct when data is unavailable.",
          reflection: "Add what you would test earlier if you did the project again.",
        },
        {
          eyebrow: "CASE 02 · AI-ENHANCED EXPERIENCE",
          title: "Putting AI into the workflow, not beside it",
          summary:
            "A case for showing how you understood an existing product and added AI without breaking established user habits.",
          context: "Add the existing product, core users, and business goal at the time.",
          problem: "Add the workflow friction and why a conventional feature improvement was not enough.",
          role: "Add your responsibilities across research, design, collaboration, and launch.",
          judgment: "Add how you chose the point of AI intervention and contained the impact of errors.",
          solution: "Add the before-and-after flow and how people could understand, edit, or reject AI suggestions.",
          validation: "Add how you compared the old and new flows across speed, quality, or trust.",
          result: "Add real adoption, completion time, acceptance rate, or user feedback.",
          reflection: "Add where the real outcome differed from your original judgment.",
        },
        {
          eyebrow: "CASE 03 · VALIDATE AND ADJUST",
          title: "Redefining the problem when evidence challenged the plan",
          summary:
            "A case for showing how you paused momentum, found the cause of weak signals, and changed direction.",
          context: "Add the project stage, prior investment, and the decision point you faced.",
          problem: "Add the evidence that showed the original direction was not solving the problem.",
          role: "Add how you led the review, gathered evidence, and helped the team form a new view.",
          judgment: "Add what you stopped, kept, or rebuilt, together with the evidence behind that choice.",
          solution: "Add the revised product direction and the smallest useful validation plan.",
          validation: "Add the signals and feedback channels tied to both the old and new hypotheses.",
          result: "Add the result after the change. If the project ended, explain what ending it prevented.",
          reflection: "Add how the experience changed the way you work on later products.",
        },
      ],
    },
    about: {
      eyebrow: "ABOUT SKYLAR",
      title: "I like making complex things clear, and making progress with people",
      paragraphs: [
        "I’m a product practitioner focused on making AI useful in real work. Rather than chasing every new concept, I care about what happens after technology enters a workflow: whether people understand it, trust it, and keep using it.",
        "I enjoy finding the central problem in messy information, and I value disagreement during the process. Strong product judgment rarely comes from one person’s inspiration. It grows from a team’s shared understanding of the facts.",
      ],
      asideLabel: "Zestful & Grateful",
      aside:
        "I care deeply about my work and about life beyond it. I enjoy sports, music, animals, and all the things that make life feel good. I believe every encounter has meaning, even when it does not lead to an ending.",
    },
    contact: {
      eyebrow: "LET'S TALK",
      title: "If you want to know how I think in more detail, get in touch",
      availability: "Open to: AI product roles · Project collaboration · Peer conversations",
      missing: "To be added",
    },
    footer: "Personal portfolio",
  },
};
