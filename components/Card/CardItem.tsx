import Image from 'next/image';
import Link from 'next/link';

import styles from './Card.module.css';
import { CardItemProps } from './Card.types';

const CardItem = ({ project: { img, title, id } }: CardItemProps) => {
  return (
    <article className={styles.card} style={{ flexGrow: 1 }}>
      <Link href={`/projects/${id}`}>
        <Image
          src={img}
          alt={title}
          width={320}
          height={240}
          priority
          style={{
            backgroundSize: 'cover',
            width: '100%',
            height: 'auto'
          }}
          quality={100}
        />
        <section className={styles.cardBody}>
          <h4>{title}</h4>
        </section>
      </Link>
    </article>
  );
};

export default CardItem;
