import styles from '../styles/Navbar.module.scss';

const Navbar = ({  }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src='/logo.png' width='60' />
      </div>
      <div className={styles.navIcons}>
        <img src='/home.png' />
        <img src='/about.png' />
        <img src='/my-work.png' />
        <img src='/contact.png' />
        <img src='/blog.png' />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;