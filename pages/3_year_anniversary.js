import Link from 'next/link';
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import Keypad from '../components/3_year_anniversary/Keypad';
import styles from '../styles/3_year_anniverary/3YearAnniversary.module.scss';

function ThreeYearAnniversary() {

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [keypadValue, setKeypadValue] = useState('');

  return (
    <div className={styles.background}>
        <h1>Happy 3rd Anniversary</h1>
      <div className={styles.widthWrapper}>
        <p>Dear Lucy,</p>
        <p>wow</p>
        <p>can you believe it's been 3 years already?</p>
        <p>no?</p>
        <p>can you remember every little thing that's happened in that time?</p>
        <p>I bet you can't</p>
        <p>but that's okay!</p>
        <p>lucky for you I've built a time machine</p>
        <p>so we can travel back through time and re-live all the best bits</p>
        <p>are you ready?</p>
        <div className={styles.switchesSection}>
          <div className={styles.switchWrapper}>
            <span>Engage Flux Capacitor</span>
            <div className={styles.switch}>
              <ReactSwitch checked={switch1} onChange={() => setSwitch1((prev) => !prev)} />
            </div>
          </div>
          <div className={styles.switchWrapper}>
            <span>Retrieve Continuum Transfunctioner</span>
            <div>
              <ReactSwitch checked={switch2} onChange={() => setSwitch2((prev) => !prev)} />
            </div>
          </div>
        </div>
        {switch1 && switch2 ? (
          <div className={styles.grid}>
            <p className={styles.enterYear}>Now it's time to enter the year it all started...</p>
            <p className={styles.keypadValue}>{keypadValue || ' '}</p>
            <Keypad keypadValue={keypadValue} setKeypadValue={setKeypadValue} />
          </div>
        ) : null}
        {keypadValue.length === 4 ? (
          <Link href="/3_year_anniversary_step_2">
            <div className={styles.button}>
              <p>BEGIN JOURNEY</p>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default ThreeYearAnniversary;