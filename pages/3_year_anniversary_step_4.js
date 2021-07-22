import Link from 'next/link';
import AnniversaryImage from '../components/3_year_anniversary/AnniversaryImage';
import styles from '../styles/3_year_anniverary/3YearAnniversaryStep4.module.scss';

function ThreeYearAnniversary() {

  return (
    <div className={styles.background}>
        <h1>2 0 2 0</h1>
      <div className={styles.widthWrapper}>
        <p>Need I say more?</p>
        <p>not as many photos this time around</p>
        <p>but quality over quantity,</p>
        <p>that's what matters anyhow.</p>

        <p></p>
        <p>starting out with a heck of a valentine's</p>
        <AnniversaryImage src="/3_year_anniversary/2020/IMG_20200214_190404.jpg" position="left" />

        <p>then a whole bunch of QTs</p>
        <AnniversaryImage horizontal src="/3_year_anniversary/2020/IMG_20200306_224530.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2020/IMG_20200421_213808.jpg" position="left" />
        <p>maybe skim through these next two 🤦‍♂️</p>
        <AnniversaryImage horizontal src="/3_year_anniversary/2020/IMG_20200422_204009.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2020/IMG_20200422_204013.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2020/IMG_20200810_093202.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2020/IMG_20200815_164426.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2020/IMG_20200926_043229.jpg" position="right" />

        <p>halloween already??</p>
        <p>where did the year go!</p>
        <AnniversaryImage horizontal src="/3_year_anniversary/2020/IMG_20201101_001014.jpg" position="left" />
        
        <p>well then</p>
        <p>time for the last leg of our trip through time!</p>
        <Link href="/3_year_anniversary_step_5">
          <div className={styles.button}>
            <p>2021 AND BEYOND</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ThreeYearAnniversary;