import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { ButtonProps } from "../model/Button__types";
import { memo, useState } from "react";
import { URLIsAbsolute } from "@/shared/utils/URLIsAbsolute";

export const Button: React.FC<ButtonProps> = memo(
  ({
    to,
    text,
    className,
    type,
    canSelected = false,
    onClick,
    ariaDisabled,
    children,
  }): React.JSX.Element => {
    const [ButtonIsSelected, setButtonIsSelected] = useState<boolean>(false);

    const ButtonOnClick = (): void => {
      canSelected
        ? setButtonIsSelected(() => !ButtonIsSelected)
        : () => {
            return;
          };

      if (onClick) {
        onClick();
      }
    };

    return (
      <>
        {to ? (
          URLIsAbsolute(to) ? (
            <a
              aria-disabled={ariaDisabled}
              target="_blank"
              href={to}
              onClick={ButtonOnClick}
              className={`${styles.Button} ${styles.Button_a} ${styles[type]} ${canSelected ? styles.catalog__category__canSelected : ""} ${ButtonIsSelected ? styles.catalog__category__selected : ""} ${className}`}
              rel="noreferrer"
            >
              {text ? text : children}
            </a>
          ) : (
            <Link
              aria-disabled={ariaDisabled}
              onClick={ButtonOnClick}
              to={to}
              className={`${styles.Button} ${styles[type]} ${canSelected ? styles.catalog__category__canSelected : ""} ${ButtonIsSelected ? styles.catalog__category__selected : ""} ${className}`}
            >
              {text ? text : children}
            </Link>
          )
        ) : (
          <button
            aria-disabled={ariaDisabled}
            onClick={ButtonOnClick}
            className={`${styles.Button} ${styles[type]} ${canSelected ? styles.catalog__category__canSelected : ""} ${ButtonIsSelected ? styles.catalog__category__selected : ""} ${className}`}
          >
            {text ? text : children}
          </button>
        )}
      </>
    );
  },
);
Button.displayName = "Button";
