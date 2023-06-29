import { Image as DatocmsImage } from 'react-datocms/image';
import {
  StructuredText as DotaStructuredText,
  RenderBlockContext
} from 'react-datocms';
import { Record } from 'datocms-structured-text-utils';

import { ResponsiveImage } from '@/types/graphql';

type Props = {
  data: any;
};

const renderBlock = ({ record }: RenderBlockContext<Record>) => {
  switch (record.__typename) {
    case 'ImageBlockRecord':
      const responsiveImage = (
        record.image as { responsiveImage: ResponsiveImage }
      ).responsiveImage;
      return <DatocmsImage data={responsiveImage} />;

    default:
      return <></>;
  }
};

const StructuredText = ({ data }: Props) => {
  return <DotaStructuredText renderBlock={renderBlock} data={data} />;
};

export default StructuredText;
