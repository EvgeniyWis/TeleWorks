import "./TelegramChannelPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import {
  channelReviews,
  Reviews_items,
  Similar_channels__items,
} from "../model/TelegramChannelPage_data";
import { ItemsSlider } from "@/widgets/Global_widgets/ItemsSlider";
import { ReviewsPanel } from "@/entities/Global_entities/ReviewsPanel";
import { Buy_ads } from "@/widgets/TelegramChannelPage_widgets/Buy_ads";
import { Channel_stats } from "@/widgets/TelegramChannelPage_widgets/Channel_stats";
import { Reviews } from "@/widgets/TelegramChannelPage_widgets/Reviews";
import { Stats } from "@/widgets/TelegramChannelPage_widgets/Stats";
import { TelegramChannel } from "@/entities/TelegramChannelPage_entities/TelegramChannel";
import { Similar_channels__item } from "@/entities/TelegramChannelPage_entities/Similar_channels__item";
import { useParams } from "react-router-dom";
import { isNumber } from "@/shared/utils/IsNumber";
import { NotFoundContainer } from "@/shared/ui-kit/NotFoundContainer";

export const TelegramChannelPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("TelegramChannelPage");
    document.title = `TeleWorks | Название канала`;
  }, []);

  // Получение id страницы
  const { id } = useParams<{ id: string }>();

  return (
    <main className="Page TelegramChannelPage__main">
      {id && isNumber(id) ? (
        <div className="padding">
          <TelegramChannel />
          <Stats />
          <Buy_ads />
          <Channel_stats />

          <h2 className="TelegramChannelPage__caption">Отзывы канала</h2>

          <ReviewsPanel {...channelReviews} />
          <Reviews reviewsItems={Reviews_items} />
          <ItemsSlider
            ItemsSlider__headerProps={{
              title: "Похожие каналы",
              prevArrowId: "Similar_channels__items__prev",
              nextArrowId: "Similar_channels__items__next",
            }}
            ItemsSlider__sliderProps={{
              componentProps: Similar_channels__items,
              Component: Similar_channels__item,
              visibleItems: 3,
              prevArrowId: "Similar_channels__items__prev",
              nextArrowId: "Similar_channels__items__next",
            }}
          />
        </div>
      ) : (
        <NotFoundContainer />
      )}
    </main>
  );
};
TelegramChannelPage.displayName = "TelegramChannelPage";
