import Image from 'components/uicontainers/home/services';
import Rating from 'components/general/rating';
import styles from './style.module.scss';

const AddReview = ({ name, avatar, setIsOpen }) => {
  return (
    <div className={styles.add_review}>
      <h3>Write Review</h3>
      <p>
        Tell us about your experience & <br />
        earn coins instantly.
      </p>

      <div className={styles.add_review__author}>
        {/* <Image
          src={avatar}
          alt="avatar"
          width={64}
          height={64}
          className={styles.add_review__avatar}
        /> */}
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
        <button onClick={() => setIsOpen(!setIsOpen)} className="btn btn_fill_primary">
          Skip
        </button>
        <button onClick={() => setIsOpen(!setIsOpen)} className="btn btn_fill_primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddReview;
