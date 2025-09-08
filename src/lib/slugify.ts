/**
 * Converts a string to a URL-friendly slug
 * @param text - The string to convert
 * @returns The generated slug
 */

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/&/g, '')          // Remove ampersands
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '')    // Remove non-word chars except hyphens
    .replace(/--+/g, '-')       // Replace multiple hyphens with single
    .replace(/^-+/, '')         // Trim hyphens from start
    .replace(/-+$/, '');        // Trim hyphens from end
};