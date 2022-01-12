import { Meta } from '../components/Meta/Meta';
import { Typography } from '../components/Typography/Typography';

function Home() {
  return (
    <>
      <Meta title="Home" description="Lorem Ipsum Lorelem" />
      <Typography tagName="h1" color="primary" weight="bold" className="">
        Hello World
      </Typography>
    </>
  );
}

export { Home };
