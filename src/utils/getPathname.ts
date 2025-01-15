import { languageTag } from "@/paraglide/runtime";
import { strategy } from "@/lib/i18n";

export const getLocalisedPathname = (
  canonicalPath: Parameters<(typeof strategy)["getLocalisedUrl"]>[0]
) => strategy.getLocalisedUrl(canonicalPath, languageTag(), false).pathname;
