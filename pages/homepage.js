import styles from '../styles/Homepage.module.scss';

const Homepage = ({  }) => {
  return (
    <div className={styles.container}>
      <div className="fixed-bg"></div>
      <div className={styles.textWrapper}>
        <div>
          <div className={styles.titleWrapper}>
            <h1>Ryan Brian Jones</h1>
            <span className={styles.extraTitle}> Freelancer</span>
            <span>_</span>
          </div>
          {/* <p>Full-stack web developer</p> */}
          <p>Hi, I'm Ryan. A full-stack developer based in Liverpool</p>
          <p>I make web apps and mobile apps, and host them serverlessly,</p>
          <p>ensuring they're reliable and cheap to run</p>
          <div className={styles.buttonWrapper}>
            <a className={styles.buttonPrimary}>Contact me</a>
            <a>My work</a>
          </div>
        </div>
        <img src="/logo.png" width="550" />
      </div>
    </div>
  );
}

export default Homepage;