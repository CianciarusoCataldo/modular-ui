/**
 * Check if actual route is equal to the given route
 *
 * @param path path to check
 *
 * @returns true if actual route is equal to `path` route, false otherwise
 */
export const isActualRoute = (path: string) =>
  window.location.pathname === path ||
  window.location.pathname.substring(0, window.location.pathname.length - 1) ===
    path ||
  `${window.location.pathname}/` === path;
