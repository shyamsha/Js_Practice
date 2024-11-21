import React, { useSyncExternalStore } from "react";

function useOnlineStatus() {
  const subscribeToOnlineStats = (callBack) => {
    window.addEventListener("online", callBack);
    window.addEventListener("offline", callBack);

    return () => {
      window.removeEventListener("online", callBack);
      window.removeEventListener("offline", callBack);
    };
  };

  let getIsOnlineSnapShot = () => {
    return navigator.onLine;
  };
  let getIsOnlineServerSnapShot = () => {
    return true;
  };

  return useSyncExternalStore(
    subscribeToOnlineStats,
    getIsOnlineSnapShot,
    getIsOnlineServerSnapShot
  );
}

export default useOnlineStatus;
