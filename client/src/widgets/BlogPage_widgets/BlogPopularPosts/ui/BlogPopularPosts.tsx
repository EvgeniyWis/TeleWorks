import { Flex } from "@/shared/lib/Stack";
import styles from "./BlogPopularPosts.module.scss";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SelectDropdownIndicatorDarkBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorDarkBlueSVG.svg?react";
import { BlogPopularPost } from "./BlogPopularPost/ui/BlogPopularPost";
import "./BlogPopularPosts_swiper.scss";
import { BlogPopularPostsProps } from "@/shared/types/blog";
import { mobile_mediaQuery } from "@/shared/const/global";

export const BlogPopularPosts: React.FC<BlogPopularPostsProps> = memo(
  ({ blogPopularPosts }): React.JSX.Element => {
    return (
      <Flex
        direction="column"
        className={`BlogPopularPosts ${styles.BlogPopularPosts} Page__GrayBorderWithWhiteBGWrapper`}
      >
        <h6 className="BlogPage__minicaption">Популярное за неделю</h6>

        <div
          id="BlogPopularPosts__slider_prevArrow"
          className="BlogPopularPosts__slider_prevArrow"
        >
          <Flex
            align="center"
            justify="center"
            className={`${styles.BlogPopularPosts__arrow} ${styles.BlogPopularPosts__arrow__prev}`}
          >
            <SelectDropdownIndicatorDarkBlueSVG />
          </Flex>
        </div>

        <Swiper
          navigation={{
            prevEl: `#BlogPopularPosts__slider_prevArrow`,
            nextEl: `#BlogPopularPosts__slider_nextArrow`,
          }}
          modules={[Navigation]}
          spaceBetween={mobile_mediaQuery.matches ? 13 : 18}
          slidesPerView={mobile_mediaQuery.matches ? 2 : 3}
          slidesPerGroup={mobile_mediaQuery.matches ? 2 : 3}
          className={styles.BlogPopularPosts__slider}
        >
          {blogPopularPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <BlogPopularPost {...post} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          id="BlogPopularPosts__slider_nextArrow"
          className="BlogPopularPosts__slider_nextArrow"
        >
          <Flex
            align="center"
            justify="center"
            className={`${styles.BlogPopularPosts__arrow} ${styles.BlogPopularPosts__arrow__next}`}
          >
            <SelectDropdownIndicatorDarkBlueSVG />
          </Flex>
        </div>
      </Flex>
    );
  },
);
BlogPopularPosts.displayName = "BlogPopularPosts";
