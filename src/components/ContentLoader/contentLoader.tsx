import React from "react";
import ContentLoader from "react-content-loader";

const styles = require("./contentLoader.scss");

export const BodyContentLoader = () => (
  <div className={styles.bodyContentLoader}>
    <ContentLoader
      height={200}
      width={400}
      speed={1}
      primaryColor="#f3f3f3"
      secondaryColor="#d7d6d8"
    >
      <rect x="160.5" y="11" rx="4" ry="4" width="76.63" height="15.1" />
      <rect x="60.5" y="35.05" rx="1" ry="1" width="275.4" height="151.36" />
    </ContentLoader>
  </div>
);
