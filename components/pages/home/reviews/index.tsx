import SlickSlider from "components/general/slick";
import { Heading } from "../heading";
import Review from "components/general/review";
import styles from "./styles.module.scss";

export default function Reviews() {
  const slickSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'review_slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className={styles.review_wrap}>
      <div className={styles.review_wrap__inner}>
        <Heading title="Our Customers" isUnderline={true} />

        <div className={styles.reviews}>
          <SlickSlider settings={slickSettings}>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </SlickSlider>
        </div>
      </div>
    </div>
  );
}
