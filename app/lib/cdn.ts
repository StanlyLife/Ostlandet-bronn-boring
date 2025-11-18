export const CDN_BASE_URL = "https://ostlandetbronnboring.b-cdn.net";

export function cdn(path: string): string {
  if (!path.startsWith("/")) {
    return `${CDN_BASE_URL}/${path}`;
  }
  return `${CDN_BASE_URL}${path}`;
}
