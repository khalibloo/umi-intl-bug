import React from "react";
import styles from "./index.less";
import { formatPrice } from "@/utils/utils";

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p>The cat bought a mouse for {formatPrice("USD", 2)}</p>
    </div>
  );
};
