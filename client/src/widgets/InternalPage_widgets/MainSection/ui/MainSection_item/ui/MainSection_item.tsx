import { memo } from "react";
import { MainSectionItemProps } from "../model/MainSection_item_types";
import styles from "./MainSection_item.module.scss";

export const MainSection_item: React.FC<MainSectionItemProps> = memo(
  ({ title, desc, span, spanEnd }): React.JSX.Element => {
    return (
      <div className={`${styles.mainSection_item} InternalPage__wrapper`}>
        <h6 className={styles.mainSection_item__title}>
          {!spanEnd && (
            <span className={`${styles.mainSection_item__span}`}>{span}</span>
          )}
          {title}
          {spanEnd && (
            <span className={styles.mainSection_item__span}>{span}</span>
          )}
        </h6>

        <p className={styles.mainSection_item__desc}>{desc}</p>
      </div>
    );
  },
);
MainSection_item.displayName = "MainSection_item";
