/**
 * Utility functions for slug formatting, URL handling, and route matching.
 */

/**
 * Sanitizes a string into a clean, URL-safe slug.
 * Converts to lowercase, translates & and %, replaces special chars and dots with hyphens,
 * collapses consecutive hyphens, and trims leading/trailing hyphens.
 *
 * @param {string} str
 * @returns {string}
 */
export const sanitizeSlug = (str) => {
  if (!str) return "";
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/&/g, "-and-")
    .replace(/%/g, "-percent-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
};

/**
 * Legacy helper kept for backward compatibility.
 * Sanitizes any slug or string into a URL-friendly format.
 *
 * @param {string} slug
 * @returns {string}
 */
export const removeSpacesWithHyphen = (slug) => {
  return sanitizeSlug(slug);
};

/**
 * Generates a clean URL-friendly slug from a title string.
 *
 * @param {string} title
 * @returns {string}
 */
export const getSlugFromTitle = (title) => sanitizeSlug(title);

/**
 * Returns a canonical URL-ready slug for a map item by prioritizing
 * item.slug (sanitized) or falling back to a title-based slug.
 *
 * @param {object} item
 * @returns {string}
 */
export const getItemSlug = (item) => {
  if (!item) return "";
  const raw = item.slug || item.title || "";
  return sanitizeSlug(raw);
};

/**
 * Normalizes a slug or ID for loose/fuzzy matching (strips all non-alphanumeric chars).
 * Allows URLs with legacy dots, underscores, or hyphens to seamlessly resolve to the same map.
 *
 * @param {string} str
 * @returns {string}
 */
export const normalizeForMatch = (str) => {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
};

