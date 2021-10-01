import Image from 'next/image';
import styles from './styles.module.scss';
import Rating from 'components/general/rating';
import ClientImage from '../../../public/client.png';

export default function Review() {
  return (
    <div className={styles.review}>
      <div className={styles.review__info}>
        {/* <div className={styles.review__thumb}> */}
        <Image src={ClientImage} alt="Search for your lead" width="40" height="40" />
        {/* </div> */}
        <div className={styles.review__details}>
          <span className={styles.review__name}>Robert</span>
          <span className={styles.review__rating}>
            <Rating rating="4" id="rating" />
          </span>
        </div>
      </div>
      <p className={styles.review__copy}>Very pleased with their service. Highly recommended!</p>
    </div>
  );
}
