import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, MapPin, Calendar, ArrowRight, Mail, Phone, Award, BookOpen, FlaskConical, Users, GraduationCap, FileText, TrendingUp, Users2 } from 'lucide-react'

interface TeamLeader {
  id: number
  name: string
  nameEn: string
  title: string
  role: string
  honors: string[]
  education: string
  email: string
  phone: string
  bio: string
  directions: string[]
  achievements: {
    papers: number
    patents: number
    transfer: string
  }
  researchAchievements: string
  academicPositions: string[]
  fundedProjects: string[]
  images: string[]
}

interface CoreMember {
  id: number
  name: string
  title: string
  role: string
  honors: string
  email: string
  direction: string
  bio: string
  researchAchievements: string
  academicPositions: string
  fundedProjects: string
  images: string[]
}

interface TeamMember {
  id: number
  name: string
  degree: string
  mentor?: string
  email?: string
  image?: string
  images?: string[]
  education?: string
  researchDirection?: string
  researchAchievements?: string
  academicPositions?: string
  fundedProjects?: string
  employment?: string
}

interface ResearchArea {
  id: number
  title: string
  description: string
  icon: string
}

interface TimelineEvent {
  id: number
  date: string
  location: string
  title: string
  description: string
  image: string
}

interface Publication {
  id: number
  authors: string
  title: string
  journal: string
  year: string
  volume: string
  pages?: string
  doi?: string
  isYangFirst: boolean
  isYangCorresponding: boolean
}

interface Project {
  id: number
  name: string
  projectNumber: string
  funding: string
  host: string
  status: '在研' | '结题'
  category: string
}

// 团队负责人 - 杨志禄
const teamLeader: TeamLeader = {
  id: 1,
  name: '杨志禄',
  nameEn: 'Dr. Yang Zhilu',
  title: '研究员，博士生/博士后导师',
  role: '团队负责人',
  honors: ['连续入选斯坦福大学-Elsevier"2023-2025全球前2%顶尖科学家"'],
  education: '工学博士（西南交通大学）',
  email: 'zhiluyang1029@smu.edu.cn；zhiluyang1029@126.com',
  phone: '0769-28637896',
  bio: '南方医科大学第十附属医院（高层次引进人才），研究员，博士生/博士后导师，四川省杰青、东莞市特色人才（一类）、东莞市医学领军人才，东莞市智能生物材料与再生医学重点实验室主任，中国生物材料学会科学技术奖一等奖（排名：2/7）、天津市技术发明奖一等奖（排名：5/12）及四川省科学技术进步奖三等奖获得者（排名：2/6），广州南创珠峰医疗科技有限公司董事会董事，国际期刊Smart Materials in Medicine创刊主编，中国科协旗舰期刊Research副主编，中国解剖学会血管分会副主任委员、中国生物材料学会康复器械与生物材料分会常务委员',
  directions: [
    '心血管动脉粥样硬化（AS）病理发病机制',
    '器官芯片、类器官',
    '智能载药纳米靶向药物及微纳机器人',
    '血管支架表面功能仿生修饰',
    '工程化干细胞',
    '可降解医用金属植入/介入器械表面防腐及功能修饰',
    '心肌再生修复'
  ],
  achievements: {
    papers: 80,
    patents: 40,
    transfer: '1500万'
  },
  researchAchievements: '以通讯/第一作者在包括PNAS, Nature Communications, Angewandte Chemie International Edition, The Innovation, Advanced Functional Materials, Exploration, Research, Advanced Science, Bioactive Materials及Biomaterials等国际知名期刊上共发表SCI收录论文80余篇。申请发明专利40余项，其中授权34项（包括美国发明专利1项，转让5项）。主导发展的具有完全自主知识产权的"基于一氧化氮催化释放的内皮功能仿生血管支架涂层技术"已成功实现转让（转让费：1500万），该涂层技术用于开发具备病变血管再生修复功能的新一代可降解镁合金支架。',
  academicPositions: [
    'KeAi旗下国际期刊Smart Materials in Medicine创刊主编',
    '中国科协旗舰刊Research副主编（Deputy Editor，IF=12.9）',
    'Bioactive Materials（IF=23.6）及Engineered Regeneration编委',
    '中国解剖学会血管分会副主任委员',
    '中国生物材料学会康复器械与生物材料分会常务委员',
    '中国病理生理学会专业委员会青年委员',
    '中国生物材料学会医用金属材料分会委员',
    '中国生物材料学会血液净化材料分会委员',
    '中国腐蚀与防护学会医用金属材料腐蚀控制分会委员'
  ],
  fundedProjects: [
    '国家自然科学基金--国际(地区)合作与交流项目',
    '广东省基础与应用基础研究基金--区域联合基金项目（粤港澳研究团队项目）',
    '国家自然科学基金--面上项目（3项）',
    '四川省杰出青年基金',
    '国家自然科学基金--青年科学基金项目',
    '四川省国际科技创新合作项目',
    '东莞市社会发展科技项目（高水平医院建设专项）',
    '东莞市卫健委医学领军人才专科团队项目'
  ],
  images: [
    './images/杨志禄证件照新.jpg',
    './images/杨志禄 参会照.png',
    './images/杨志禄 生活照.jpg',
    './images/杨志禄工作照.jpg'
  ]
}

// 核心成员
const coreMembers: CoreMember[] = [
  {
    id: 2,
    name: '王颖',
    title: '副研究员，硕士研究生导师',
    role: '核心成员',
    honors: '广东省卫健委特支计划-青年拔尖人才、创新东莞青年科技创新奖',
    email: 'wangying277@outlook.com',
    direction: '主要从事于病理组织模型构建和器官芯片的研究工作，包括水凝胶、高分子聚合物等生物材料、血管化组织工程、药物筛选、微流控技术、生物3D打印等相关研究。',
    bio: '工学博士（华侨大学），南方医科大学第十附属医院（高层次引进人才），副研究员，硕士研究生导师。研究涵盖水凝胶、高分子聚合物等生物材料、血管化组织工程、药物筛选、微流控技术、生物3D打印等相关研究。',
    researchAchievements: '研究成果在包括Advanced Science, Cell Biomaterials, Research, Biomaterials及Bioactive Materials等国际一流学术期刊累计发表SCI论文10余篇。获得授权发明专利10项。',
    academicPositions: '担任《中国材料科学进展》编委',
    fundedProjects: '广东省卫健委特支计划-青年拔尖人才项目、国家自然科学基金--青年科学基金项目、广东省基础与应用基础研究基金--面上项目（2项）、南方医科大学高层次人才支持与发展计划项目、东莞市社会发展科技项目重点项目、广东省基础与应用基础研究基金--区域联合基金项目（地区培育项目）',
    images: [
      './images/王颖证件照.png',
      './images/王颖 生活照.jpg',
      './images/王颖 生活照 (2).jpg'
    ]
  },
  {
    id: 3,
    name: '张文泰',
    title: '副研究员，硕士研究生导师',
    role: '核心成员',
    honors: '创新东莞青年科技创新奖',
    email: 'zhang.wentai@foxmail.com',
    direction: '从事于血管支架及纳米靶向药物研究工作，包括可降解金属植入/介入器械合金制备、腐蚀与应用电化学、表面功能化改性、智能载药纳米靶向粒子构建及用于动脉粥样硬化血管及心肌治疗等相关研究。',
    bio: '工学博士（西南交通大学），南方医科大学第十附属医院（高层次引进人才），副研究员，硕士研究生导师。研究方向包括可降解金属植入/介入器械合金制备、腐蚀与应用电化学、表面功能化改性、智能载药纳米靶向粒子构建及用于动脉粥样硬化血管及心肌治疗等相关研究。',
    researchAchievements: '研究成果以第一/通讯作者在包括Advanced Functional Materials, Advanced Science, Bioactive Materials, Biomaterials等国际知名期刊上发表SCI论文13篇，获得授权发明专利20余项。',
    academicPositions: '担任国际期刊Smart Materials in Medicine管理编辑、Research青年编委',
    fundedProjects: '国家自然科学基金--青年科学基金项目、广东省基础与应用基础研究基金--区域联合基金项目（地区培育项目）、南方医科大学高层次人才支持与发展计划项目、中国博士后基金--面上项目、广东省基础与应用基础研究基金--区域联合基金项目（青年基金项目）',
    images: [
      './images/张文泰证件照.jpg',
      './images/张文泰 参会照.jpg'
    ]
  }
]

// 在站博士后
const postdocsCurrent: TeamMember[] = [
  {
    id: 101,
    name: '牟小辉',
    degree: '博士后（2024年6月入站）',
    education: '工学博士（西南交通大学）',
    mentor: '杨志禄',
    email: 'XiaohuiMou0313@163.com',
    image: './images/牟小辉.png',
    researchDirection: '主要从事基于氧化剂和过渡金属离子介导的蛋白组装技术构建2D微纳米涂层及其在心血管植入/介入器械表面功能修饰方面的研究。',
    researchAchievements: '科研成果以第一/通讯作者在Angewandte Chemie International Edition, Advanced Science, Research, Bioactive Materials, Biomaterials等国际知名期刊上发表。',
    academicPositions: '担任国际期刊Smart Materials in Medicine管理编辑、EngMedicine（中国科技期刊卓越计划高起点新刊）青年编委。',
    fundedProjects: '国家自然科学基金--青年科学基金项目、中国博士后基金--面上项目、广东省基础与应用基础研究基金--区域联合基金项目（青年基金项目）、国家资助博士后研究人员计划B档'
  },
  {
    id: 102,
    name: '马青',
    degree: '博士后（2025年7月入站）',
    education: '工学博士（西南交通大学）',
    mentor: '杨志禄',
    email: 'mq8023mq@163.com',
    image: './images/马青.png',
    researchDirection: '主要从事心血管植入/介入器械表面功能仿生修饰方面的研究。',
    researchAchievements: '以第一/共一作者在包括Research, Bioactive Materials（2篇）及Exploration等国际知名期刊上发表SCI论文3篇。',
    fundedProjects: '中国博士后基金--面上项目、国家资助博士后研究人员计划C档'
  },
  {
    id: 103,
    name: '付艳',
    degree: '博士后（2026年4月入站）',
    education: '医学博士（南方医科大学）',
    mentor: '杨志禄',
    email: 'fy12210046@smu.edu.cn',
    image: './images/付艳.jpg',
    researchDirection: '主要从事微环境自适应性智能血管支架设计及用于替代传统血管支架体外细胞评价的AS病理模型血管芯片研究。',
    researchAchievements: '科研成果以第一/共一作者在国际知名期刊Bioactive Materials（2篇）上发表。'
  }
]

// 已出站博士后
const postdocsAlumni: TeamMember[] = [
  {
    id: 201,
    name: '吕楠',
    degree: '博士后（2022年1月-2024年1月）',
    education: '工学博士（西南交通大学）',
    mentor: '杨志禄',
    email: 'Janus110328@163.com',
    image: './images/吕楠.jpg',
    researchDirection: '研究方向聚焦于心血管植入/介入器械表面功能改性。',
    researchAchievements: '研究成果在Advanced Science, Bioactive Materials等国际知名期刊发表SCI论文数篇。',
    fundedProjects: '国家自然科学基金--青年科学基金项目',
    employment: '四川省纺织科学研究院纤维科学研究所，研发工程师'
  },
  {
    id: 202,
    name: '刘小嘉',
    degree: '博士后（2022年7月-2025年6月）',
    education: '工学博士（哈尔滨工业大学-深圳校区）',
    mentor: '杨志禄',
    email: 'liuxj@hit.edu.cn',
    image: './images/刘小嘉.jpg',
    researchDirection: '生物微纳米机器人与智能传感研究，重点是基于金属基微纳米材料的智能医学检测、自驱动微纳米马达用于抗肿瘤和传感检测等生物医学应用。',
    researchAchievements: '研究成果发表在ACS Nano, Research, Analytical Chemistry等国际知名期刊，累计JCR 1区论文15篇（一作6篇），完成授权发明专利1项。',
    fundedProjects: '国家自然科学基金--青年科学基金项目、中国博士后基金--面上项目',
    employment: '哈尔滨工业大学（深圳校区）集成电路学院，副研究员'
  },
  {
    id: 203,
    name: '柴牧原',
    degree: '博士后（2023年7月-2025年6月）',
    education: '工学博士（华南理工大学）',
    mentor: '杨志禄',
    email: 'chaimuyuan@126.com',
    image: './images/柴牧原.jpg',
    researchDirection: '医用水凝胶材料设计与3D打印相关研究，聚焦生物材料在生殖系统修复与功能重建等临床应用。',
    researchAchievements: '研究成果发表在Matter, Research, Bioactive Materials, BMEMat, Journal of Hazardous Materials等国际知名期刊，累计论文10余篇，完成授权发明专利3项。',
    fundedProjects: '国家自然科学基金--青年科学基金项目、广东省基础与应用基础研究基金--区域联合基金项目（青年基金项目）、中国博士后基金--面上项目、国家资助博士后研究人员计划C档、2025年度博士后科研业绩评估考核资助',
    employment: '华南理工大学材料科学与工程学院，研究助理教授'
  },
  {
    id: 204,
    name: '窦正龙',
    degree: '博士后（2023年7月-2025年12月）',
    education: '工学博士（西南交通大学）',
    mentor: '杨志禄',
    email: 'zhengld@my.swjtu.edu.cn',
    image: './images/窦正龙.jpg',
    researchDirection: '无稀土可降解镁合金材料设计及其在血管支架制造中的应用、镁合金支架表面防腐及功能化研究。',
    researchAchievements: '研究成果在Bioactive Materials, Journal of Materials Science and Technology等国际知名期刊发表SCI论文数篇。',
    fundedProjects: '国家资助博士后研究人员计划C档',
    employment: '广西民族大学，材料与环境学院，副教授（高层次人才引进）'
  }
]

// 博士研究生
const phdStudents: TeamMember[] = [
  { id: 301, name: '刘燕芸', degree: '博士（2023级）', mentor: '杨志禄', image: './images/刘燕芸.jpg' },
  { id: 302, name: '黄榆婷', degree: '博士（2024级）', mentor: '杨志禄', image: './images/黄榆婷.jpg' },
  { id: 303, name: '尹思微', degree: '博士（2025级）', mentor: '杨志禄', image: './images/尹思微.jpg' },
  { id: 304, name: '朱沐兰', degree: '博士（2026级）', mentor: '杨志禄', image: './images/朱沐兰证件照白底.jpg' },
  { id: 305, name: '何健', degree: '博士（2026级）', mentor: '杨志禄', image: './images/何健.png' }
]

// 硕士研究生（统一列表）
const mastersStudents: TeamMember[] = [
  { id: 401, name: '杨钧仁', degree: '硕士（2024级）', mentor: '杨志禄', image: './images/杨钧仁.jpg' },
  { id: 402, name: '李沐', degree: '硕士（2024级）', mentor: '杨志禄', image: './images/李沐.jpg' },
  { id: 403, name: '洪扬', degree: '硕士（2024级，河北工业大学联合培养）', mentor: '杨志禄', image: './images/洪扬.jpg' },
  { id: 404, name: '何桂湘', degree: '硕士（2025级）', mentor: '杨志禄', image: './images/何桂湘.jpg' },
  { id: 405, name: '杨志', degree: '硕士（2026级）', mentor: '杨志禄' },
  { id: 406, name: '杨晓瑜', degree: '硕士（2026级）', mentor: '杨志禄' },
  { id: 407, name: '吴文彬', degree: '硕士（2026级）', mentor: '杨志禄' },
  { id: 501, name: '白娜', degree: '硕士（2024级）', mentor: '王颖', image: './images/白娜.jpg' },
  { id: 502, name: '杜婉莹', degree: '硕士（2026级）', mentor: '王颖' },
  { id: 503, name: '支建豪', degree: '硕士（2026级）', mentor: '王颖' },
  { id: 601, name: '李晨豪', degree: '硕士（2025级）', mentor: '张文泰', image: './images/李晨豪.png' },
  { id: 602, name: '谭霞', degree: '硕士（2026级）', mentor: '张文泰' },
  { id: 603, name: '孟羿飞', degree: '硕士（2026级）', mentor: '张文泰' },
  { id: 604, name: '王梦杨', degree: '硕士（2026级）', mentor: '张文泰' }
]

// 毕业博士研究生
const alumniPhd: TeamMember[] = [
  { id: 701, name: '付艳', degree: '博士（2022级）', mentor: '杨志禄' },
  { id: 702, name: '牟小辉', degree: '博士（2017级）', mentor: '杨志禄', email: '西南交通大学联合培养' },
  { id: 703, name: '岳思远', degree: '博士（2019级）', mentor: '杨志禄', email: '西南交通大学联合培养' },
  { id: 704, name: '杜泽煜', degree: '博士（2020级）', mentor: '杨志禄', email: '西南交通大学联合培养' },
  { id: 705, name: '马青', degree: '博士（2021级）', mentor: '杨志禄', email: '西南交通大学联合培养' }
]

// 毕业硕士研究生
const alumniMasters: TeamMember[] = [
  { id: 801, name: '杨梦毅', degree: '硕士（2020级）', email: '西南交通大学联合培养' },
  { id: 802, name: '胡芳坤', degree: '硕士（2020级）', email: '西南交通大学联合培养' },
  { id: 803, name: '金磊源', degree: '硕士（2020级）', email: '西南交通大学联合培养' },
  { id: 804, name: '李达', degree: '硕士（2020级）', email: '西南交通大学联合培养' },
  { id: 805, name: '田洋', degree: '硕士（2020级）', email: '河北工业大学联合培养' },
  { id: 806, name: '王燕', degree: '硕士（2021级）', email: '武汉大学联合培养' },
  { id: 807, name: '柯佑', degree: '硕士（2021级）', email: '西南交通大学联合培养' },
  { id: 808, name: '汪川哲', degree: '硕士（2021级）', email: '西南交通大学联合培养' },
  { id: 809, name: '徐佳乐', degree: '硕士（2021级）', email: '西南交通大学联合培养' },
  { id: 810, name: '张彬', degree: '硕士（2021级）', email: '哈尔滨工业大学（深圳）联合培养' },
  { id: 811, name: '李可韵', degree: '硕士（2022级）', email: '西南交通大学联合培养' },
  { id: 812, name: '刘静', degree: '硕士（2022级）', mentor: '王颖' },
  { id: 813, name: '唐霞', degree: '硕士（2023级）' },
  { id: 814, name: '何健', degree: '硕士（2023级）', email: '西南交通大学联合培养' }
]

const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: '心血管生物材料',
    description: '开发具有调控病变血管组织再生修复功能的血管支架，突破传统支架的局限性',
    icon: 'FlaskConical'
  },
  {
    id: 2,
    title: '器官芯片与类器官',
    description: '构建病理模型类血管/心脏芯片，用于指导前沿交叉研究工作',
    icon: 'Users'
  },
  {
    id: 3,
    title: '智能纳米药物',
    description: '发展智能载药纳米机器人、纳米靶向药物，用于心血管疾病的精准治疗',
    icon: 'BookOpen'
  }
]

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: '2024年3月',
    location: '云南大理',
    title: '年度团队建设活动',
    description: '苍山洱海旁的心灵之旅，团队凝聚力进一步增强',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    date: '2023年11月',
    location: '浙江杭州',
    title: '学术交流会议',
    description: '参加全国心血管疾病学术年会，与同行深入交流',
    image: 'https://images.unsplash.com/photo-1531668856033-f23484c62833?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    date: '2023年7月',
    location: '海南三亚',
    title: '夏季拓展训练',
    description: '海边团队拓展活动，挑战自我，超越极限',
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&h=400&fit=crop'
  }
]

// 代表性科研论文
const publications: Publication[] = [
  { id: 53, authors: 'Chenghua Wang#, Yanyun Liu#, Mu Li, Yan Fu, Tao Rui, Rong Gu, Chengduan Yang*, Zhilu Yang*, Biao Xu*', title: 'A bioinspired long-acting chlorhexidine-eluting super-hydrophilic coating on vascular catheters prevents thrombosis and biofouling', journal: 'Bioactive Materials', year: '2027', volume: '67', pages: '740-756', isYangFirst: false, isYangCorresponding: true },
  { id: 52, authors: 'Qing Ma, Wenxuan Wang, Xiaohui Mou, Wentai Zhang, Yuting Huang, Siwei Yin, Wenjie Tian*, Jianbing Zhu*, Zhilu Yang*', title: 'An albumin-armed fibronectin fragment assembly on stents enables immune evasion, thrombosis prevention, and self-adaptive vascular cell selectivity', journal: 'Bioactive Materials', year: '2026', volume: '64', pages: '180-192', isYangFirst: false, isYangCorresponding: true },
  { id: 51, authors: 'Jiannan Zhou, An Li, Jiahao Chen, Jingtao Dai, Wentai Zhang*, Zhilu Yang*, Ping Li*', title: 'Mapping immune-inflammatory niches on zirconia bone implants: Single-cell transcriptomic profiling', journal: 'Research', year: '2026', volume: '9', pages: '1162', isYangFirst: false, isYangCorresponding: true },
  { id: 50, authors: 'Zhenglong Dou*, Jian He, Qiufen Tu, Zhilu Yang*, Nan Huang*', title: 'Extrusion-hot rolling assisted microstructure refinement and corrosion control in Mg alloy micro-tubes for vascular stents', journal: 'Journal of Materials Science and Technology', year: '2026', volume: '264', pages: '321-337', isYangFirst: false, isYangCorresponding: true },
  { id: 49, authors: 'Yan Fu, Nan Lyu, Xiaohui Mou, Ying Wang, Wentai Zhang, Siwei Yin, Mu Li, Na Bai, Nan Huang, Xin Li, Yifeng Lei*, Jun Hou*, Zhilu Yang*', title: 'Glutathione peroxidase mimic-engineered α-lactalbumin self-assembling coatings tailor immunomodulatory vascular stents for suppressing restenosis', journal: 'Bioactive Materials', year: '2026', volume: '58', pages: '89-106', isYangFirst: false, isYangCorresponding: true },
  { id: 48, authors: 'Xiaohui Mou, Jieyuan Shi, Wentai Zhang, Qing Ma, Wenxuan Wang, Yuting Huang, Siwei Yin, Ying Wang, Nan Huang, Guoqing Pan*, Chengduan Yang*, Zhilu Yang*', title: 'Mimicking the macrophage immune mechanism for infection and thrombosis prevention on a dual-activity hybrid enzyme-assembled surface', journal: 'Angewandte Chemie International Edition', year: '2026', volume: '65', pages: 'e19702', isYangFirst: false, isYangCorresponding: true },
  { id: 47, authors: 'Jing Liu, Mulan Zhu, Na Bai, Nan Huang, Wentai Zhang, Zhilu Yang*, Ying Wang*', title: 'Microfluidic perfusable pathological vasculature for atherosclerosis drug screening', journal: 'Research', year: '2025', volume: '8', pages: '0902', isYangFirst: false, isYangCorresponding: true },
  { id: 46, authors: 'Zhenglong Dou#, Yan Fu#, Shuiling Chen, Manfred F. Maitz, Wengtai Zhang, Keyun Li, Jingcheng Zheng, Zhen Zhang*, Nan Huang*, Zhilu Yang*', title: 'A Hierarchical MgF2/Polyurethane/Pitavastatin coating alleviates degradation and enhances endothelialization of bioresorbable magnesium alloy stents', journal: 'Bioactive Materials', year: '2025', volume: '54', pages: '509-530', isYangFirst: false, isYangCorresponding: true },
  { id: 45, authors: 'Xiaoyu Hu#, Xiaohui Mou#, Gaoxing Pan#, Yanyun Liu, Wenjing Song, Peijie Xiao, Lu Xu, Fenglu Li, Renjie Ruan, Yueqing Chen, Jinfeng Wu*, Zhilu Yang*, Jin Zhang*', title: 'Vascular intima-biomimetic bilayer hydrogel coating of central venous catheters with dual-modal anti-coagulation and self-adaptive immunomodulation', journal: 'Advanced Functional Materials', year: '2025', volume: 'e11029', isYangFirst: false, isYangCorresponding: true },
  { id: 44, authors: 'Xiaojia Liu, Zihan Xu, Yanan Che, Zichang Guo, Dongdong Jin, Qianqian Wang, Ning Liu*, Xing Ma*, Zhilu Yang*', title: 'Mechanical agitation assisted transmembrane drug delivery by magnetically powered spiky nanorobots', journal: 'Research', year: '2025', volume: '8', pages: '0768', isYangFirst: false, isYangCorresponding: true },
  { id: 43, authors: 'Muyuan Chai, Haolin Bu, Rui Zheng, Zhilu Yang*, Xuetao Shi*', title: 'Immersion phase separation 3D printing for strain-stiffening hydrogel scaffolds', journal: 'Research', year: '2025', volume: '8', pages: '0742', isYangFirst: false, isYangCorresponding: true },
  { id: 42, authors: 'Zeyu Du, Yuting Huang, Wentai Zhang, Qing Ma, Yan Fu, Nan Huang, Xin Li*, Zhilu Yang*, Wenjie Tian*', title: 'Mytilus edulis foot protein mimics for tailoring long-acting endothelium-mimicking anti-thrombotic surfaces', journal: 'Bioactive Materials', year: '2025', volume: '50', pages: '1-13', isYangFirst: false, isYangCorresponding: true },
  { id: 41, authors: 'Jingdong Rao#, Di Suo#, Qing Ma#, Yongyi Mo, Ho-Pan Bei, Li Wang, Chuyang Y. Tang, Kai-Hang Yiu, Shuqi Wang, Zhilu Yang*, Xin Zhao*', title: 'Riding a vascular time train to spatiotemporally attenuate thrombosis and restenosis by double presentation of therapeutic gas and biomacromolecules', journal: 'Exploration', year: '2025', volume: '0', pages: '270004', isYangFirst: false, isYangCorresponding: true },
  { id: 40, authors: 'Chuanzhe Wang, Jie Lv, Xin Li*, Mengyi Yang, Yan Fu, Wenxuan Wang, Zhilu Yang*, Jing Lu*', title: 'Recent advances in surface functionalization of cardiovascular stents', journal: 'Bioactive Materials', year: '2025', volume: '44', pages: '389-410', isYangFirst: false, isYangCorresponding: true },
  { id: 39, authors: 'Wenxuan Wang, Qing Ma, Da Li, Wentai Zhang, Zhilu Yang*, Wenjie Tian*, Nan Huang*', title: 'Engineered endothelium-mimicking antithrombotic surfaces via combination of nitric oxide-generation with fibrinolysis strategies', journal: 'Bioactive Materials', year: '2025', volume: '43', pages: '319-329', isYangFirst: false, isYangCorresponding: true },
  { id: 38, authors: 'Siyuan Yue, Wentai Zhang, Qing Ma, Zhen Zhang*, Jing Lu*, Zhilu Yang*', title: 'Engineering anti-thrombogenic and anti-infective catheters through a stepwise metal-catechol-(amine) surface engineering strategy', journal: 'Bioactive Materials', year: '2024', volume: '42', pages: '366-378', isYangFirst: false, isYangCorresponding: true },
  { id: 37, authors: 'Tian Yue#, Wentai Zhang#, Haifeng Pei, Dunzhu Danzeng, Jian He, Jiali Yang, Yong Luo, Zhen Zhang, Shiqiang Xiong, Xiangbo Yang, Qisen Ji, Zhilu Yang*, Jun Hou*', title: 'Monascus pigment-protected bone marrow-derived stem cells for heart failure treatment', journal: 'Bioactive Materials', year: '2024', volume: '42', pages: '270-283', isYangFirst: false, isYangCorresponding: true },
  { id: 36, authors: 'Qing Ma, Wentai Zhang, Xiaohui Mou, Nan Huang, Haimang Wang*, Hongyu Zhang*, Zhilu Yang*', title: 'Bioinspired zwitterionic block polymer-armored nitric oxide-generating coating combats thrombosis and biofouling', journal: 'Research', year: '2024', volume: '7', pages: '0423', isYangFirst: false, isYangCorresponding: true },
  { id: 35, authors: 'Muyuan Chai, Wenwen Zhong, Shengtao Yan, Tan Ye, Rui Zheng, Zhilu Yang*, Xuetao Shi*', title: 'Diffusion-induced phase separation 3D printed scaffolds for dynamic tissue repair', journal: 'BMEMat', year: '2024', volume: '2', pages: 'e12108', isYangFirst: false, isYangCorresponding: true },
  { id: 34, authors: 'Zeyu Du, Feng Qiao, Liping Tong, Wentai Zhang, Xiaohui Mou, Huaiyu Wang*, Xin Zhao, Manfred F. Maitz, Nan Huang, Zhilu Yang*', title: 'Mimicking Mytilus edulis foot protein: A versatile strategy for robust biomedical coatings', journal: 'The Innovation', year: '2024', volume: '5', pages: '100671', isYangFirst: false, isYangCorresponding: true },
  { id: 33, authors: 'You Ke#, Haotian Meng#, Zeyu Du#, Wentai Zhang, Qing Ma, Yuting Huang, Linxian Cui*, Yifeng Lei*, Zhilu Yang*', title: 'Bioinspired super-hydrophilic zwitterionic polymer armor combats thrombosis and infection of vascular catheters', journal: 'Bioactive Materials', year: '2024', volume: '37', pages: '493-504', isYangFirst: false, isYangCorresponding: true },
  { id: 32, authors: 'Wentai Zhang, Jiangling Zhang, Fangkun Hu, Wenxuan Wang, Zeyu Du, You Ke, Qing Ma, Xiaohui Mou*, Jing Lu*, Zhilu Yang*', title: 'Active dual-protein coating assisted by stepwise protein-protein interactions assembly reduces thrombosis and infection', journal: 'Advanced Science', year: '2024', volume: '11', pages: '2310259', isYangFirst: false, isYangCorresponding: true },
  { id: 31, authors: 'Wentai Zhang, Linxian Cui, Chaoming Xie, Zeyu Du, Xiaohui Mou, Qing Ma, Wenjie Tian*, Zhilu Yang*', title: 'Glycocalyx-inspired dynamic antifouling surfaces for temporary intravascular devices', journal: 'Biomaterials', year: '2024', volume: '304', pages: '122427', isYangFirst: false, isYangCorresponding: true },
  { id: 30, authors: 'Nan Lyu#, Daihua Deng#, Yuting Xiang, Zeyu Du, Xiaohui Mou, Qing Ma, Nan Huang, Jing Lu*, Xin Li, Zhilu Yang*, Wentai Zhang*', title: 'An insect sclerotization-inspired antifouling armor on biomedical devices combats thrombosis and embedding', journal: 'Bioactive Materials', year: '2024', volume: '33', pages: '562-571', isYangFirst: false, isYangCorresponding: true },
  { id: 29, authors: 'Xiaohui Mou, Wan Miao, Wentai Zhang, Wenxuan Wang, Qing Ma, Zeyu Du, Xin Li, Nan Huang*, Zhilu Yang*', title: 'Zwitterionic polymers-armored amyloid-like protein surface combats thrombosis and biofouling', journal: 'Bioactive Materials', year: '2024', volume: '32', pages: '37-51', isYangFirst: false, isYangCorresponding: true },
  { id: 28, authors: 'Jiajia Wei#, Wentai Zhang#, Xiaohui Mou, Haotian Meng, Qing Ma, Wenxuan Wang, Xin Li*, Qiufen Tu, Wenjie Tian*, Nan Huang, Zhilu Yang*', title: 'Bioinspired hemostatic and anti-infective armor for wound healing assisted by metal-phenol-polyamine system', journal: 'Advanced Functional Materials', year: '2023', volume: '2306267', isYangFirst: false, isYangCorresponding: true },
  { id: 27, authors: 'Jingdong Rao#, Xiaohui Mou#, Yongyi Mo, Ho-Pan Bei, Li Wang, Chuyang Y. Tang, Kai-Hang Yiu, Zhilu Yang*, Xin Zhao*', title: 'Gas station in blood vessels: an endothelium mimicking, self-sustainable nitric oxide fueling stent coating for prevention of thrombosis and restenosis', journal: 'Biomaterials', year: '2023', volume: '302', pages: '122311', isYangFirst: false, isYangCorresponding: true },
  { id: 26, authors: 'Qian Liu#, Xueliang Peng#, Xiaojia Liu, Xiaohui Mou, Yayuan Guo, Lihua Yang, Yufei Chen, Yaying Zhou, Zhuoya Shi, Zhilu Yang*, Zhuoyue Chen*', title: 'Advances in the application of bone morphogenetic proteins and their derived peptides in bone defect repair', journal: 'Composites Part B', year: '2023', volume: '262', pages: '110805', isYangFirst: false, isYangCorresponding: true },
  { id: 25, authors: 'Ying Wang*, Nan Huang, Zhilu Yang*', title: 'Revealing the role of zinc ions in atherosclerosis therapy via an engineered three-dimensional pathological model', journal: 'Advanced Science', year: '2023', volume: '2300475', isYangFirst: false, isYangCorresponding: true },
  { id: 24, authors: 'Zhenglong Dou, Shuiling Chen, Jiacheng Wang, Li Xia, Manfred F. Maitz, Qiufen Tu, Wengtai Zhang, Zhilu Yang*, Nan Huang*', title: 'A "built-up" composite film with synergistic functionalities on Mg-2Zn-1Mn bioresorbable stents improves corrosion control effects and biocompatibility', journal: 'Bioactive Materials', year: '2023', volume: '25', pages: '223-238', isYangFirst: false, isYangCorresponding: true },
  { id: 23, authors: 'Lei Zhou, Lu Zhang, Peichuang Li, Manfred F. Maitz, Kebing Wang, Tengda Shang, Sheng Dai, Yudie Fu, Yuancong Zhao, Zhilu Yang*, Jin Wang*, Xin Li*', title: 'Adhesive and Self-Healing Polyurethanes with Tunable Multifunctionality', journal: 'Research', year: '2022', volume: '2022', pages: '9795682', isYangFirst: false, isYangCorresponding: true },
  { id: 22, authors: 'Xiaohui Mou#, Hongbo Zhang#, Hua Qiu#, Wentai Zhang, Ying Wang, Kaiqin Xiong, Nan Huang*, Hélder A. Santos*, and Zhilu Yang*', title: 'Mussel-inspired and bioclickable peptide engineered surface to combat thrombosis and infection', journal: 'Research', year: '2022', volume: '9780879', isYangFirst: false, isYangCorresponding: true },
  { id: 21, authors: 'Jie Sun, Yingkang Huang, Huan Zhao, Junjie Niu, Xuwei Ling, Can Zhu, Lin Wang, Huilin Yang, Zhilu Yang*, Guoqing Pan*, Qin Shi*', title: 'Bio-clickable mussel-inspired peptides improve titanium-based material osseointegration synergistically with immunopolarization-regulation', journal: 'Bioactive Materials', year: '2022', volume: '9', pages: '1-14', isYangFirst: false, isYangCorresponding: true },
  { id: 20, authors: 'Ying Wang, Ranjith Kumar Kankala, Caiwen Ou, Aizheng Chen*, Zhilu Yang*', title: 'Advances in hydrogel-based vascularized tissues for tissue repair and drug screening', journal: 'Bioactive Materials', year: '2022', volume: '9', pages: '198-220', isYangFirst: false, isYangCorresponding: true },
  { id: 19, authors: 'Yin Chen#, Peng Gao#, Lu Huang, Xing Tan, Ningling Zhou, Tong Yang, Hua Qiu, Xin Dai, Sean Michael, Qiufen Tu, Nan Huang, Zhihong Guo, Jianhua Zhou*, Zhilu Yang*, Hongkai Wu*', title: 'A tough nitric oxide-eluting hydrogel coating suppresses neointimal hyperplasia on vascular stent', journal: 'Nature Communications', year: '2021', volume: '12', pages: '7079', isYangFirst: false, isYangCorresponding: true },
  { id: 18, authors: 'Qing Ma#, Xiuying Shi#, Xing Tan, Rui Wang, Kaiqin Xiong, Manfred F. Maitz, Yuanyuan Cui, Zhangmei Hu, Qiufen Tu*, Nan Huang, Li Shen*, Zhilu Yang*', title: 'Durable endothelium-mimicking coating for surface bioengineering cardiovascular stents', journal: 'Bioactive Materials', year: '2021', volume: '12', pages: '4786-4800', isYangFirst: false, isYangCorresponding: true },
  { id: 17, authors: 'Han Yu#, Hua Qiu#, Wenmei Ma, Manfred F. Maitz, Qiufen Tu, Kaiqin Xiong, Jiang Chen*, Nan Huang*, Zhilu Yang*', title: 'Endothelium-Mimicking Surface Combats Thrombosis and Biofouling via Synergistic Long- and Short-Distance Defense Strategy', journal: 'Small', year: '2021', volume: '2100729', isYangFirst: false, isYangCorresponding: true },
  { id: 16, authors: 'Hua Qiu, Qiufen Tu, Peng Gao, Xiangyang Li, Manfred F. Maitz, Kaiqin Xiong*, Nan Huang, Zhilu Yang*', title: 'Phenolic-amine chemistry mediated synergistic modification with polyphenols and thrombin inhibitor for combating the thrombosis and inflammation of cardiovascular stents', journal: 'Biomaterials', year: '2021', volume: '269', pages: '120626', isYangFirst: false, isYangCorresponding: true },
  { id: 15, authors: 'Han Yu, Shaoxing Yu, Hua Qiu, Peng Gao, Yingzhong Chen, Xin Zhao, Qiufen Tu, Minggang Zhou*, Lin Cai, Nan Huang, Kaiqin Xiong*, Zhilu Yang*', title: 'Nitric oxide-generating compound and bio-clickable peptide mimic for synergistically tailoring surface anti-thrombogenic and anti-microbial dual-functions', journal: 'Bioactive Materials', year: '2021', volume: '6', pages: '1618-1627', isYangFirst: false, isYangCorresponding: true },
  { id: 14, authors: 'Nan Lyu, Zeyu Du, Hua Qiu, Peng Gao, Qin Yao, Kaiqin Xiong, Qiufen Tu, Xiangyang Li, Binghai Chen, Guoqing Pan*, Nan Huang*, Zhilu Yang*', title: 'Mimicking the Nitric Oxide-Releasing and Glycocalyx Functions of Endothelium on Vascular Stent Surfaces', journal: 'Advanced Science', year: '2020', volume: '7', pages: '202002330', isYangFirst: false, isYangCorresponding: true },
  { id: 13, authors: 'Zhilu Yang#, Xin Zhao#, Rui Hao, Qiufen Tu, Xiaohua Tian, Yu Xiao, Kaiqin Xiong, Miao Wang, Yonghai Feng, Nan Huang*, Guoqing Pan*', title: 'Bio-clickable and Mussel Adhesive Peptide Mimics for Engineering Vascular Stent Surfaces', journal: 'PNAS', year: '2020', volume: '117', pages: '16127-16137', isYangFirst: true, isYangCorresponding: false },
  { id: 12, authors: 'Yu Xiao, Wenxuan Wang, Xiaohua Tian, Xing Tan, Tong Yang, Peng Gao, Kaiqing Xiong, Qiufen Tu, Miao Wang, Manfred F. Maitz, Nan Huang, Guoqing Pan*, Zhilu Yang*', title: 'A Versatile Surface Bioengineering Strategy Based on Mussel-Inspired and Bioclickable Peptide Mimic', journal: 'Research', year: '2020', volume: '7236946', isYangFirst: false, isYangCorresponding: true },
  { id: 11, authors: 'Ying Yang, Peng Gao, Juan Wang, Qiufen Tu, Long Bai, Kaiqin Xiong, Hua Qiu, Xin Zhao, Manfred F. Maitz, Huaiyu Wang, Xiangyang Li, Qiang Zhao, Yin Xiao, Nan Huang*, Zhilu Yang*', title: 'Endothelium-Mimicking Multifunctional Coating Modified Cardiovascular Stents via a Stepwise Metal-Catechol-(Amine) Surface Engineering Strategy', journal: 'Research', year: '2020', volume: '9203906', isYangFirst: false, isYangCorresponding: true },
  { id: 10, authors: 'Peng Gao, Hua Qiu, Kaiqin Xiong, Xiangyang Li, Qiufen Tu, Huaiyu Wang, Nan Lyu, Xiao Chen, Nan Huang*, Zhilu Yang*', title: 'Metal-Catechol-(Amine) Networks for Surface Synergistic Catalytic Modification: Therapeutic Gas Generation and Biomolecule Grafting', journal: 'Biomaterials', year: '2020', volume: '248', pages: '119981', isYangFirst: false, isYangCorresponding: true },
  { id: 9, authors: 'Xiangyang Li#, Jingxia Liu#, Tong Yang, Hua Qiu, Lei Lu, Qiufen Tu, Kaiqin Xiong, Nan Huang*, Zhilu Yang*', title: 'Mussel-inspired "built-up" surface chemistry for combining nitric oxide catalytic and vascular cell selective properties', journal: 'Biomaterials', year: '2020', volume: '241', pages: '119904', isYangFirst: false, isYangCorresponding: true },
  { id: 8, authors: 'Tong Yang, Zeyu Du, Hua Qiu, Peng Gao, Xin Zhao, Huaiyu Wang, Qiufen Tu, Kaiqin Xiong, Nan Huang, Zhilu Yang*', title: 'From surface to bulk modification: Plasma polymerization of amine-bearing coating by synergic strategy of biomolecule grafting and nitric oxide loading', journal: 'Bioactive Materials', year: '2020', volume: '5', pages: '17-25', isYangFirst: false, isYangCorresponding: true },
  { id: 7, authors: 'Hua Qiu#, Pengkai Qi#, Xing Tan, Yu Xiao, Jingxia Liu, Lei Lu, Peng Gao, Ying Yang, Nan Huang*, Zhilu Yang*', title: 'Biomimetic Engineering Endothelium-like Coating on Cardiovascular Stent through Heparin and Nitric Oxide-Generating Compound Synergic Modification Strategy', journal: 'Biomaterials', year: '2019', volume: '207', pages: '10-22', isYangFirst: false, isYangCorresponding: true },
  { id: 6, authors: 'Feng Zhang#, Qiang Zhang#, Xiangyang Li, Nan Huang, Xin Zhao*, Zhilu Yang*', title: 'Mussel-inspired dopamine-CuII coatings for sustained in situ generation of nitric oxide for prevention of stent thrombosis and restenosis', journal: 'Biomaterials', year: '2019', volume: '194', pages: '117-129', isYangFirst: false, isYangCorresponding: true },
  { id: 5, authors: 'Zhilu Yang*, Ying Yang, Li Zhang, Kaiqin Xiong, Xiangyang Li, Feng Zhang, Jin Wang, Xin Zhao*, Nan Huang*', title: 'Mussel-inspired Catalytic Selenocystamine-Dopamine Coatings for Long-Term Generation of Therapeutic Gas on Cardiovascular Stents', journal: 'Biomaterials', year: '2018', volume: '178', pages: '1-10', isYangFirst: true, isYangCorresponding: true },
  { id: 4, authors: 'Zhilu Yang*, Ying Yang, Kaiqin Xiong, Xiangyang Li, Pengkai Qi, Qiufen Tu, Fengjuan Jing, Yajun Weng, Jin Wang*, Nan Huang*', title: 'Nitric oxide producing coating mimicking endothelium function for multifunctional vascular stents', journal: 'Biomaterials', year: '2015', volume: '63', pages: '80-92', isYangFirst: true, isYangCorresponding: true },
  { id: 3, authors: 'Zhilu Yang, Qiufen Tu*, Manfred F. Maitz, Shou Zhou, Jin Wang, Nan Huang*', title: 'Direct thrombin inhibitor-bivalirudin functionalized plasma polymerized allylamine coating for improved biocompatibility of vascular devices', journal: 'Biomaterials', year: '2012', volume: '33', pages: '7959-7971', isYangFirst: false, isYangCorresponding: false },
  { id: 2, authors: 'Zhilu Yang*, Qiufen Tu, Jin Wang*, Nan Huang*', title: 'The role of heparin binding surface in the direction of endothelial and smooth muscle cell fate and re-endothelialization', journal: 'Biomaterials', year: '2012', volume: '33', pages: '6615-6625', isYangFirst: true, isYangCorresponding: true },
  { id: 1, authors: 'Zhilu Yang, Jin Wang*, Rifang Luo, Manfred F. Maitz, Fengjuan Jing, Hong Sun, Nan Huang', title: 'The covalent immobilization of heparin to pulsed-plasma polymeric allylamine films on 316L stainless steel and the resulting effects on hemocompatibility', journal: 'Biomaterials', year: '2010', volume: '31', pages: '2072-2083', isYangFirst: true, isYangCorresponding: false }
]

// 团队项目
const projects: Project[] = [
  { id: 35, name: '具有程序响应性免疫调控和VEGF原位捕获功能的支架促进病变血管再生修复研究', projectNumber: '32601810', funding: '30万', host: '牟小辉', status: '在研', category: '国家自然科学基金-青年研究项目（C类）' },
  { id: 34, name: '双活性金属离子-植物多酚自组装涂层功能化支架调控病变血管再生修复研究', projectNumber: '2026M793181', funding: '8万', host: '马青', status: '在研', category: '中国博士后基金--面上项目' },
  { id: 33, name: '国家资助博士后研究人员计划C档', projectNumber: 'GZC20261586', funding: '24万', host: '马青', status: '在研', category: '国家资助博士后研究人员计划C档' },
  { id: 32, name: '非对称修饰血管支架时空调控中性粒细胞促进病变血管再生修复研究', projectNumber: '32501163', funding: '30万', host: '张文泰', status: '在研', category: '国家自然科学基金-青年基金项目（C类）' },
  { id: 31, name: '国家资助博士后研究人员计划B档', projectNumber: 'GZB20250668', funding: '36万', host: '牟小辉', status: '在研', category: '国家资助博士后研究人员计划B档' },
  { id: 30, name: '生物功能仿生杂化酶涂层用于构建抗凝抗菌双功能中心静脉导管研究', projectNumber: '2024A1515110075', funding: '10万', host: '牟小辉', status: '在研', category: '广东省基础与应用基础研究基金--区域联合基金项目' },
  { id: 29, name: '具有主被动协同抗凝抗菌功能的人工金属-蛋白粘附层应用于中心静脉导管研究', projectNumber: '2024M761311', funding: '8万', host: '牟小辉', status: '在研', category: '中国博士后基金--面上项目' },
  { id: 28, name: '口服策略给氢协同一氧化氮催化支架调控病变血管再生修复研究', projectNumber: '32471376', funding: '50万（配套经费50万）', host: '杨志禄', status: '在研', category: '国家自然科学基金-面上项目' },
  { id: 27, name: '结构仿生白膜-海绵体一体化修复支架用于阴茎勃起组织大段缺损修复研究', projectNumber: '32401141', funding: '30万', host: '柴牧原', status: '在研', category: '国家自然科学基金-青年科学基金项目' },
  { id: 26, name: '医用器械表面生物抗污', projectNumber: 'G202404', funding: '100万', host: '张文泰', status: '在研', category: '南方医科大学第十附属医院高层次人才支持与发展计划' },
  { id: 25, name: '精准生物适配白膜-海绵体一体化修复支架用于阴茎勃起组织大段缺损修复研究', projectNumber: '2024M751311', funding: '8万', host: '柴牧原', status: '在研', category: '中国博士后基金--面上项目' },
  { id: 24, name: '国家资助博士后研究人员计划C档', projectNumber: 'GZC20240667', funding: '24万', host: '窦正龙', status: '在研', category: '国家资助博士后研究人员计划C档' },
  { id: 23, name: '东莞市医学领军人才引进培养项目', projectNumber: '', funding: '50万', host: '杨志禄', status: '在研', category: '东莞市医学领军人才引进培养项目' },
  { id: 22, name: '基于H2O2响应释放CO和原位催化释放NO构建具有调控病变血管原位再生修复功能的血管支架研究', projectNumber: '32371377', funding: '50万（配套经费50万）', host: '黄楠', status: '在研', category: '国家自然科学基金--面上项目' },
  { id: 21, name: '磁响应"菠萝状"微纳米马达的构建及其多功能协同抗肿瘤应用研究', projectNumber: '2023M741593', funding: '8万', host: '刘小嘉', status: '在研', category: '中国博士后基金--面上项目' },
  { id: 20, name: '具有原位调控病变血管再生修复功能的磁控微纳米机器人研究', projectNumber: '32301118', funding: '30万', host: '刘小嘉', status: '在研', category: '国家自然科学基金--青年科学基金项目' },
  { id: 19, name: '国家资助博士后研究人员计划C档', projectNumber: 'GZC20231080', funding: '24万', host: '柴牧原', status: '在研', category: '国家资助博士后研究人员计划C档' },
  { id: 18, name: '动态仿生组织工程支架用于勃起功能障碍治疗研究', projectNumber: '2023A1515110794', funding: '10万', host: '柴牧原', status: '在研', category: '广东省基础与应用基础研究基金--区域联合基金项目' },
  { id: 17, name: '具有原位调控病变血管再生修复功能的心血管支架研究', projectNumber: '20231800906311', funding: '100万', host: '杨志禄', status: '在研', category: '东莞市社会发展科技项目（高水平医院建设专项）' },
  { id: 16, name: '具有时序调控病变血管再生修复功能的Janus血管支架研究', projectNumber: '32261160372', funding: '100万（配套经费100万）', host: '杨志禄', status: '在研', category: '国家自然科学基金--国际（地区）合作与交流项目' },
  { id: 15, name: '具有原位调控病变血管再生修复功能的心血管支架研究', projectNumber: '2022B1515130010', funding: '200万（配套经费200万）', host: '杨志禄', status: '在研', category: '广东省基础与应用基础研究基金--区域联合基金项目(粤港澳研究团队项目)' },
  { id: 14, name: '有机-无机"原位转化时序性功能涂层改性可降解镁合金血管支架研究', projectNumber: '2022M721524', funding: '8万', host: '张文泰', status: '结题', category: '中国博士后基金--面上项目' },
  { id: 13, name: '基于仿生可灌注血管芯片研究巨噬细胞在动脉粥样硬化中的免疫调节机制', projectNumber: '2023A1515140122', funding: '30万', host: '王颖', status: '在研', category: '广东省区域联合基金-地区培育项' },
  { id: 12, name: '基于微流控仿生病理血管芯片探索锌离子对动脉粥样硬化病变血管的作用机制研究', projectNumber: '32201110', funding: '30万（配套经费30万）', host: '王颖', status: '在研', category: '国家自然科学基金--青年科学基金项目' },
  { id: 11, name: '基于透明质酸和锶离子协同功能修饰的血管支架用于调控病变血管再生修复研究', projectNumber: '82202325', funding: '30万', host: '吕楠', status: '在研', category: '国家自然科学基金--青年科学基金项目' },
  { id: 10, name: '具有原位催化内源性一氧化氮释放功能的血管支架设计', projectNumber: '20221800902451', funding: '20万', host: '王颖', status: '结题', category: '东莞市社会发展科技项目重点项目' },
  { id: 9, name: '一氧化氮催化和表面肝素化协同修饰构建内皮功能仿生支架研究', projectNumber: '2021A1515111035', funding: '10万（配套经费10万）', host: '张文泰', status: '结题', category: '广东省基础与应用基础研究基金--区域联合基金项目' },
  { id: 8, name: '基于微流控血管芯片技术构建动脉粥样硬化病理模型用于药物筛选的研究', projectNumber: '2022A1515011442', funding: '10万（配套经费10万）', host: '王颖', status: '结题', category: '广东省基础与应用基础研究基金--面上项目' },
  { id: 7, name: '基于微流控血管芯片技术构建动脉粥样硬化病理模型用于药物筛选的研究', projectNumber: 'K202103', funding: '120万', host: '王颖', status: '结题', category: '南方医科大学附属东莞医院高层次人才支持与发展计划' },
  { id: 6, name: '具有调控病变血管再生修复功能的血管支架研究', projectNumber: 'K202102', funding: '300万', host: '杨志禄', status: '结题', category: '南方医科大学附属东莞医院高层次人才支持与发展计划' },
  { id: 5, name: '具有一氧化氮催化和免疫抑制剂可控释放的聚肟氨酯涂层改性镁合金血管支架研究', projectNumber: '82072072', funding: '56万', host: '杨志禄', status: '结题', category: '国家自然科学基金--面上项目' },
  { id: 4, name: '具有仿生内皮功能和细胞外基质结构的水凝胶支架涂层构建及抗再狭窄和抗血栓研究', projectNumber: '2021YFH0056', funding: '30万', host: '杨志禄', status: '结题', category: '四川省国际科技创新合作项目' },
  { id: 3, name: '基于原位一氧化氮催化释放的内皮功能仿生涂层血管支架研究', projectNumber: '2016JQ0027', funding: '50万', host: '杨志禄', status: '结题', category: '四川省杰出青年基金' },
  { id: 2, name: '原位催化持续，稳定、可控释放一氧化氮的内皮功能仿生涂层研究', projectNumber: '31570957', funding: '61万', host: '杨志禄', status: '结题', category: '国家自然科学基金--面上项目' },
  { id: 1, name: '具有原位催化一氧化氮释放的内皮功能仿生涂层用于心血管支架表面改性研究', projectNumber: '81501596', funding: '18万', host: '杨志禄', status: '结题', category: '国家自然科学基金--青年科学基金项目' }
]

const teamIntro = `心血管疾病发病率和致死率长期以来高居各类疾病之首，全球每年因心血管疾病导致死亡的人数超过1700万。世界卫生组织预测，到2030年，全世界将有约2300万人死于心血管疾病。根据《中国心血管健康与疾病报告2019概要》指出我国心血管病患病率及死亡率仍处于上升阶段，推算心血管病现患人数约3.30亿，占总死亡病因的44.7%。而原发性动脉粥样硬化（Atherosclerosis, AS）引发的血管狭窄则是导致心血管疾病发生的重要因素。血管支架介入术作为心血管疾病治疗的重要手段之一，临床应用已近40年，目前全球每年约有400万患者接受血管支架介入治疗，每年消耗约500万只支架。尽管支架介入术挽救了众多危重心血管疾病患者的生命，然而临床上依然伴随着再狭窄、晚期血栓及晚期再发动脉粥样硬化等系列并发症发生的风险，制约着临床治疗效果。究其原因，是目前临床应用的血管支架均不具备调控病变血管组织再生修复功能，难以实现病灶治愈。为了解决该问题，研究团队围绕"血管支架调控病变血管组织再生修复"关键科学问题，以病变血管病理学和再生医学基本原理为指导，综合利用材料及化学科学，表面化学新技术、新方法，通过医工交叉融合，基于模仿天然内膜组织再生修复的设计理念，在聚焦构建具有特异选择性调控炎症、内膜组织增生和诱导病变血管组织再生修复功能的血管支架方面开展系统性、原创性的研究工作。近年来，针对AS诱发的心血管疾病，团队着眼于发展病理模型类血管/心脏及其芯片，用于指导包括智能载药纳米机器人、纳米靶向药物，工程化干细胞及血管补片等前沿交叉研究工作的开展，为心血管疾病的预防、治疗及康复提供创新解决方案。`

// 点击切换照片组件
function HoverImage({ images, alt, className }: { images: string[], alt: string, className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={images[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* 左右切换按钮 - 仅悬停时显示 */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-60 hover:opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            aria-label="上一张"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#1D1D1F]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-60 hover:opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            aria-label="下一张"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#1D1D1F]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* 底部指示点 */}
      {images.length > 1 && (
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(idx)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`查看第${idx + 1}张`}
            />
          ))}
        </div>
      )}

      {/* 照片计数器 */}
      {images.length > 1 && (
        <div className={`absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-xs transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

// 项目列表项组件 - 悬停显示详情卡片
function ProjectListItem({ project, index }: { project: Project, index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 项目名称 - 仅显示名称 */}
      <div className={`
        py-3 px-4 cursor-pointer transition-all duration-200 rounded-lg
        ${isHovered ? 'bg-[#F5F5F7]' : 'hover:bg-[#F5F5F7]/50'}
      `}>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#86868B] w-6">{project.id}.</span>
          <span className="text-sm text-[#1D1D1F] font-medium">{project.name}</span>
        </div>
      </div>

      {/* 悬停显示的详情卡片 */}
      {isHovered && (
        <div className="absolute left-0 top-full mt-2 z-50 w-80 bg-white rounded-xl shadow-2xl border border-[#F5F5F7] p-5 animate-fadeIn">
          {/* 项目类别 */}
          <div className="text-xs text-[#86868B] mb-2">{project.category}</div>

          {/* 项目名称 */}
          <h4 className="font-bold text-[#1D1D1F] text-sm mb-3 leading-relaxed">{project.name}</h4>

          {/* 主持人 - 蓝色加粗 */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-[#86868B]">主持:</span>
            <span className="text-sm font-bold text-[#0066CC]">{project.host}</span>
          </div>

          {/* 经费 - 加粗 */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-[#86868B]">经费:</span>
            <span className="text-sm font-bold text-[#1D1D1F]">{project.funding}</span>
          </div>

          {/* 项目编号 - 红棕色 */}
          {project.projectNumber && (
            <div className="text-xs text-[#9A3412] mb-2">
              项目号：{project.projectNumber}
            </div>
          )}

          {/* 状态标签 */}
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs ${
              project.status === '在研'
                ? 'bg-[#E30022]/10 text-[#E30022]'
                : 'bg-[#86868B]/10 text-[#86868B]'
            }`}>
              {project.status}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  )
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* 导航栏 */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="./images/logo.png" alt="CVBG" className="h-14 w-auto" />
            <div className="flex flex-col">
              <span className="font-semibold text-xl tracking-tight text-[#1D1D1F]">
                心血管生物材料研究团队
              </span>
              <span className="text-xs text-[#86868B]">CVBG · Cardiovascular Bioengineering Group</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['团队介绍', '研究团队', '团队成员', '研究方向', '研究成果', '研究项目', '团队风采', '加入我们'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="md:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <div className="w-full h-0.5 bg-[#1D1D1F]"></div>
              <div className="w-full h-0.5 bg-[#1D1D1F]"></div>
              <div className="w-full h-0.5 bg-[#1D1D1F]"></div>
            </div>
          </button>
        </div>
      </motion.header>

      {/* 首屏 - 团队负责人 */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] via-white to-[#FEF2F2]"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E30022]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF6B6B]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#E30022]/10 text-[#E30022] text-sm font-medium rounded-full">
                  团队负责人
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight mb-4">
                {teamLeader.name}
              </h1>
              <p className="text-xl text-[#86868B] mb-6">{teamLeader.title}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {teamLeader.honors.map((honor, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      index === 0
                        ? 'bg-[#E30022]/10 text-[#E30022]'
                        : 'bg-white border border-[#E5E5E5] text-[#86868B]'
                    }`}
                  >
                    {honor}
                  </span>
                ))}
              </div>

              <p className="text-lg text-[#86868B] leading-relaxed mb-8 max-w-xl">
                {teamLeader.bio}
              </p>

              <div className="flex flex-col gap-3 mb-10">
                <div className="flex items-center gap-3 text-[#86868B]">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">{teamLeader.email}</span>
                </div>
                <div className="flex items-center gap-3 text-[#86868B]">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">{teamLeader.phone}</span>
                </div>
              </div>

              <a
                href="#研究团队"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#E30022] text-white rounded-full font-medium hover:bg-[#D8001D] transition-all duration-300 hover:scale-105"
              >
                了解团队 <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E30022]/20 to-[#FF6B6B]/20 rounded-3xl transform rotate-3"></div>
                <HoverImage
                  images={teamLeader.images}
                  alt={teamLeader.name}
                  className="relative aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center gap-2 text-[#86868B]">
            <span className="text-sm">向下滚动</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 团队简介 */}
      <section id="团队介绍" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
                  南方医科大学第十附属医院
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-[#E30022] mb-2 tracking-tight">
                  心血管生物材料研究团队（CVBG）
                </h3>
                <p className="text-lg text-[#86868B] mb-6">Cardiovascular Bioengineering Group</p>
              </div>

              <div className="max-w-4xl mx-auto text-left space-y-6">
                <p className="text-lg text-[#86868B] leading-relaxed">
                  <span className="font-semibold text-[#1D1D1F]">心血管疾病</span>发病率和致死率长期以来高居各类疾病之首，全球每年因心血管疾病导致死亡的人数超过<span className="font-semibold text-[#1D1D1F]">1700万</span>。世界卫生组织预测，到2030年，全世界将有约2300万人死于心血管疾病。根据《中国心血管健康与疾病报告2019概要》指出我国心血管病患病率及死亡率仍处于上升阶段，推算心血管病现患人数约<span className="font-semibold text-[#1D1D1F]">3.30亿</span>，占总死亡病因的<span className="font-semibold text-[#1D1D1F]">44.7%</span>。而原发性动脉粥样硬化（Atherosclerosis, AS）引发的血管狭窄则是导致心血管疾病发生的重要因素。
                </p>
                <p className="text-lg text-[#86868B] leading-relaxed">
                  <span className="font-semibold text-[#1D1D1F]">血管支架介入术</span>作为心血管疾病治疗的重要手段之一，临床应用已近40年，目前全球每年约有400万患者接受血管支架介入治疗，每年消耗约500万只支架。尽管支架介入术挽救了众多危重心血管疾病患者的生命，然而临床上依然伴随着再狭窄、晚期血栓及晚期再发动脉粥样硬化等系列并发症发生的风险，制约着临床治疗效果。究其原因，是目前临床应用的血管支架均不具备调控病变血管组织再生修复功能，难以实现病灶治愈。
                </p>
                <p className="text-lg text-[#86868B] leading-relaxed">
                  为了解决该问题，研究团队围绕"<span className="font-semibold text-[#E30022]">血管支架调控病变血管组织再生修复</span>"关键科学问题，以病变血管病理学和再生医学基本原理为指导，综合利用材料及化学科学，表面化学新技术、新方法，通过医工交叉融合，基于模仿天然内膜组织再生修复的设计理念，在聚焦构建具有特异选择性调控炎症、内膜组织增生和诱导病变血管组织再生修复功能的血管支架方面开展系统性、原创性的研究工作。近年来，针对AS诱发的心血管疾病，团队着眼于发展病理模型类血管/心脏及其芯片，用于指导包括智能载药纳米机器人、纳米靶向药物，工程化干细胞及血管补片等前沿交叉研究工作的开展，为心血管疾病的预防、治疗及康复提供创新解决方案。
                </p>
              </div>
            </div>

            {/* 团队数据亮点 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-gradient-to-br from-[#FEF2F2] to-white rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-[#E30022] mb-2">80+</div>
                <div className="text-sm text-[#86868B]">SCI论文</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#FEF2F2] to-white rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-[#E30022] mb-2">34+</div>
                <div className="text-sm text-[#86868B]">授权专利</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#FEF2F2] to-white rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#E30022] mb-2">1500万</div>
                <div className="text-sm text-[#86868B]">技术转让</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#FEF2F2] to-white rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-[#E30022] mb-2">30+</div>
                <div className="text-sm text-[#86868B]">培养人才</div>
              </motion.div>
            </div>

            {/* 研究方向标签 */}
            <div className="mt-16">
              <h4 className="text-lg font-semibold text-[#1D1D1F] mb-6 text-center">核心研究领域</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['血管支架', '器官芯片', '智能纳米药物', '类器官', '心肌再生', '可降解金属'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-[#F5F5F7] text-[#86868B] rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 研究方向 */}
      <section id="研究方向" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              研究方向
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              聚焦心血管疾病诊疗的前沿交叉研究
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#E30022] to-[#FF6B6B] rounded-2xl flex items-center justify-center mb-6">
                  {area.icon === 'FlaskConical' && <FlaskConical className="w-7 h-7 text-white" />}
                  {area.icon === 'Users' && <Users className="w-7 h-7 text-white" />}
                  {area.icon === 'BookOpen' && <BookOpen className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{area.title}</h3>
                <p className="text-[#86868B] leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 负责人研究方向列表 */}
          <motion.div
            className="mt-16 bg-white rounded-3xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-6">负责人研究方向</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamLeader.directions.map((direction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#E30022] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#86868B] text-sm">{direction}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 研究团队 - 核心成员 */}
      <section id="研究团队" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              核心团队成员
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              汇聚多学科交叉人才，共同推进心血管生物材料研究
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {coreMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-[#F5F5F7] p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* 照片 - 独立在左侧 */}
                    <div className="flex-shrink-0 mx-auto w-56 sm:w-64 lg:mx-0 lg:w-40 xl:w-44">
                      <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                        <HoverImage
                          images={member.images}
                          alt={member.name}
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    {/* 文字介绍 - 右侧，内容从顶部排列 */}
                    <div className="flex-1 flex flex-col justify-start">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-4 py-1.5 bg-[#E30022]/10 text-[#E30022] text-xs font-medium rounded-full">
                          {member.role}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#1D1D1F] mb-2">{member.name}</h3>
                      <p className="text-base text-[#E30022] mb-4">{member.title}</p>
                      <p className="text-sm text-[#86868B] leading-relaxed mb-4">{member.bio}</p>

                      {/* 研究方向 */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2 text-xs text-[#1D1D1F] font-medium mb-1">
                          <BookOpen className="w-4 h-4 text-[#E30022]" />
                          <span>研究方向</span>
                        </div>
                        <p className="text-sm text-[#86868B]">{member.direction}</p>
                      </div>

                      {/* 荣誉 */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2 text-xs text-[#1D1D1F] font-medium mb-1">
                          <Award className="w-4 h-4 text-[#E30022]" />
                          <span>获得荣誉</span>
                        </div>
                        <p className="text-sm text-[#86868B]">{member.honors}</p>
                      </div>

                      {/* 科研业绩 */}
                      {member.researchAchievements && (
                        <div className="mb-3">
                          <div className="flex items-center gap-2 text-xs text-[#1D1D1F] font-medium mb-1">
                            <FlaskConical className="w-4 h-4 text-[#E30022]" />
                            <span>科研业绩</span>
                          </div>
                          <p className="text-sm text-[#86868B] leading-relaxed">{member.researchAchievements}</p>
                        </div>
                      )}

                      {/* 学术兼职 */}
                      {member.academicPositions && (
                        <div className="mb-3">
                          <div className="flex items-center gap-2 text-xs text-[#1D1D1F] font-medium mb-1">
                            <GraduationCap className="w-4 h-4 text-[#E30022]" />
                            <span>学术兼职</span>
                          </div>
                          <p className="text-sm text-[#86868B] leading-relaxed">{member.academicPositions}</p>
                        </div>
                      )}

                      {/* 联系方式 */}
                      <div className="flex items-center gap-2 text-sm text-[#86868B]">
                        <Mail className="w-4 h-4" />
                        <span>{member.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队成员 - 博士后、博士、硕士 */}
      <section id="团队成员" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              团队成员
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              优秀的科研人才梯队
            </p>
          </motion.div>

          {/* 在站博士后 - 优雅横向布局 */}
          {postdocsCurrent.length > 0 && (
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-10 flex items-center gap-3">
                <Users className="w-6 h-6 text-[#E30022]" />
                在站博士后
              </h3>
              <div className="space-y-8 max-w-5xl mx-auto">
                {postdocsCurrent.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-[#F5F5F7] hover:border-[#E30022]/10">
                      <div className="flex flex-col md:flex-row gap-8">
                        {/* 照片 - 圆形设计 */}
                        {member.image && (
                          <div className="flex-shrink-0 mx-auto md:mx-0">
                            <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#F5F5F7] group-hover:ring-[#E30022]/20 transition-all duration-500">
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                          </div>
                        )}

                        {/* 文字信息 */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                            <h4 className="font-bold text-2xl text-[#1D1D1F]">{member.name}</h4>
                            <span className="text-sm text-[#86868B]">{member.degree}</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {member.education && (
                              <div className="flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-[#E30022]" />
                                <span className="text-sm text-[#86868B]">{member.education}</span>
                              </div>
                            )}
                            {member.email && (
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#E30022]" />
                                <span className="text-sm text-[#E30022]">{member.email}</span>
                              </div>
                            )}
                          </div>

                          {/* 研究方向 */}
                          {member.researchDirection && (
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <BookOpen className="w-4 h-4 text-[#E30022]" />
                                <span className="text-sm font-semibold text-[#1D1D1F]">研究方向</span>
                              </div>
                              <p className="text-sm text-[#86868B] leading-relaxed">{member.researchDirection}</p>
                            </div>
                          )}

                          {/* 科研成果 */}
                          {member.researchAchievements && (
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <FlaskConical className="w-4 h-4 text-[#E30022]" />
                                <span className="text-sm font-semibold text-[#1D1D1F]">科研成果</span>
                              </div>
                              <p className="text-sm text-[#86868B] leading-relaxed">{member.researchAchievements}</p>
                            </div>
                          )}

                          {/* 学术兼职 */}
                          {member.academicPositions && (
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <GraduationCap className="w-4 h-4 text-[#E30022]" />
                                <span className="text-sm font-semibold text-[#1D1D1F]">学术兼职</span>
                              </div>
                              <p className="text-sm text-[#86868B] leading-relaxed">{member.academicPositions}</p>
                            </div>
                          )}

                          {/* 主持项目 */}
                          {member.fundedProjects && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Award className="w-4 h-4 text-[#E30022]" />
                                <span className="text-sm font-semibold text-[#1D1D1F]">主持项目</span>
                              </div>
                              <p className="text-sm text-[#86868B] leading-relaxed">{member.fundedProjects}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 已出站博士后 - 优雅横向布局 */}
          {postdocsAlumni.length > 0 && (
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-10 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#86868B]" />
                已出站博士后
              </h3>
              <div className="space-y-6 max-w-5xl mx-auto">
                {postdocsAlumni.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-3xl p-6 hover:shadow-xl transition-all duration-500 border border-[#F5F5F7] hover:border-[#86868B]/10">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* 照片 - 圆形设计 */}
                        {member.image && (
                          <div className="flex-shrink-0 mx-auto md:mx-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#F5F5F7] group-hover:ring-[#86868B]/20 transition-all duration-500">
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                          </div>
                        )}

                        {/* 文字信息 */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                            <h4 className="font-bold text-xl text-[#1D1D1F]">{member.name}</h4>
                            <span className="text-sm text-[#86868B]">{member.degree}</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            {member.education && (
                              <div className="flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-[#86868B]" />
                                <span className="text-sm text-[#86868B]">{member.education}</span>
                              </div>
                            )}
                            {member.email && (
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#86868B]" />
                                <span className="text-sm text-[#86868B]">{member.email}</span>
                              </div>
                            )}
                          </div>

                          {/* 研究方向 */}
                          {member.researchDirection && (
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <BookOpen className="w-4 h-4 text-[#86868B]" />
                                <span className="text-xs font-semibold text-[#1D1D1F]">研究方向</span>
                              </div>
                              <p className="text-sm text-[#86868B] leading-relaxed">{member.researchDirection}</p>
                            </div>
                          )}

                          {/* 科研成果 */}
                          {member.researchAchievements && (
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <FlaskConical className="w-4 h-4 text-[#86868B]" />
                                <span className="text-xs font-semibold text-[#1D1D1F]">科研成果</span>
                              </div>
                              <p className="text-sm text-[#86868B] leading-relaxed">{member.researchAchievements}</p>
                            </div>
                          )}

                          {/* 学术兼职 */}
                          {member.academicPositions && (
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <GraduationCap className="w-4 h-4 text-[#86868B]" />
                                <span className="text-xs font-semibold text-[#1D1D1F]">学术兼职</span>
                              </div>
                              <p className="text-sm text-[#86868B] leading-relaxed">{member.academicPositions}</p>
                            </div>
                          )}

                          {/* 主持项目 */}
                          {member.fundedProjects && (
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <Award className="w-4 h-4 text-[#86868B]" />
                                <span className="text-xs font-semibold text-[#1D1D1F]">主持项目</span>
                              </div>
                              <p className="text-sm text-[#86868B] leading-relaxed">{member.fundedProjects}</p>
                            </div>
                          )}

                          {/* 就业去向 */}
                          {member.employment && (
                            <div className="pt-3 border-t border-[#F5F5F7]">
                              <div className="flex items-center gap-2 mb-1">
                                <Users2 className="w-4 h-4 text-[#E30022]" />
                                <span className="text-sm font-semibold text-[#E30022]">就业去向</span>
                              </div>
                              <p className="text-sm text-[#86868B]">{member.employment}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 博士研究生 - 悬浮卡片布局 */}
          {phdStudents.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-8 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#E30022]" />
                博士研究生
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {phdStudents.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className={`
                      relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl
                      transition-all duration-300 border border-transparent hover:border-[#E30022]/20
                      ${member.image ? 'w-36' : 'w-auto min-w-[140px]'}
                    `}>
                      {/* 照片 - 仅在有照片时显示 */}
                      {member.image && (
                        <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      )}

                      {/* 名字 - 始终显示 */}
                      <div className="text-center">
                        <div className="font-semibold text-[#1D1D1F]">{member.name}</div>
                        <div className="text-xs text-[#86868B] mt-1">{member.degree}</div>
                        {member.mentor && (
                          <div className="text-xs text-[#E30022] mt-1">导师：{member.mentor}</div>
                        )}
                      </div>

                      {/* 悬浮时显示更多信息 */}
                      <div className="absolute inset-0 bg-white/95 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                        <div className="text-center">
                          <div className="font-semibold text-[#1D1D1F]">{member.name}</div>
                          <div className="text-xs text-[#86868B] mt-1">{member.degree}</div>
                          {member.mentor && (
                            <div className="text-xs text-[#E30022] mt-1">导师：{member.mentor}</div>
                          )}
                          {member.email && (
                            <div className="text-xs text-[#86868B] mt-1 truncate max-w-full">{member.email}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 硕士研究生 - 对称网格布局 */}
          {mastersStudents.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-10 flex items-center gap-3">
                <Award className="w-6 h-6 text-[#E30022]" />
                硕士研究生
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {mastersStudents.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F5F5F7] hover:border-[#E30022]/20 text-center">
                      {/* 照片 - 仅在有照片时显示 */}
                      {member.image && (
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-[#F5F5F7] group-hover:ring-[#E30022]/30 transition-all duration-300">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      )}

                      {/* 名字 */}
                      <div className="font-semibold text-[#1D1D1F] text-sm">{member.name}</div>
                      <div className="text-xs text-[#86868B] mt-1">{member.degree}</div>
                      {member.mentor && (
                        <div className="text-xs text-[#E30022] mt-1">导师：{member.mentor}</div>
                      )}

                      {/* 悬浮时显示更多信息 */}
                      {member.email && (
                        <div className="mt-2 pt-2 border-t border-[#F5F5F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-xs text-[#86868B] truncate">{member.email}</div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 已毕业研究生 - 云图/标签式展示 */}
          {(alumniPhd.length > 0 || alumniMasters.length > 0) && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-10 flex items-center justify-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#86868B]" />
                已毕业研究生
              </h3>

              {/* 毕业博士研究生 - 云图展示 */}
              {alumniPhd.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#1D1D1F] mb-6 text-center">博士毕业生</h4>
                  <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {alumniPhd.map((member, index) => (
                      <motion.div
                        key={member.id}
                        className="group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <div className="relative px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-lg transition-all duration-300 border border-[#F5F5F7] hover:border-[#E30022]/30 cursor-default">
                          {/* 照片在左侧 */}
                          {member.image && (
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                              </div>
                            </div>
                          )}
                          <div className={member.image ? 'pl-6' : ''}>
                            <div className="font-semibold text-[#1D1D1F]">{member.name}</div>
                            {member.employment && (
                              <div className="text-xs text-[#E30022] mt-0.5">{member.employment}</div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* 毕业硕士研究生 - 云图展示 */}
              {alumniMasters.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-[#1D1D1F] mb-6 text-center">硕士毕业生</h4>
                  <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                    {alumniMasters.map((member, index) => (
                      <motion.div
                        key={member.id}
                        className="group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.03 }}
                      >
                        <div className="relative px-4 py-2.5 bg-[#F5F5F7] rounded-full hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#E5E5E5] cursor-default">
                          {/* 照片在左侧 */}
                          {member.image && (
                            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2">
                              <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#F5F5F7] group-hover:ring-white">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                              </div>
                            </div>
                          )}
                          <div className={member.image ? 'pl-5' : ''}>
                            <span className="text-sm text-[#86868B] group-hover:text-[#1D1D1F] transition-colors">{member.name}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* 如果没有数据，显示提示信息 */}
          {postdocsCurrent.length === 0 && postdocsAlumni.length === 0 &&
           phdStudents.length === 0 && mastersStudents.length === 0 && (
            <motion.div
              className="text-center py-16 bg-white rounded-3xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#86868B] text-lg">
                团队成员信息正在整理中，请联系团队负责人获取最新名单。
              </p>
              <p className="text-[#86868B] text-sm mt-2">
                联系人：{teamLeader.name} ({teamLeader.email})
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* 代表性论文 - Nature/Science期刊封面背景 - 瀑布流布局 */}
      <section id="研究成果" className="py-32 px-6 relative overflow-hidden">
        {/* 半透明期刊封面瀑布流背景 - 带错落悬浮动画 */}
        <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
          {/* 使用columns实现瀑布流效果 */}
          <div className="absolute inset-0 columns-2 md:columns-4 lg:columns-6 gap-3 p-4">
            {/* Nature 系列 */}
            <div className="break-inside-avoid mb-3 float-animation">
              <div className="w-24 h-32 bg-gradient-to-br from-red-800 via-red-700 to-red-900 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">NATURE</span>
              </div>
            </div>
            {/* Science */}
            <div className="break-inside-avoid mb-3 float-animation-delayed">
              <div className="w-24 h-28 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">SCIENCE</span>
              </div>
            </div>
            {/* Cell */}
            <div className="break-inside-avoid mb-3 float-animation-slow">
              <div className="w-20 h-26 bg-gradient-to-br from-red-900 via-red-800 to-red-950 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">CELL</span>
              </div>
            </div>
            {/* Advanced Materials */}
            <div className="break-inside-avoid mb-3 float-animation">
              <div className="w-22 h-30 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs text-center leading-tight">ADVANCED<br/>MATERIALS</span>
              </div>
            </div>
            {/* Bioactive Materials */}
            <div className="break-inside-avoid mb-3 float-animation-delayed">
              <div className="w-20 h-28 bg-gradient-to-br from-green-800 via-green-700 to-green-900 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">BIOACTIVE</span>
              </div>
            </div>
            {/* Angewandte */}
            <div className="break-inside-avoid mb-3 float-animation-slow">
              <div className="w-24 h-32 bg-gradient-to-br from-orange-700 via-orange-600 to-orange-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">ANGEWANDTE</span>
              </div>
            </div>
            {/* Research */}
            <div className="break-inside-avoid mb-3 float-animation">
              <div className="w-22 h-28 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">RESEARCH</span>
              </div>
            </div>
            {/* Biomaterials */}
            <div className="break-inside-avoid mb-3 float-animation-delayed">
              <div className="w-20 h-26 bg-gradient-to-br from-cyan-800 via-cyan-700 to-cyan-900 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">BIOMATERIALS</span>
              </div>
            </div>
            {/* PNAS */}
            <div className="break-inside-avoid mb-3 float-animation-slow">
              <div className="w-22 h-30 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">PNAS</span>
              </div>
            </div>
            {/* Nature Communications */}
            <div className="break-inside-avoid mb-3 float-animation">
              <div className="w-24 h-28 bg-gradient-to-br from-red-700 via-red-600 to-red-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs text-center">NATURE<br/>COMM</span>
              </div>
            </div>
            {/* ACS Nano */}
            <div className="break-inside-avoid mb-3 float-animation-delayed">
              <div className="w-20 h-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">ACS NANO</span>
              </div>
            </div>
            {/* Advanced Science */}
            <div className="break-inside-avoid mb-3 float-animation-slow">
              <div className="w-22 h-30 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs text-center">ADVANCED<br/>SCIENCE</span>
              </div>
            </div>
            {/* The Innovation */}
            <div className="break-inside-avoid mb-3 float-animation">
              <div className="w-18 h-24 bg-gradient-to-br from-green-700 via-green-600 to-green-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">INNOVATION</span>
              </div>
            </div>
            {/* Matter */}
            <div className="break-inside-avoid mb-3 float-animation-delayed">
              <div className="w-20 h-26 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">MATTER</span>
              </div>
            </div>
            {/* EBioMedicine */}
            <div className="break-inside-avoid mb-3 float-animation-slow">
              <div className="w-22 h-28 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">EBIOMEDICINE</span>
              </div>
            </div>
            {/* Exploration */}
            <div className="break-inside-avoid mb-3 float-animation">
              <div className="w-18 h-22 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">EXPLORATION</span>
              </div>
            </div>
            {/* Small */}
            <div className="break-inside-avoid mb-3 float-animation-delayed">
              <div className="w-20 h-26 bg-gradient-to-br from-pink-700 via-pink-600 to-pink-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">SMALL</span>
              </div>
            </div>
            {/* Nano Letters */}
            <div className="break-inside-avoid mb-3 float-animation-slow">
              <div className="w-18 h-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white/40 font-bold text-xs">NANO LETTERS</span>
              </div>
            </div>
          </div>
          {/* 渐变遮罩确保文字清晰 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7] via-transparent to-[#F5F5F7]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              代表性论文
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              团队在心血管生物材料领域的最新研究进展
            </p>
          </motion.div>

          {/* 可滚动 publications 列表 */}
          <div className="max-w-5xl mx-auto">
            <div className="max-h-[600px] overflow-y-auto pr-4 space-y-3 custom-scrollbar">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  className="group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E30022]/20">
                    <div className="flex flex-col md:flex-row gap-3">
                      {/* 序号 */}
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E30022]/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#E30022]">{pub.id}</span>
                      </div>

                      {/* 内容 */}
                      <div className="flex-1">
                        {/* 作者 - 杨志禄加粗下划线 */}
                        <div className="text-xs text-[#86868B] mb-1 leading-relaxed">
                          {pub.authors.split(',').map((author, i) => {
                            const trimmed = author.trim()
                            const isYang = trimmed.includes('Zhilu Yang')
                            return (
                              <span key={i}>
                                {isYang ? (
                                  <span className="font-bold underline decoration-[#E30022] decoration-2">{trimmed}</span>
                                ) : (
                                  <span>{trimmed}</span>
                                )}
                                {i < pub.authors.split(',').length - 1 ? ', ' : ''}
                              </span>
                            )
                          })}
                        </div>

                        {/* 标题 - 不做链接 */}
                        <div className="text-[#1D1D1F] text-sm font-medium mb-1">
                          {pub.title}
                        </div>

                        {/* 期刊 - 加粗 */}
                        <div className="text-xs">
                          <span className="font-bold text-[#1D1D1F]">{pub.journal}</span>
                          <span className="text-[#86868B]">. {pub.year}</span>
                          {pub.volume && <span className="text-[#86868B]">; {pub.volume}</span>}
                          {pub.pages && <span className="text-[#86868B]">: {pub.pages}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* 滚动提示 */}
            <div className="text-center mt-4 text-[#86868B] text-sm">
              <span className="inline-flex items-center gap-2">
                <span>向上滚动查看更多</span>
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 团队项目 - 列表悬停显示详情 */}
      <section id="研究项目" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              研究项目
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              团队主持的科研项目及人才计划
            </p>
          </motion.div>

          {/* 项目列表 */}
          <div className="max-w-4xl mx-auto space-y-1">
            {projects.map((project, index) => (
              <ProjectListItem key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 团队风采 - 照片墙 */}
      <section id="团队文化" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              团队风采
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              学术之外的生活同样精彩，这是我们共同的回忆
            </p>
          </motion.div>

          {/* 照片墙 - Masonry 布局 */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {/* 照片1 - 大尺寸 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="./images/IMG_20240718_173634.jpg"
                alt="团队建设活动"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* 照片2 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="./images/刘静毕业照.jpg"
                alt="刘静毕业照"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* 照片3 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="./images/付艳毕业照.jpg"
                alt="付艳毕业照"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* 照片4 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="./images/9c308ff39fc3b77ee9bf75896d328875.jpg"
                alt="团队活动"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* 照片5 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="./images/团建照片2.jpg"
                alt="团队建设"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* 照片6 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src="./images/团建照片1.jpg"
                alt="团队建设"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* 照片7 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img
                src="./images/团建照片.jpg"
                alt="团队建设"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* 照片8 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <img
                src="./images/团建照片 (2).jpg"
                alt="团队建设"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* 照片9 - 未完待续 */}
            <motion.div
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <img
                src="./images/团建照片3.jpg"
                alt="团队建设"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* 未完待续 */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/60 text-sm font-light">
                  未完待续 · To Be Continued
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 加入我们 - 博士后招聘 */}
      <section id="加入我们" className="py-32 px-6 bg-[#1D1D1F]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              加入我们
            </h2>
            <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
              南方医科大学第十附属医院杨志禄教授团队长期招聘博士后
            </p>
          </motion.div>

          {/* 招聘方向 */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#E30022]" />
              <h3 className="text-2xl font-bold text-white">招聘方向</h3>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white/80 text-lg leading-relaxed">
                心血管病理学、细胞分子生物学、材料化学，<span className="text-[#E30022] font-semibold">优先招录有器官芯片及类器官、人工智能研究背景的人员</span>。
              </p>
            </div>
          </motion.div>

          {/* 福利待遇 */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#E30022]" />
              <h3 className="text-2xl font-bold text-white">福利待遇</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-[#E30022] font-bold text-3xl mb-2">55万<span className="text-white/60 text-lg font-normal">/年</span></div>
                <div className="text-white/60 text-sm">税前基础年薪（含五险一金），可同时享受南方医科大学、医院及团队的科研绩效奖励</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-[#E30022] font-bold text-3xl mb-2">3万<span className="text-white/60 text-lg font-normal">/年</span></div>
                <div className="text-white/60 text-sm">住房补贴</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-[#E30022] font-bold text-3xl mb-2">20万</div>
                <div className="text-white/60 text-sm">入站即享科研启动经费，导师全程协助申请各级各类基金项目</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-[#E30022] font-bold text-3xl mb-2">团队博士后</div>
                <div className="text-white/60 text-sm">平均可获省部/国家级项目2项以上</div>
              </div>
            </div>
            <div className="mt-4 bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                <div className="flex items-start gap-2">
                  <span className="text-[#E30022]">•</span>
                  <span>可落户东莞，配偶及未成年子女可随迁</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E30022]">•</span>
                  <span>子女享受东莞本地常住户口居民同等教育待遇</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E30022]">•</span>
                  <span>出站后留莞工作可申请东莞市50万元出站资助</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E30022]">•</span>
                  <span>依托广东省高水平建设医院转化医学研究中心，拥有超1亿价值的科研仪器、4000㎡实验场地</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 入站条件 */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#E30022]" />
              <h3 className="text-2xl font-bold text-white">入站条件</h3>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#E30022]/20 text-[#E30022] rounded-full text-sm font-medium">年龄35岁以下</span>
                <span className="px-4 py-2 bg-[#E30022]/20 text-[#E30022] rounded-full text-sm font-medium">非在职人员</span>
                <span className="px-4 py-2 bg-[#E30022]/20 text-[#E30022] rounded-full text-sm font-medium">公开发表中科院小类分区SCI一区论文1篇及以上</span>
              </div>
            </div>
          </motion.div>

          {/* 出站要求 */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#E30022]" />
              <h3 className="text-2xl font-bold text-white">出站要求</h3>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white/80 mb-4">在站不超过3年，需同时满足：</p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#E30022] font-bold">01</span>
                  <span className="text-white/80">发表中科院小类分区SCI一区论文1篇及以上（团队博士后平均可发表IF＞10的一区论文不少于1篇）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E30022] font-bold">02</span>
                  <span className="text-white/80">获得国家自然科学基金青年项目、博士后基金面上/特别资助项目或省部级项目其中1项</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 出站就业 */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#E30022]" />
              <h3 className="text-2xl font-bold text-white">出站就业</h3>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white/80 mb-4">出站人员主要就职于高校及科研院所，可获副研究员、助理教授等岗位引进</p>
              <p className="text-white/60 text-sm">合作院校/单位包括：哈尔滨工业大学（深圳校区）、华南理工大学、南方医科大学第十附属医院等</p>
            </div>
          </motion.div>

          {/* 联系按钮 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${teamLeader.email}`}
                className="px-8 py-4 bg-[#E30022] text-white rounded-full font-medium hover:bg-[#D8001D] transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                发送邮件 <Mail className="w-5 h-5" />
              </a>
              <div className="px-8 py-4 bg-white/10 text-white rounded-full font-medium border border-white/20">
                年招 1-2 名
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-6 bg-[#1D1D1F] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="./images/logo.png" alt="CVBG" className="h-14 w-auto" />
              <div>
                <span className="text-white/80 font-semibold text-lg block">心血管生物材料研究团队</span>
                <span className="text-white/40 text-sm">CVBG · Cardiovascular Bioengineering Group</span>
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm text-[#86868B]">
              <span>南方医科大学第十附属医院</span>
            </div>
            <div className="text-sm text-[#86868B]">
              © 2024 CVBG. 保留所有权利。
            </div>
          </div>
          {/* 署名 - 保持低调 */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-white/20 text-xs">
              Website designed by 朱沐兰
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
