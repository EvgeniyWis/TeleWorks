import { URL_PART } from "@/shared/const/app";
import { MarketPlaceSlider_item_props } from "../model/MarketPlaceSlider_item_types";
import styles from "./MarketPlaceSlider_item.module.scss";
import { memo, useMemo } from "react";

export const MarketPlaceSlider_item: React.FC<MarketPlaceSlider_item_props> =
  memo(
    ({
      imgURL,
      authorName,
      authorSurname,
      text,
      starsAmount,
    }): React.JSX.Element => {
      const stars_array: boolean[] = useMemo(
        () => Array(starsAmount).fill(true),
        [starsAmount],
      );

      return (
        <div className={styles.marketPlaceSlider_item}>
          <img
            className={styles.marketPlaceSlider_item__img}
            src={imgURL}
            alt={authorName}
          />

          <span className={styles.marketPlaceSlider_item__author}>
            {authorSurname} {authorName}
          </span>

          <p className={`InternalPage__text`}>{text}</p>

          <div className={styles.marketPlaceSlider_item__stars}>
            {stars_array.map((_, index) => (
              <img
                key={index}
                src={`${URL_PART}/InternalPage/images/MarketPlaceItem_star.png`}
                alt="Жёлтая звезда"
              />
            ))}
          </div>
        </div>
      );
    },
  );
MarketPlaceSlider_item.displayName = "MarketPlaceSlider_item";
