import { toNextMetadata } from 'react-datocms/seo';

import { Bio } from '@/components/domains/home';

import { performRequest } from '@/lib/datocms';
import { HomeDataQuery } from '@/types/graphql';
import { homePageQuery } from '@/graphql/queries';

const getHomeData = () => {
  return performRequest<HomeDataQuery>({
    query: homePageQuery
  });
};

export const generateMetadata = async () => {
  const { site, home } = await getHomeData();
  return toNextMetadata([...(home ? home.seo : []), ...site.favIcon]);
};

const Home = async () => {
  return (
    <main>
      <Bio />
    </main>
  );
};
export default Home;
