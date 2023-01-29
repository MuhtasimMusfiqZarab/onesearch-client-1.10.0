import Image from 'next/image';
import Rating from 'components/general/rating';
import styles from './style.module.scss';

import { useQuery, useMutation } from '@apollo/client';
import ADD_USER_REVIEW from '../../../pages/api/query/user/add-review.gql';

const AddReview = ({ name, avatar, setIsOpen }) => {
  const [addReview, { data, loading, error }] = useMutation(ADD_USER_REVIEW);

  const setReview = () => {
    addReview({
      variables: {
        input: { id: '5b1aaf11-d6d0-46cd-b71d-bae6b7a1103e', reviewText: 'asdf', rating: 5 }
      }
    });
    setIsOpen(!setIsOpen);
  };

  return (
    <div className={styles.add_review}>
      <h3>Write Review</h3>
      <p>
        Tell us about your experience & <br />
        earn coins instantly.
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
        <button onClick={() => setIsOpen(!setIsOpen)} className="btn btn_fill_primary">
          Skip
        </button>
        <button onClick={setReview} className="btn btn_fill_primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddReview;
