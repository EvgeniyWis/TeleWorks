import "./ProjectPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import {
  reviewsPanelProps,
  OtherProjectsItems,
  ProjectInfoData,
  ProjectReviews_items,
  SimilarProjectsItems,
} from "@/shared/mockData";
import { ItemsSlider } from "@/widgets/Global_widgets/ItemsSlider";
import { ProjectInfo } from "@/widgets/ProjectPage_widgets/ProjectInfo";
import { ProjectReviews } from "@/widgets/ProjectPage_widgets/ProjectReviews";
import { ProjectItem } from "@/entities/Global_entities/ProjectItem";
import { useParams } from "react-router-dom";
import { NotFoundContainer } from "@/shared/ui-kit/NotFoundContainer";
import { isNumber } from "@/shared/utils/IsNumber";
import { PortNow } from "@/shared/const/app";

export const ProjectPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("ProjectPage");
    document.title = `TeleWorks | Название проекта`;
  }, []);

  // Получение id страницы
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <main className="Page ProjectPage__main">
        <div className="padding">
          {(id && isNumber(id)) || PortNow == "6007" ? (
            <>
              <ProjectInfo {...ProjectInfoData} />

              <ProjectReviews
                reviewsItems={ProjectReviews_items}
                ReviewsPanelProps={reviewsPanelProps}
              />

              <ItemsSlider
                ItemsSlider__headerProps={{
                  title: "Другие проекты продавца",
                  prevArrowId: "OtherProjectsItems__prev",
                  nextArrowId: "OtherProjectsItems__next",
                }}
                ItemsSlider__sliderProps={{
                  componentProps: OtherProjectsItems,
                  Component: ProjectItem,
                  visibleItems: 4,
                  prevArrowId: "OtherProjectsItems__prev",
                  nextArrowId: "OtherProjectsItems__next",
                }}
              />

              <ItemsSlider
                ItemsSlider__headerProps={{
                  title: "Похожие проекты",
                  prevArrowId: "SimilarProjectsItems__prev",
                  nextArrowId: "SimilarProjectsItems__next",
                }}
                ItemsSlider__sliderProps={{
                  componentProps: SimilarProjectsItems,
                  Component: ProjectItem,
                  visibleItems: 4,
                  prevArrowId: "SimilarProjectsItems__prev",
                  nextArrowId: "SimilarProjectsItems__next",
                }}
              />
            </>
          ) : (
            <NotFoundContainer />
          )}
        </div>
      </main>
    </>
  );
};
ProjectPage.displayName = "ProjectPage";
