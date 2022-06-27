export const checkDevice = () => {
  const isMobile = globalThis.innerWidth < 1200;
  return isMobile;
}