import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./layouts/BaseLayout/ui/BaseLayout";
import { Provider } from "react-redux";
import { store } from "@/shared/config/store/AppStore";
import { ScrollToTop } from "@/shared/utils/ScrollToTop";
import { ErrorPage } from "@/pages/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

// TODO: убрать из ридми текст о заморозке при разморозке проекта
// TODO: проверить кроссбраузерность в конце разработки проекта

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<ErrorPage />}>
    <Provider store={store}>
      <BrowserRouter basename="/TeleWorks">
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
);
