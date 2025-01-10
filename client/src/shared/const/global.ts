import { PortNow } from "./app";

// TODO: изменить адрес гитхаб pages на реальный при установке на хостинг

export const isUnit =
  !PortNow &&
  !window.location.href.startsWith("https://evgeniywis.github.io/TeleWorks/");

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

export const laptop_mediaQuery: MediaQueryList = window.matchMedia(
  "(max-width: 1600px)",
);

export const tablet_mediaQuery: MediaQueryList = window.matchMedia(
  "(max-width: 1300px)",
);

export const tabletHeight_mediaQuery: MediaQueryList = window.matchMedia(
  "(max-height: 1000px)",
);
export const tablet_small_mediaQuery: MediaQueryList =
  window.matchMedia("(max-width: 900px)");

export const mobile_mediaQuery: MediaQueryList =
  window.matchMedia("(max-width: 700px)");

export const transitionDuration: number = 300;

export const modalsTransitionDuration: number = 3000;

export const transitionDurationMedium: number = 700;
