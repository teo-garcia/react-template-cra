import './Message.scss';
import { MessageProps } from '../../tools/types';
import { Typography } from '../Typography/Typography';

function Message(props: MessageProps) {
  const { brandName, mainContent, secondaryContent } = props;

  return (
    <section className="message">
      <Typography className="message__brand" tagName="h1" weight="bold">
        {brandName}
      </Typography>
      <Typography className="message__content" color="neutral">
        {mainContent}
      </Typography>
      <Typography className="message__subcontent">
        {secondaryContent}
      </Typography>
    </section>
  );
}

export { Message };
