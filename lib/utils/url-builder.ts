/**
 * URL Builder Utility
 * Handles building URLs with UTM parameters from sessionStorage
 * and locale-aware path construction
 */

import { UTM_PARAM_KEYS } from "@/lib/constants";

/**
 * Default locale for the application (matches basePath in next.config.mjs)
 */
const DEFAULT_LOCALE = "mx";

/**
 * Constructs a locale-aware path by prepending the locale prefix
 * @param path - The path without locale (e.g., "/tarjetas" or "tarjetas")
 * @param locale - The locale to use (defaults to "mx")
 * @returns Localized path (e.g., "/mx/tarjetas")
 *
 * @example
 * getLocalizedPath("/tarjetas") // returns "/mx/tarjetas"
 * getLocalizedPath("tarjetas") // returns "/mx/tarjetas"
 * getLocalizedPath("/mx/tarjetas") // returns "/mx/tarjetas" (idempotent)
 */
export function getLocalizedPath(
  path: string,
  locale: string = DEFAULT_LOCALE,
): string {
  // Handle empty or root paths
  if (!path || path === "/") {
    return `/${locale}`;
  }

  // Normalize path to start with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // If path already starts with the locale, return as-is
  if (
    normalizedPath.startsWith(`/${locale}/`) ||
    normalizedPath === `/${locale}`
  ) {
    return normalizedPath;
  }

  // Prepend locale
  return `/${locale}${normalizedPath}`;
}

/**
 * Builds a URL with UTM parameters appended from sessionStorage
 * @param baseUrl - The base URL (can be internal path or external URL)
 * @returns URL string with UTM parameters appended
 */
export function buildUrlWithUtmParams(baseUrl: string): string {
  if (typeof window === "undefined") {
    return baseUrl;
  }

  const utmParams: Record<string, string> = {};

  // Collect UTM parameters from sessionStorage
  UTM_PARAM_KEYS.forEach((param) => {
    const value = sessionStorage.getItem(param);
    if (typeof value === "string" && value.trim() !== "") {
      utmParams[param] = value;
    }
  });

  // If no UTM parameters found, return the base URL as-is
  if (Object.keys(utmParams).length === 0) {
    return baseUrl;
  }

  // Build query string
  const queryString = new URLSearchParams(utmParams).toString();

  // Check if the base URL already has query parameters
  const separator = baseUrl.includes("?") ? "&" : "?";

  return `${baseUrl}${separator}${queryString}`;
}

/**
 * Redirects to a URL with UTM parameters preserved and locale prefix
 * For internal links, automatically adds /mx prefix if missing
 * For external links, uses window.location.href
 * @param url - The URL to redirect to (can be with or without locale prefix)
 *
 * @example
 * redirectWithUtmParams("/tarjetas") // redirects to /mx/tarjetas?utm_...
 * redirectWithUtmParams("/mx/tarjetas") // redirects to /mx/tarjetas?utm_...
 * redirectWithUtmParams("https://external.com") // redirects to https://external.com?utm_...
 */
export function redirectWithUtmParams(url: string): void {
  // Check if URL is external
  const isExternal = url.startsWith("http://") || url.startsWith("https://");

  // For internal URLs, ensure locale prefix is added
  const localizedUrl = isExternal ? url : getLocalizedPath(url);

  const fullUrl = buildUrlWithUtmParams(localizedUrl);

  if (typeof window !== "undefined") {
    window.location.href = fullUrl;
  }
}
