import React, { useContext } from "react";
import { featureFlagContext } from "./UseFeatureFlagContextProvider";

function Feature({ feature, children, value }) {
  const { featureFlag } = useContext(featureFlagContext);
  return featureFlag[feature] === value ? children : null;
}

export default Feature;
