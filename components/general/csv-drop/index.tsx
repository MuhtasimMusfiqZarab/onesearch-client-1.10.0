import React, { useState } from 'react';
import { Csv } from 'components/_icons';
import { CSVReader } from 'react-papaparse';
import styles from './styles.module.scss';

function CsvDrop() {
  const [data, setData] = useState<any>(null);

  const process = (objProps, totalData) => {
    let obj = {};
    let arrayOfObject = [];

    console.log(objProps);
    for (let index = 0; index < objProps.length; index++) {
      obj[objProps[index]] = null;
    }

    for (let index = 1; index < totalData.length; index++) {
      arrayOfObject.push(obj);
    }
    console.log('This is the obj null', arrayOfObject);

    for (let i = 1; i < totalData.length; i++) {
      for (let j = 0; j < objProps.length; j++) {
        let value = totalData[i].data[j];
        arrayOfObject[i - 1][objProps[j]] = 'Hello';
        console.log('This is individual', value);
      }
    }
    console.log('This is the obj value', arrayOfObject);
  };

  return (
    <>
      <CSVReader
        onDrop={(array) => process(array[0].data, array)}
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
      <button className={styles.file__uploadBtn}>Upload File</button>
    </>
  );
}

export { CsvDrop };
