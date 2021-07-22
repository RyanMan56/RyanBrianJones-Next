import styles from '../../styles/3_year_anniverary/Keypad.module.scss';

function Keypad({keypadValue, setKeypadValue}) {
  return (
    <div className={styles.grid}>
      <div
        onClick={() => {
          if (keypadValue.length === 2) {
            setKeypadValue('201');
          }
        }}
        className={keypadValue.length === 2 ? styles.active : undefined}
      >1</div>
      <div
        onClick={() => {
          if (keypadValue.length === 0) {
            setKeypadValue('2');
          }
        }}
        className={keypadValue.length === 0 ? styles.active : undefined}
      >2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div
        onClick={() => {
          if (keypadValue.length === 3) {
            setKeypadValue('2018');
          }
        }}
        className={keypadValue.length === 3 ? styles.active : undefined}
      >8</div>
      <div>9</div>
      <div className={styles.empty}></div>
      <div
        onClick={() => {
          if (keypadValue.length === 1) {
            setKeypadValue('20');
          }
        }}
        className={keypadValue.length === 1 ? styles.active : undefined}
      >0</div>
      <div className={styles.empty}></div>
    </div>
  )
}

export default Keypad;