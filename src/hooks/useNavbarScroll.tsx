import { useEffect, useState } from "react";

export const useNavbarScroll = (isDark?: boolean) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDark) return;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    isScrolled,
  };
};
