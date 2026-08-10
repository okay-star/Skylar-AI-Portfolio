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

export type ProfileCopy = {
  skip: string;
  nav: {
    work: string;
    approach: string;
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
    noteLabel: string;
    note: string;
    portraitLabel: string;
    portraitTitle: string;
    portraitNote: string;
  };
  education: {
    eyebrow: string;
    title: string;
    intro: string;
    fieldLabels: {
      degree: string;
      coursework: string;
    };
    records: Array<{
      school: string;
      degree: string;
      coursework: string;
      time: string;
    }>;
    noteLabel: string;
    note: string;
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
  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ step: string; title: string; description: string }>;
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
      approach: "工作方式",
      about: "关于我",
      contact: "联系",
    },
    languageLabel: "切换为英文",
    hero: {
      eyebrow: "AI PRODUCT MANAGER · PERSONAL PORTFOLIO",
      positioning: "AI 产品经理｜用 AI + Vibe Coding 快速创造产品",
      headlineLead: "把复杂的 AI 能力，",
      headlineFocus: "变成用户愿意使用的产品。",
      intro:
        "我是 Skylar Li / 李香蓄，一名关注 AI 产品落地的产品经理。我从真实问题出发，判断什么值得做、怎样验证，并把模糊想法推进成可用的产品。",
      primaryAction: "查看我的项目",
      secondaryAction: "联系我",
      noteLabel: "我在意的不是",
      note: "“这个功能能不能做”，而是“它是否真的让一个人的工作变得更好”。",
      portraitLabel: "PORTRAIT",
      portraitTitle: "职业照片待补充",
      portraitNote: "建议换成一张自然、有工作状态的照片",
    },
    education: {
      eyebrow: "EDUCATION",
      title: "教育经历",
      intro: "后续可在这里补充学校、专业或学位、相关课程与学习时间。每段经历都保留成一条清晰的个人记录。",
      fieldLabels: {
        degree: "学位 / 专业",
        coursework: "课程 / 学习重点",
      },
      records: [
        {
          school: "学校名称待补充",
          degree: "学位与专业待补充",
          coursework: "课程内容、项目经历或学习重点待补充",
          time: "时间待补充",
        },
        {
          school: "学校名称待补充",
          degree: "学位与专业待补充",
          coursework: "课程内容、项目经历或学习重点待补充",
          time: "时间待补充",
        },
      ],
      noteLabel: "填写提示",
      note: "建议每条只保留与目标岗位有关的信息。学校、专业、时间是基础；课程或项目用于补充你希望 HR 看到的学习方向。",
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
    approach: {
      eyebrow: "HOW I WORK",
      title: "先把问题说清楚，再开始做方案",
      intro:
        "这是我处理产品不确定性的基本顺序。它不是固定流程，而是一套帮助团队减少误判的工作习惯。",
      steps: [
        {
          step: "01",
          title: "听见真实处境",
          description: "理解一个人现在怎样完成任务，哪里犹豫、返工或放弃。",
        },
        {
          step: "02",
          title: "写下关键判断",
          description: "把目标、假设、风险和暂时不做的事情放在同一张纸上。",
        },
        {
          step: "03",
          title: "用最小方案学习",
          description: "先做足以验证高风险假设的版本，而不是一次性交付所有想法。",
        },
        {
          step: "04",
          title: "让证据决定下一步",
          description: "同时看行为、反馈和业务结果，愿意修正原来的判断。",
        },
      ],
    },
    about: {
      eyebrow: "ABOUT SKYLAR",
      title: "我喜欢把复杂事情讲明白，也喜欢和人一起把事情做成",
      paragraphs: [
        "我是一名关注 AI 产品落地的产品经理。相比追逐每一个新概念，我更关心技术进入真实工作之后，人是否理解、信任并愿意持续使用。",
        "我享受从混乱信息中找到关键问题，也重视讨论过程中的不同意见。好的产品判断很少来自一个人的灵感，更多来自团队对事实的共同理解。",
        "这里还会补充我的经历、行业背景和正在关注的方向。",
      ],
      asideLabel: "CURRENTLY",
      aside: "正在补充真实项目与职业经历，也欢迎围绕 AI 产品、用户体验和合作机会交流。",
    },
    contact: {
      eyebrow: "LET'S TALK",
      title: "如果你想更具体地了解我，欢迎直接联系",
      availability: "开放交流：AI 产品岗位 · 项目合作 · 同行讨论",
      missing: "待补充",
    },
    footer: "个人主页首版 · 真实内容持续补充中",
  },
  en: {
    skip: "Skip to main content",
    nav: {
      work: "Work",
      approach: "Approach",
      about: "About",
      contact: "Contact",
    },
    languageLabel: "Switch to Chinese",
    hero: {
      eyebrow: "AI PRODUCT MANAGER · PERSONAL PORTFOLIO",
      positioning: "AI Product Manager | Building products fast with AI + Vibe Coding",
      headlineLead: "Turning complex AI capabilities",
      headlineFocus: "into products people choose to use.",
      intro:
        "I’m Skylar, a product manager focused on making AI useful in real work. I start with the problem, decide what is worth testing, and move ambiguous ideas toward products people can actually use.",
      primaryAction: "View my work",
      secondaryAction: "Contact me",
      noteLabel: "What I care about",
      note: "Not only whether a feature can be built, but whether it makes someone’s work meaningfully better.",
      portraitLabel: "PORTRAIT",
      portraitTitle: "Professional photo to be added",
      portraitNote: "Use a natural photo that shows you in a real working moment",
    },
    education: {
      eyebrow: "EDUCATION",
      title: "Education",
      intro: "Add your school, degree or major, relevant coursework, and study dates here. Each entry stays as one clear personal record.",
      fieldLabels: {
        degree: "DEGREE / MAJOR",
        coursework: "COURSEWORK / FOCUS",
      },
      records: [
        {
          school: "School name to be added",
          degree: "Degree and major to be added",
          coursework: "Relevant coursework, projects, or learning focus to be added",
          time: "Dates to be added",
        },
        {
          school: "School name to be added",
          degree: "Degree and major to be added",
          coursework: "Relevant coursework, projects, or learning focus to be added",
          time: "Dates to be added",
        },
      ],
      noteLabel: "FILLING NOTE",
      note: "Keep each entry focused on what supports the role you want. School, major, and dates provide the basics. Coursework or projects can show the learning direction you want a hiring team to notice.",
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
    approach: {
      eyebrow: "HOW I WORK",
      title: "Make the problem clear before making the solution",
      intro:
        "This is the order I use to manage product uncertainty. It is not a rigid process, but a set of habits that helps a team reduce avoidable mistakes.",
      steps: [
        {
          step: "01",
          title: "Hear the real situation",
          description: "Understand how someone works today, where they hesitate, repeat work, or give up.",
        },
        {
          step: "02",
          title: "Write down the judgment",
          description: "Put the goal, assumptions, risks, and deliberate non-goals on the same page.",
        },
        {
          step: "03",
          title: "Learn with the smallest useful version",
          description: "Build enough to test the riskiest assumption before building every idea.",
        },
        {
          step: "04",
          title: "Let evidence shape the next move",
          description: "Read behavior, feedback, and business outcomes together, then revise the judgment.",
        },
      ],
    },
    about: {
      eyebrow: "ABOUT SKYLAR",
      title: "I like making complex things clear, and making progress with people",
      paragraphs: [
        "I’m a product manager focused on making AI useful in real work. Rather than chasing every new concept, I care about what happens after technology enters a workflow: whether people understand it, trust it, and keep using it.",
        "I enjoy finding the central problem in messy information, and I value disagreement during the process. Strong product judgment rarely comes from one person’s inspiration. It grows from a team’s shared understanding of the facts.",
        "My experience, industry background, and current interests will be added here.",
      ],
      asideLabel: "CURRENTLY",
      aside: "Adding real project and career details, while staying open to conversations about AI products, user experience, and collaboration.",
    },
    contact: {
      eyebrow: "LET'S TALK",
      title: "If you want to know how I think in more detail, get in touch",
      availability: "Open to: AI product roles · Project collaboration · Peer conversations",
      missing: "To be added",
    },
    footer: "Personal portfolio, first edition · Real work in progress",
  },
};
