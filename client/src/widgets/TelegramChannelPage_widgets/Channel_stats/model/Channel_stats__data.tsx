import { URL_PART } from "@/shared/const/app";
import { Channel_stats_item_props } from "../ui/Channel_stats__entities/Channel_stats__item/model/Channel_stats_item__types";

export const channel_stats__items: Channel_stats_item_props[] = [
  {
    imgURL: `${URL_PART}/TelegramChannelPage/images/Channel_stats/Channel_stats_rating.png`,
    caption: "Рейтинг",
    amount: "509.2",
  },

  {
    imgURL: `${URL_PART}/TelegramChannelPage/images/Channel_stats/Channel_stats_requests.webp`,
    caption: "Выполнено заявок",
    amount: "102",
  },

  {
    imgURL: `${URL_PART}/TelegramChannelPage/images/Channel_stats/Channel_stats_stars.webp`,
    caption: "Оценка отзывов",
    amount: "5.0",
    stars: true,
  },
];
