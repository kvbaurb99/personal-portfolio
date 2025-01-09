import * as m from "@/paraglide/messages.js";
import { useMemo } from "react";

export const useNavigationItems = () => {
  const items = useMemo(
    () => [
      {
        title: m.o_mnie(),
        id: "/#about",
      },
      {
        title: m.doswiadczenie(),
        id: "/#exp",
      },
      {
        title: m.umiejetnosci(),
        id: "/#skills",
      },
      {
        title: m.portfolio(),
        id: "/#projects",
      },
    ],
    []
  );
  return { items };
};
