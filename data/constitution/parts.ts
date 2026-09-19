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
  {
    roman: "V",
    title: "The Union",
    articles: "Articles 52–151",
    slug: "part-v",
  },
];