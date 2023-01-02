import Image from 'components/uicontainers/home/services';
import styles from './styles.module.scss';
import Rating from 'components/general/rating';

export default function Review({ name, quote, avatar, rating, ratingId }) {
  return (
    <div className={styles.review}>
      <div className={styles.review__info}>
        <div className={styles.review__thumb}>
          <Image src={avatar} alt={name} width="100%" height="100%" />
        </div>
        <div className={styles.review__details}>
          <span className={styles.review__name}>{name}</span>
          <span className={styles.review__rating}>
            <Rating rating={rating} id={ratingId} isEditable={false} />
          </span>
        </div>
      </div>
      <p className={styles.review__copy}>{quote}</p>
    </div>
  );
}
