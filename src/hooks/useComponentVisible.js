import { useEffect, useRef, useState } from "react";

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => handleClickOutside(e);

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  return {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  };
}
