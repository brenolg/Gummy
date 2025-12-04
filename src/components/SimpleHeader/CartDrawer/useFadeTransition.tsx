import { useEffect, useState } from "react";

export function useFadeTransition(show: boolean, duration = 350) {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), duration);
      return () => clearTimeout(timeout);
    }
  }, [show, duration]);

  return shouldRender;
}
