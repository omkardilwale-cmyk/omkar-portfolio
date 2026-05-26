/**
 * Career start — aligns with ~5.5 years total experience through May 2026
 * (B.Tech completion May 2020 → industry ramp-up → Hackx May 2021 onward)
 */
export const CAREER_START = new Date("2020-11-01");

export function getYearsOfExperience(asOf: Date = new Date()): string {
  const months =
    (asOf.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (asOf.getMonth() - CAREER_START.getMonth());

  const years = months / 12;
  const rounded = Math.round(years * 10) / 10;
  const display = Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);

  return `${display}+`;
}

export function getHeroStats(asOf: Date = new Date()) {
  return [
    { label: "Years of experience", value: getYearsOfExperience(asOf) },
    { label: "Projects delivered", value: "10+" },
    { label: "GenAI integrations", value: "5+" },
  ];
}
