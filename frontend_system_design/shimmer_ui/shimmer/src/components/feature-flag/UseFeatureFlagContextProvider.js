import React, { createContext, useState } from "react";

export const featureFlagContext = createContext({});
function UseFeatureFlagContextProvider({ children }) {
  // we can make api call here to fetch feature flags and update state
  // use Local storage for caching
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
