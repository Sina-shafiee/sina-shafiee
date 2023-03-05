import styles from './Bio.module.css';
const Bio = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.paragraph}>
        I&apos;m <strong>Sina</strong> a self-taught React & Nextjs developer
        who loves to build things.
      </p>
      <p className={styles.paragraph}>
        You can follow me on{' '}
        <strong>
          <a href='https://www.instagram.com/sina_shaf1ee/'>Instagram</a>
        </strong>{' '}
        where I share random ideas or memes.
      </p>
      <p>
        Or you can send me an email via{' '}
        <strong>
          <a href='mailto:alisinashafieezada@gmail.com'>
            alisinashafieezada@gmail.com
          </a>
        </strong>
        , I would be happy to connect.
      </p>
    </section>
  );
};

export default Bio;
