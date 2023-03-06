import Image from 'next/image';
import styles from './ProjectBio.module.css';
import { ProjectBioProps } from './ProjectBio.types';

const ProjectBio = (props: ProjectBioProps) => {
  return (
    <section>
      <section className={styles.wrapper}>
        <Image
          src='/project-icon-placeholder.svg'
          width={120}
          height={120}
          alt='avatar'
          className={styles.avatar}
        />
        <section className={styles.title}>
          <h2>{props.title}</h2>
          <a target='_blank' referrerPolicy='no-referrer' href={props.preview}>
            {props.preview}
          </a>
        </section>
      </section>
      <p className={styles.description}>{props.description}</p>
      <section className={styles.imageWrapper}>
        <Image
          src={props.image}
          alt={props.title}
          title={props.title}
          width={1000}
          height={800}
          style={{
            backgroundSize: 'cover',
            width: '100%',
            height: 'auto'
          }}
        />
      </section>
    </section>
  );
};

export default ProjectBio;
