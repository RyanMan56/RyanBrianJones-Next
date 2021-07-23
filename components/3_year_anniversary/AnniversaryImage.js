import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/3_year_anniverary/AnniversaryImage.module.scss';

function AnniversaryImage({src, horizontal, position}) {
  return (
    <Link href={src}>
      <div className={position === 'left' ? styles.imgLeft : styles.imgRight}>
        <Image src={src} width={horizontal ? 200 / 0.75 : 200} height={horizontal ? 200 : 200/0.75} />
      </div>
    </Link>
  )
}

export default AnniversaryImage;