export const phone = (phoneNumber?: string) => {
  // "+79176957962"
  // +7 (917) 695-79-62
  if (!phoneNumber) return "+7 (999) 999-99-99";
  const s = phoneNumber.slice(-2);
  const i = phoneNumber.slice(-4, -2);
  const x = phoneNumber.slice(-7, -4);
  const a = phoneNumber.slice(-10, -7);
  const m = phoneNumber.slice(0, -10);
  return `${m} (${a}) ${x}-${i}-${s}`;
};
