import MobileDetect from "mobile-detect";
import { headers } from "next/headers";

export const getHeadersData = async () => {
  const headerList = await headers();
  const host = headerList.get("host") || "";
  const userAgent = headerList.get("user-agent") || "";
  const md = new MobileDetect(userAgent);
  const isMobile = Boolean(md.mobile());
  return { host, userAgent, isMobile };
};
