export interface BnssSchedule {
  number: number;
  roman: string;
  title: string;
  description: string;
  href: string;
}

export const bnssSchedules: BnssSchedule[] = [
  {
    number: 1,
    roman: "I",
    title: "First Schedule",
    description: "Classification of offences",
    href: "/bnss/schedule/1",
  },
  {
    number: 2,
    roman: "II",
    title: "Second Schedule",
    description: "Forms",
    href: "/bnss/schedule/2",
  },
];