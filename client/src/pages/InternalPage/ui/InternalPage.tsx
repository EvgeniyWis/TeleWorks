import { useEffect } from "react";
import "./InternalPage.scss";
import "@/shared/main.scss";
import { ReceiveNotifications } from "@/shared/ui-kit/ReceiveNotifications";
import { ChannelsExamples } from "@/widgets/InternalPage_widgets/ChannelsExamples";
import { EarnInSteps } from "@/widgets/InternalPage_widgets/EarnInSteps";
import { FAQ } from "@/widgets/InternalPage_widgets/FAQ";
import { MainSection } from "@/widgets/InternalPage_widgets/MainSection";
import { MarketPlace } from "@/widgets/InternalPage_widgets/MarketPlace";
import { OpenAdvantages } from "@/widgets/InternalPage_widgets/OpenAdvantages";

export const InternalPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("InternalPage");
    document.title = `TeleWorks | Информация`;
  }, []);

  return (
    <>
      <main className="Page Internal__main">
        <div className="padding">
          <MainSection />
          <ChannelsExamples />
        </div>

        <OpenAdvantages />

        <div className="padding">
          <EarnInSteps />
          <MarketPlace />
          <FAQ />
        </div>
      </main>

      <ReceiveNotifications />
    </>
  );
};
InternalPage.displayName = "InternalPage";
