import React, { createContext, useState } from "react";

export const featureFlagContext = createContext({});
function UseFeatureFlagContextProvider({ children }) {
  const [featureFlag, setFeatureFlag] = useState({
    isGooglePayEnabled: true,
    isApplePayEnabled: true,
  });
  return (
    <featureFlagContext.Provider value={{ featureFlag }}>
      {children}
    </featureFlagContext.Provider>
  );
}

export default UseFeatureFlagContextProvider;
