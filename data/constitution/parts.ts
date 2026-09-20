export type ConstitutionPart = {
  roman: string;
  title: string;
  articles: string;
  slug: string;
};

export const constitutionParts: ConstitutionPart[] = [
  {
    roman: "I",
    title: "The Union and its Territory",
    articles: "Articles 1–4",
    slug: "part-i",
  },
  {
    roman: "II",
    title: "Citizenship",
    articles: "Articles 5–11",
    slug: "part-ii",
  },
  {
    roman: "III",
    title: "Fundamental Rights",
    articles: "Articles 12–35",
    slug: "part-iii",
  },
  {
    roman: "IV",
    title: "Directive Principles of State Policy",
    articles: "Articles 36–51",
    slug: "part-iv",
  },
  {
    roman: "IVA",
    title: "Fundamental Duties",
    articles: "Article 51A",
    slug: "part-iva",
  },

];

export type ConstitutionSchedule = {
  roman: string;
  title: string;
  description: string;
  slug: string;
};

export const constitutionSchedules: ConstitutionSchedule[] = [
  {
    roman: "I",
    title: "First Schedule",
    description: "States and Union Territories",
    slug: "schedule-i",
  },
  {
    roman: "II",
    title: "Second Schedule",
    description: "Salaries and Allowances",
    slug: "schedule-ii",
  },
  {
    roman: "III",
    title: "Third Schedule",
    description: "Forms of Oaths and Affirmations",
    slug: "schedule-iii",
  },
  {
    roman: "IV",
    title: "Fourth Schedule",
    description: "Allocation of Seats in the Council of States",
    slug: "schedule-iv",
  },
  {
    roman: "V",
    title: "Fifth Schedule",
    description: "Administration and Control of Scheduled Areas and Scheduled Tribes",
    slug: "schedule-v",
  },
  
];