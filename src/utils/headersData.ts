import MobileDetect from "mobile-detect";
import { headers } from "next/headers";

export const getHeadersData = async () => {
  const headerList = await headers();
  // hostname
  const host = headerList.get("host") || "";

  // user agent
  const userAgent = headerList.get("user-agent") || "";

  // mobile detect
  const md = new MobileDetect(userAgent);
  const isMobile = Boolean(md.mobile());
  return { host, userAgent, isMobile };
};
