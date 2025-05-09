import styles from "./FAQ.module.scss";
import { Accordion } from "@szhsin/react-accordion";
import { memo } from "react";
import { FAQ_Accordion_item } from "./FAQ_Accordion_item/ui/FAQ_Accordion_item";

export const FAQ: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.faq}>
      <h2 className={`InternalPage__caption`}>Вопрос-ответ</h2>

      <Accordion
        className={styles.faq__accordion}
        transition
        transitionTimeout={250}
      >
        <FAQ_Accordion_item header="Какие есть ограничения к каналам">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </FAQ_Accordion_item>

        <FAQ_Accordion_item header="Какие есть ограничения к каналам">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </FAQ_Accordion_item>

        <FAQ_Accordion_item header="Какие есть ограничения к каналам">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </FAQ_Accordion_item>

        <FAQ_Accordion_item header="Какие есть ограничения к каналам">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </FAQ_Accordion_item>
      </Accordion>
    </section>
  );
});
FAQ.displayName = "FAQ";
