import { useEffect } from "react";

export const useClickOutside = (
  ref: any,
  visibility: boolean,
  actionHandler: any
) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        actionHandler();
      }
    };

    if (visibility) {
      document.addEventListener("mousedown", handleClick, true);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, [ref, actionHandler, visibility]);

  return { ref };
};
