import SlickSlider from "components/general/slick";
import { Heading } from "../heading";
import Review from "components/general/review";
import styles from "./styles.module.scss";
import ClientImage from '/public/client.png';

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
            <Review
              name="Robert"
              quote="Very pleased with their service. Highly recommended!"
              avatar={ClientImage}
              rating="5"
              ratingId="Robert"
            />

            <Review
              name="Jhon"
              quote="Very pleased with their service. Highly recommended!"
              avatar={ClientImage}
              rating="4.5"
              ratingId="jhon"
            />

            <Review
              name="Doe"
              quote="Very pleased with their service. Highly recommended!"
              avatar={ClientImage}
              rating="4"
              ratingId="doe"
            />

            <Review
              name="Deniel"
              quote="Very pleased with their service. Highly recommended!"
              avatar={ClientImage}
              rating="3.5"
              ratingId="deniel"
            />

            <Review
              name="Dwyane"
              quote="Very pleased with their service. Highly recommended!"
              avatar={ClientImage}
              rating="3"
              ratingId="Dwyane"
            />

            <Review
              name="Jonshon"
              quote="Very pleased with their service. Highly recommended!"
              avatar={ClientImage}
              rating="2.5"
              ratingId="Jonshon"
            />

            <Review
              name="Albert"
              quote="Very pleased with their service. Highly recommended!"
              avatar={ClientImage}
              rating="2"
              ratingId="Albert"
            />
          </SlickSlider>
        </div>
      </div>
    </div>
  );
}
