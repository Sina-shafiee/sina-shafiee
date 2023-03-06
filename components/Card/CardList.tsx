import CardItem from './CardItem';

import styles from './Card.module.css';
import { CardListProps } from './Card.types';

const CardList = ({ data }: CardListProps) => {
  return (
    <section
      className={styles.cardsWrapper}
    >
      {data.map((project) => {
        return <CardItem key={project.id} project={project} />;
      })}
    </section>
  );
};

export default CardList;
