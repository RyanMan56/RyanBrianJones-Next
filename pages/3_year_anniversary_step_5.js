import Link from 'next/link';
import AnniversaryImage from '../components/3_year_anniversary/AnniversaryImage';
import styles from '../styles/3_year_anniverary/3YearAnniversaryStep5.module.scss';

function ThreeYearAnniversary() {

  return (
    <div className={styles.background}>
        <h1>2 0 2 1</h1>
      <div className={styles.widthWrapper}>
        <p>The here and the now</p>

        <p></p>
        <p>let's first get familiar with what I like to call</p>
        <p>✨contemporary fashion✨</p>

        <AnniversaryImage horizontal src="/3_year_anniversary/2021/IMG_20210324_200150.jpg" position="left" />

        <p>then finally,</p>
        <p>we have a brand new furry fiend (what typo?)</p>
        <p>and a moderate helping of fun times</p>
        
        <AnniversaryImage horizontal src="/3_year_anniversary/2021/IMG_20210418_171702.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2021/IMG_20210519_194845.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2021/IMG_20210526_182117.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2021/IMG_20210612_174419.jpg" position="left" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2021/IMG_20210629_142650.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2021/IMG_20210629_142653.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2021/IMG_20210629_175934.jpg" position="right" />
        <p>the greatest heist</p>
        <AnniversaryImage src="/3_year_anniversary/2021/IMG_20210630_090007.jpg" position="left" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2021/IMG_20210712_120414.jpg" position="right" />
        
        <p></p>
        <p>want to know what happens next?</p>
        <p>of course not,</p>
        <p>who wants those kinds of spoilers?!</p>
        <p>Happy Anniversary once again Lucy</p>
        <p>I love you with all my ❤️</p>
        <p>and I always will do</p>  
      </div>
    </div>
  )
}

export default ThreeYearAnniversary;