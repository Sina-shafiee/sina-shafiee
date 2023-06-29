import { StructuredText } from '@/components/ui/StructuredText';

import { homePageDetailSectionQuery } from '@/graphql/queries';
import { HomeDetailDataQuery } from '@/types/graphql';
import { performRequest } from '@/lib/datocms';

const Bio = async () => {
  const data = await performRequest<HomeDetailDataQuery>({
    query: homePageDetailSectionQuery
  });

  if (!data) {
    throw new Error('Bio - Fetch Failed!');
  }
  const { homePage } = data;
  return (
    <section className='dast-content'>
      <StructuredText data={homePage!.description} />
    </section>
  );
};

export default Bio;
