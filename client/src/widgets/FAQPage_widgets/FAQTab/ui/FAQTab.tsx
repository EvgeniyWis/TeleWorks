import { FAQ_accordion } from "@/shared/ui-kit/FAQ_accordion";
import { faqTabs } from "../model/FAQTab_data";
import styles from "./FAQTab.module.scss";
import { memo, useContext } from "react";
import { FAQPageContext } from "@/app/layouts/BaseLayout/ui/pageWrappers/FAQPageContainer";
import { Flex } from "@/shared/lib/Stack";

export const FAQTab: React.FC = memo((): React.JSX.Element => {
  const { ActiveFAQTab } = useContext(FAQPageContext);

  return (
    <Flex
      max
      direction="column"
      align="center"
      gap="20"
      className={styles.FAQTab}
    >
      <h2 className={styles.FAQTab__caption}>{ActiveFAQTab}</h2>

      <FAQ_accordion
        FAQ_accordion_items={ActiveFAQTab ? faqTabs[ActiveFAQTab] : []}
      />
    </Flex>
  );
});
FAQTab.displayName = "FAQTab";
