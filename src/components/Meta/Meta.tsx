import { Helmet } from 'react-helmet';
import { MetaProps } from '../../tools/types';

function Meta(props: MetaProps) {
  const { title, description } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export { Meta };
