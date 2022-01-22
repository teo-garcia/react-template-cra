import { Message } from '../components/Message/Message';
import { Meta } from '../components/Meta/Meta';
import { SubscribeForm } from '../components/SubscribeForm/SubscribeForm';
import dashboardImage from '../assets/dashboard.png';

function Home() {
  return (
    <>
      <Meta title="Ping | Home" description="Lorem Ipsum Lorelem" />
      <Message
        brandName="PING"
        mainContent="We are launching soon!"
        secondaryContent="Subscribe and get notified"
      />
      <SubscribeForm
        name="email"
        label="Your email address:"
        onSubmit={(foo) => {
          console.log('foo');
        }}
      />
      <img src={dashboardImage} alt="Ping dashboard preview" />
    </>
  );
}

export { Home };
