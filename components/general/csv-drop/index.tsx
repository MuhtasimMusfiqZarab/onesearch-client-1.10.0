import { Csv } from 'components/_icons';
import { CSVReader } from 'react-papaparse';
import styles from './styles.module.scss';

function CsvDrop() {
  return (
    <>
      <CSVReader
        onDrop={(data) => console.log('data', data)}
        addRemoveButton
        onRemoveFile={() => console.log('removed')}
        // removeButtonColor={Colours.danger}
        // style={csvReaderStyle}
      >
        <div className={styles.file}>
          <span className={styles.file__uploadText}>Upload your CSV file </span>
          <Csv />
          <div className={styles.file__uploadWrap}>
            <button className={styles.file__uploadBtn}>Upload a file</button>
            <input type="file" name="myfile" />
          </div>
          <small>or</small>
          <span className={styles.file__dropText}>Drop your CSV here </span>
        </div>
      </CSVReader>
    </>
  );
}

export { CsvDrop };
