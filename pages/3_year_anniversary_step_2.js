import Link from 'next/link';
import AnniversaryImage from '../components/3_year_anniversary/AnniversaryImage';
import styles from '../styles/3_year_anniverary/3YearAnniversaryStep2.module.scss';

function ThreeYearAnniversary() {

  return (
    <div className={styles.background}>
        <h1>2 0 1 8</h1>
      <div className={styles.widthWrapper}>
        <p>Back where it all started,</p>
        <p>some may even say</p>
        <p>the year that we peaked</p>
        <p>😉</p>
        <p>quick heads up before we begin</p>
        <p>tap any pics that you like</p>
        <p>to see them in full</p>
        <p></p>
        {/* 3456 × 4608. Asp = 0.75 */}
        {/* <div className={styles.imgLeft}>
          <Image src="/3_year_anniversary/2018/IMG_20180821_202420.jpg" width={200} height={200/0.75} />
        </div>
        <div className={styles.imgRight}>
          <Image src="/3_year_anniversary/2018/IMG_20180902_224213.jpg" width={200} height={200/0.75} />
        </div> */}

        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180821_202420.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180902_224213.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180910_194139.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180910_215613_Bokeh.jpg" position="right" />

        <p></p>
        <p>the year we made some new furry friends</p>
        <p></p>
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180828_015347.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20181105_203244.jpg" position="right" />
        <p>not new to me, I know I know</p>
        <AnniversaryImage horizontal src="/3_year_anniversary/2018/IMG_20181226_115310.jpg" position="left" />

        <p>and how could we forget</p>
        <p>all the adventures.</p>
        <p></p>
        <p>from Geneva</p>
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180921_222101.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180921_203430.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2018/IMG_20180922_122301.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2018/IMG_20180922_153950.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180922_184807.jpg" position="left" />
        <p>❤️</p>
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20180922_231959.jpg" position="right" />

        <p></p>
        <p>to Rome</p>
        <AnniversaryImage horizontal src="/3_year_anniversary/2018/IMG_20181218_133047.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20181218_161253.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2018/IMG_20181218_180508.jpg" position="left" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2018/IMG_20181219_160432.jpg" position="left" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2018/IMG_20181219_190811.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2018/IMG_20181220_165552.jpg" position="right" />

        <p>it was a lovely year</p>
        <p>filled with getting to know each other</p>
        <p>and making each other happy</p>
        <p>(which we'd only grow to get better at)</p>
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20181003_184718.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20181005_225129.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20181125_151909.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2018/IMG_20181222_105244.jpg" position="left" />

        <p>ready to get back in the time machine?</p>
        <p>I've warmed it up for you</p>
        <Link href="/3_year_anniversary_step_3">
          <div className={styles.button}>
            <p>TO 2019</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ThreeYearAnniversary;