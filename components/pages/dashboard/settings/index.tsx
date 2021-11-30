import { Tab } from 'components/general';
import AutofillInput from 'components/general/autofill-input';
import { Locator, Warning } from 'components/_icons';
import styles from './styles.module.scss';

import { searchNavElements } from 'components/utils/resolver/navigation/tab';

export default function Settings() {
  return (
    <div className={styles.container}>
      <Tab items={searchNavElements} />
      <div className={styles.profile}>
        <h4>Basic Information</h4>
        <div className={styles.profile__details}>
          <div>
            <span>First Name</span>
            <span>Abc</span>
          </div>

          <div>
            <span>Email: </span>
            <span>abc@gmail.com</span>
          </div>

          <div>
            <span>Last Name</span>
            <span>Xyz</span>
          </div>
        </div>

        <div className={styles.profile__additional}>
          <h4>Additional Information</h4>
          <div className={styles.profile__lacation}>
            <AutofillInput label="Location/ Country" />
            <div>
              <Locator />
              <span className={styles.profile__warning}>
                <Warning />
                &nbsp; *You can set your country just once.
              </span>
            </div>
          </div>

          <div className={styles.profile__phone}>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" />
            </div>
            <div>
              <span className={styles.profile__warning}>
                <Warning />
                &nbsp; *You can set your country just once.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
