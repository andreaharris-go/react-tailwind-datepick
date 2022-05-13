import {useEffect, useRef, useState} from "react";

export function useEventClickOutside(initialIsVisible: boolean): any {
  const [ isComponentVisible, isComponentVisibleSet ] = useState(
    initialIsVisible
  );

  const ref = useRef(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      isComponentVisibleSet(false);
    }
  };

  const handleClickOutside = (event: { target: any; }) => {
    // @ts-ignore
    if (!ref.current.contains(event.target) && ref.current) {
      isComponentVisibleSet(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, isComponentVisibleSet };
}