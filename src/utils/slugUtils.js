/**
 * Utility functions for slug formatting and URL handling.
 */

/**
 * Removes spaces from a string (such as a slug or title) and replaces them with hyphens (-).
 * Trims leading/trailing whitespace and collapses multiple consecutive spaces/hyphens.
 *
 * @param {string} slug
 * @returns {string}
 */
export const removeSpacesWithHyphen = (slug) => {
  if (!slug) return "";
  return String(slug)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
};

/**
 * Generates a clean URL-friendly slug from a title string.
 *
 * @param {string} title
 * @returns {string}
 */
export const getSlugFromTitle = (title) =>
  (title || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/**
 * Returns a URL-ready slug for a map item by prioritizing item.slug
 * (with spaces replaced by hyphens) or falling back to a title-based slug.
 *
 * @param {object} item
 * @returns {string}
 */
export const getItemSlug = (item) => {
  if (!item) return "";
  const rawSlug = item.slug || getSlugFromTitle(item.title);
  return removeSpacesWithHyphen(rawSlug);
};
