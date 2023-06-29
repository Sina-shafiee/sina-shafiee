import { ResponsiveImage } from '@/types/graphql';
import Link from 'next/link';
import { Image as DatoImage } from 'react-datocms/image';

type Props = {
  title: string;
  slug: string;
  image: ResponsiveImage;
};

const ProjectCard = ({ image, slug, title }: Props) => {
  return (
    <article className='overflow-hidden rounded shadow-project-card'>
      <Link href={`/projects/${slug}`}>
        <DatoImage data={image} />
        <section className='p-8'>
          <h3 className='text-[1.4rem] font-normal capitalize'>{title}</h3>
        </section>
      </Link>
    </article>
  );
};

export default ProjectCard;
