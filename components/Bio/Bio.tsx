import styles from './Bio.module.css';
const Bio = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.paragraph}>
        I&apos;m <strong>Sina</strong> a self-taught <strong>React</strong> &{' '}
        <strong>Nextjs</strong> developer who loves to build things.
      </p>
      <p className={styles.paragraph}>
        Proficient in developing responsive websites using{' '}
        <strong>Material UI,</strong> <strong>Tailwind Css</strong> and{' '}
        <strong>Styled-Components</strong>..
      </p>
      <p className={styles.paragraph}>
        You can follow me on{' '}
        <strong>
          <a href='https://www.instagram.com/sina_shaf1ee/'>Instagram</a>
        </strong>{' '}
        where I share random ideas or memes.
      </p>
      <p className={styles.paragraph}>
        Or you can send me an email via{' '}
        <strong>
          <a href='mailto:sinashafiee@hotmail.com'>sinashafiee@hotmail.com</a>
        </strong>
        , I would be happy to connect.
      </p>
    </section>
  );
};

export default Bio;
