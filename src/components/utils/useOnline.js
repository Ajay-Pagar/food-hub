import { useEffect, useState } from "react";
//this is Custom hook
const useOnline = () => {
  const [isOnline, setIsonline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsonline(true);
    };
    const handleOffline = () => {
      setIsonline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};
export default useOnline;
