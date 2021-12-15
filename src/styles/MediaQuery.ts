const sizes = {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  };
  

  export const breakpoints = {
    sm: `@media (max-width: ${sizes.sm})`,
    md: `@media (max-width: ${sizes.md})`,
    lg: `@media (max-width: ${sizes.lg})`,
    xl: `@media (max-width: ${sizes.xl})`,
  };