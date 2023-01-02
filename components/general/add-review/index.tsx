import Image from 'components/uicontainers/home/services';
import Rating from 'components/general/rating';
import styles from './style.module.scss';

const AddReview = ({ name, avatar }) => {
  return (
    <div className={styles.add_review}>
      <h3>Write Review</h3>
      <p>
        You are almost out of coins. Tell us about your <br /> experience and earn coins instantly.
      </p>

      <div className={styles.add_review__author}>
        <Image
          src={avatar}
          alt="avatar"
          width={64}
          height={64}
          className={styles.add_review__avatar}
        />
        <h4>{name}</h4>
        <Rating rating={0} id="add-review" isEditable={true} />
      </div>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Write about your expereince"></textarea>
      <div className={styles.add_review__footer}>
        <a href="#">Skip</a>
        <button className="btn btn_fill_primary">Submit</button>
      </div>
    </div>
  );
};

export default AddReview;
