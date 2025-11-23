import { SlideData, SlideType } from './types';
import { 
  Database, 
  Workflow, 
  Bot, 
  Layout, 
  Share2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Zap, 
  FileText,
  Layers,
  BrainCircuit,
  PieChart,
  ArrowRightLeft,
  Briefcase
} from 'lucide-react';

export const SLIDES: SlideData[] = [
  // 1. Cover
  {
    id: 1,
    type: SlideType.TITLE,
    title: "飞书多维表格：企业数字化转型的新引擎",
    subtitle: "打通业务壁垒，重塑数据价值",
    highlight: "面向未来的业务管理解决方案",
    icon: Database
  },
  // 2. Core Value Proposition
  {
    id: 2,
    type: SlideType.QUOTE,
    title: "核心价值",
    content: [
      "飞书多维表格对于企业最大的价值，不仅仅是工具，而是通过打通业务流程和管理流程，帮助企业真正实现了数据的打通和统一。",
      "如果不解决业务流程、数据的打通，企业的提效就无从谈起。"
    ],
    highlight: "数据打通 = 提效的基础"
  },
  // 3. Concept: Business Data Abstraction
  {
    id: 3,
    type: SlideType.PROCESS,
    title: "商业数据的全链路抽象",
    subtitle: "多维表格如何重构业务流",
    bullets: [
      "获取数据：连接孤岛",
      "处理数据：AI 赋能",
      "传输数据：流程自动化",
      "存储数据：结构化沉淀",
      "呈现数据：千人千面"
    ],
    highlight: "五步闭环，一站式解决",
    icon: Layers
  },
  // 4. Step 1: Acquire Data
  {
    id: 4,
    type: SlideType.content,
    title: "1. 获取数据：打破孤岛",
    subtitle: "连接一切业务系统",
    content: [
      "传统痛点：数据散落在ERP、CRM、Excel及各类SaaS软件中，形成信息孤岛。",
      "飞书解法：提供丰富的数据接口（API）和连接器。"
    ],
    bullets: [
      "无缝对接ERP/CRM后台数据",
      "支持各种平台数据自动同步",
      "让多维表格成为企业数据的汇聚中心"
    ],
    icon: Share2
  },
  // 5. Step 2: Process Data
  {
    id: 5,
    type: SlideType.content,
    title: "2. 处理数据：AI 智能驱动",
    subtitle: "非结构化数据的结构化处理",
    content: [
      "飞书多维表格通过「字段捷径」配置了强大的AI能力，能够理解和处理绝大部分商业数据。",
    ],
    bullets: [
      "支持文字、图片、视频、声音的多模态处理",
      "AI 自动提取关键信息（如从发票图片提取金额）",
      "极大降低人工录入和清洗数据的成本"
    ],
    icon: BrainCircuit
  },
  // 6. Step 3: Transfer & Store
  {
    id: 6,
    type: SlideType.content,
    title: "3. 传输与存储：流动的数据库",
    subtitle: "精细化控制数据流转",
    content: [
      "多维表格本身就是高性能数据库，数据库之间的数据流转非常简单。",
    ],
    bullets: [
      "结合「工作流」功能，精准控制数据走向",
      "数据在不同部门、不同表格间实时同步",
      "确保单一数据源（Single Source of Truth），避免版本混乱"
    ],
    icon: ArrowRightLeft
  },
  // 7. Step 4: Present Data
  {
    id: 7,
    type: SlideType.content,
    title: "4. 呈现数据：应用模式",
    subtitle: "从「表格」到「产品」的质变",
    content: [
      "应用模式让多维表格超越了数据库的范畴，直接生成可视化的前端业务系统。",
    ],
    bullets: [
      "提供友好的前端界面，提升员工使用体验",
      "强大的权限控制系统，实现千人千面的数据可见性",
      "企业控制数据安全与用户体验的双重达成"
    ],
    icon: Layout
  },
  // 8. Feature Deep Dive: App Mode
  {
    id: 8,
    type: SlideType.GRID,
    title: "核心特性：应用模式与权限",
    subtitle: "安全与灵活并重",
    bullets: [
      "联动数据实时更新：前端操作，后台数据秒级同步",
      "强大的权限控制：谁能看、谁能改、谁能删，精确到字段",
      "自动化流程触发：在应用界面直接驱动业务流转",
      "无需代码开发：所见即所得的搭建体验"
    ],
    icon: ShieldCheck
  },
  // 9. Feature Deep Dive: Workflow
  {
    id: 9,
    type: SlideType.content,
    title: "核心特性：自动化工作流",
    subtitle: "业务流程的自动化引擎",
    bullets: [
      "数据联动：不同表格间建立联动，自动同步更新",
      "数据审核：内置审批流，确保数据录入的准确性与合规性",
      "通知提醒：状态变更自动推送到飞书聊天，信息零延迟",
      "权限动态管理：根据流程节点自动赋予或回收权限"
    ],
    icon: Workflow
  },
  // 10. AI Capabilities Overview
  {
    id: 10,
    type: SlideType.SECTION,
    title: "AI 赋能：多维表格的智能进化",
    subtitle: "让每一个表格都拥有大模型的大脑",
    icon: Bot
  },
  // 11. AI: Batch Processing
  {
    id: 11,
    type: SlideType.content,
    title: "AI 能力：批量化与自动化",
    subtitle: "效率的几何级提升",
    bullets: [
      "批量调用大模型：通过AI字段捷径，一次性处理成千上万条数据",
      "结构化生成：将模糊的需求转化为标准的结构化数据",
      "驱动业务自动化：将AI模型转化为实际的业务工具（如自动写销售跟进）"
    ],
    icon: Zap
  },
  // 12. AI: Smart Creation & Insights
  {
    id: 12,
    type: SlideType.content,
    title: "AI 能力：智能创建与洞察",
    subtitle: "你的智能业务伙伴",
    bullets: [
      "智能建表：一句话描述需求，自动生成完整业务系统",
      "数据洞察：自动分析表格数据，生成总结与建议",
      "智能填报：自动解析非结构化文本，填充表格字段",
      "智能推荐：根据当前业务，推荐可能需要的补充字段"
    ],
    icon: FileText
  },
  // 13. Business Value: Management
  {
    id: 13,
    type: SlideType.CHART,
    title: "商业价值：提高管理效率",
    subtitle: "数字化管理驾驶舱",
    content: [
      "通过约束看板，项目进度一目了然。管理者不再依赖口头汇报，而是基于实时数据决策。",
    ],
    chartData: [
      { name: '传统汇报', value: 30 },
      { name: '实时看板', value: 95 },
    ],
    highlight: "管理效率提升 200%+",
    icon: TrendingUp
  },
  // 14. Business Value: Cost & R&D
  {
    id: 14,
    type: SlideType.GRID,
    title: "商业价值：降本增效",
    subtitle: "不仅省钱，更省时间",
    bullets: [
      "降低IT成本：单人即可配置，无需专业开发团队，全员快速上手",
      "提升研发效率：业务部门自行搭建，释放产研资源去攻克核心难题",
      "全自动计算：减少人工统计的人力成本和错误率"
    ],
    icon: Users
  },
  // 15. Business Value: Unified Data
  {
    id: 15,
    type: SlideType.content,
    title: "商业价值：统一数据资产",
    subtitle: "打破数据孤岛",
    bullets: [
      "流程管理统一：标准化的数据录入与流转",
      "数据指标统一：消除口径不一致带来的决策偏差",
      "辅助科学决策：基于全量、实时、准确的数据做判断"
    ],
    icon: Database
  },
  // 16. Case Study: Intro
  {
    id: 16,
    type: SlideType.SECTION,
    title: "落地案例：百安居 (B&Q)",
    subtitle: "零售巨头的数字化销售战报革新",
    icon: Briefcase
  },
  // 17. Case Study: Challenge
  {
    id: 17,
    type: SlideType.content,
    title: "百安居：面临的挑战",
    subtitle: "传统模式的痛点",
    content: [
      "作为大型建材零售超市，百安居拥有海量SKU和庞大的销售团队。",
    ],
    bullets: [
      "数据滞后：依靠人工Excel统计，销售战报往往滞后",
      "流程繁琐：店长需要手动汇总各区域数据，耗时耗力",
      "信息不同步：管理层无法实时看到全国各门店的销售动态"
    ],
    icon: ArrowRightLeft
  },
  // 18. Case Study: Solution
  {
    id: 18,
    type: SlideType.PROCESS,
    title: "百安居：解决方案",
    subtitle: "用仪表盘制作销售战报",
    bullets: [
      "数据录入：一线销售通过手机端多维表格实时录入业绩",
      "自动汇总：系统利用公式和自动化流程实时聚合数据",
      "可视化呈现：配置仪表盘，生成动态销售战报",
      "自动推送：定时将战报推送到管理群，激励团队"
    ],
    icon: Workflow
  },
  // 19. Case Study: Result
  {
    id: 19,
    type: SlideType.CHART,
    title: "百安居：实施效果",
    subtitle: "实时、透明、高效",
    content: [
      "彻底告别了人工制表的低效时代，实现了数据的实时流动。",
    ],
    chartData: [
      { name: '数据时效(小时)', value: 24, type: 'Before' },
      { name: '数据时效(小时)', value: 0.1, type: 'After' },
    ],
    highlight: "数据时效性提升至秒级，管理半径大幅延伸",
    icon: TrendingUp
  },
  // 20. Scenarios: Sales
  {
    id: 20,
    type: SlideType.content,
    title: "应用场景：销售跟进管理",
    subtitle: "从线索到回款的全流程闭环",
    bullets: [
      "线索录入：自动分配销售人员，即时通知",
      "跟进记录：AI 辅助生成跟进摘要，语音转文字",
      "阶段管理：精细化控制销售漏斗，预测业绩",
      "合同管理：关联审批流，自动生成合同文件"
    ],
    icon: Users
  },
  // 21. Scenarios: Project Management
  {
    id: 21,
    type: SlideType.content,
    title: "应用场景：项目管理 (PMO)",
    subtitle: "让项目透明化、可控化",
    bullets: [
      "任务拆解：WBS 结构化分解，责任到人",
      "进度追踪：甘特图视图，直观展示依赖关系",
      "风险预警：进度延期自动触发红灯预警通知",
      "资源复盘：自动统计工时投入与产出比"
    ],
    icon: Layout
  },
  // 22. Summary / CTA
  {
    id: 22,
    type: SlideType.TITLE,
    title: "拥抱飞书多维表格",
    subtitle: "开启企业业务自动化的新篇章",
    highlight: "数据统一 · 流程打通 · AI 提效",
    icon: Zap
  },
];