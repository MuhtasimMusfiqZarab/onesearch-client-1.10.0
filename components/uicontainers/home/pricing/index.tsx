import { Heading } from '../heading';
import SlickSlider from 'components/general/slick';
import styles from './styles.module.scss';

interface Props {
  hasHeading?: boolean;
}

export default function Pricing({ hasHeading }: Props) {
  const slickSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'pricing_slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.pricing_wrap}>
      <div className={styles.pricing_wrap__inner}>
        {hasHeading && <Heading title="Pricing" isUnderline={true} />}

        {/* all the cards wrapper  */}
        <div className={styles.wrapper}>
          <SlickSlider settings={slickSettings}>
            <div className={styles.container}>
              <h2 className={styles.title}>Individual</h2>
              <ul>
                <li>1 Month Subscription</li>
                <li>Unlimited Searching Data</li>
                <li>Monthly 3 Free Requests</li>
                <li>200 Credits</li>
                <li>Support 24/7</li>
              </ul>
            </div>

            <div className={styles.container}>
              <h2 className={styles.title}>Business</h2>
              <ul>
                <li>6 Month Subscription</li>
                <li>Unlimited Searching Data</li>
                <li>Monthly 10 Free Requests</li>
                <li>500 Credits</li>
                <li>Support 24/7</li>
              </ul>
            </div>

            <div className={styles.container}>
              <h2 className={styles.title}>Pro</h2>
              <ul>
                <li>12 Month Subscription</li>
                <li>Unlimited Searching Data</li>
                <li>Monthly 15 Free Requests</li>
                <li>1000 Credits</li>
                <li>Support 24/7</li>
              </ul>
            </div>
          </SlickSlider>
        </div>
      </div>
    </div>
  );
}
