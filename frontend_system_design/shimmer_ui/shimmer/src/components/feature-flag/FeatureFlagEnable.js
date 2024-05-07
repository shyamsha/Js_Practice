import React from "react";
import Feature from "./Feature";

function FeatureFlagEnable() {
  return (
    <>
      <Feature feature="isGooglePayEnabled" value={true}>
        Google Pay Feature Enabled
      </Feature>
      <br />
      <Feature feature="isApplePayEnabled" value={true}>
        Apple Pay Feature Enabled
      </Feature>
    </>
  );
}

export default FeatureFlagEnable;
