import { Csv } from 'components/_icons';
import styles from './styles.module.scss';


function CsvDrop() {


  return (
    <>
      <div className={styles.file}>
        <span className={styles.file__uploadText}>Upload your CSV file  </span>
        <Csv />
        <div className={styles.file__uploadWrap}>
          <button className={styles.file__uploadBtn}>Upload a file</button>
          <input type="file" name="myfile" />
        </div>
        <small>or</small>
        <span className={styles.file__dropText}>Drop your CSV here </span>
      </div>
    </>
  )
}

export default CsvDrop;
