import { HeroProps } from './Hero.types';
import styles from './Hero.module.css';

const Hero = ({ name, title }: HeroProps) => {
  const [firsName, lastName] = name.split(' ');
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>
        <strong>{firsName}</strong> {lastName}
      </h1>
      <h4 className={styles.title}>{title}</h4>
    </section>
  );
};

export default Hero;
