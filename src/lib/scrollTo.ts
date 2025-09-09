export const scrollToSection = (targetId: string, options?: ScrollIntoViewOptions) => {
  if (targetId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: options?.behavior || 'smooth'
    });
  } else {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: options?.behavior || 'smooth',
        block: options?.block || 'start'
      });
    }
  }
};
