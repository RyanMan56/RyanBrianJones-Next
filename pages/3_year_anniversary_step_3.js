import Link from 'next/link';
import AnniversaryImage from '../components/3_year_anniversary/AnniversaryImage';
import styles from '../styles/3_year_anniverary/3YearAnniversaryStep3.module.scss';

function ThreeYearAnniversary() {

  return (
    <div className={styles.background}>
        <h1>2 0 1 9</h1>
      <div className={styles.widthWrapper}>
        <p>Not the best start to a year</p>
        <p>but I suppose it wasn't the worst</p>
        <p>🙄</p>
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190108_210841.jpg" position="left" />

        <p>well it quickly improved anyway</p>
        <p>with the help of some great food</p>
        <p>and some great company</p>
        <AnniversaryImage horizontal src="/3_year_anniversary/2019/IMG_20190113_133954.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190124_181337.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190316_172812.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190316_172814.jpg" position="left" />

        <p>oh wow,</p>
        <p>what's that infront of us?</p>
        <p>yet another holiday!</p>
        <p>(lucky us 🥖🍷)</p>
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190425_143941.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190425_143954.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2019/IMG_20190425_162221.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190425_162955.jpg" position="right" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2019/IMG_20190425_163226.jpg" position="left" />
        <AnniversaryImage horizontal src="/3_year_anniversary/2019/IMG_20190426_120544.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190426_141650.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190426_185207.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190427_220523.jpg" position="left" />

        <p>on the horizon</p>
        <p>yet more special memories</p>
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190509_211025.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190519_201750.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190531_213722.jpg" position="right" />

        <p>woah, our very own flat!</p>
        <AnniversaryImage horizontal src="/3_year_anniversary/2019/IMG_20190714_174314.jpg" position="left" />
        
        <p>and a very special graduation!</p>
        <AnniversaryImage horizontal src="/3_year_anniversary/2019/IMG_20190719_155555.jpg" position="right" />

        <p>here's a few more nice mems!</p>
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190803_132144.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190810_184052.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20190908_222341.jpg" position="left" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20191008_085014.jpg" position="right" />
        <AnniversaryImage src="/3_year_anniversary/2019/IMG_20191031_215706.jpg" position="left" />

        <p>want to stay here a little longer?</p>
        <p>I wouldn't blame you</p>
        <p>take all the time you want</p>
        <p>I'll be waiting when you're ready</p>
        <Link href="/3_year_anniversary_step_4">
          <div className={styles.button}>
            <p>TO 2020</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ThreeYearAnniversary;