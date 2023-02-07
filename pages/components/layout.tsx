import { Content, Heading } from '@adobe/react-spectrum';
import ContentType from '@components/ContentType';
import { SpDivider } from '@swc-next/divider';

export default function LayoutPage() {
  return (
    <>
      <Heading level={1}>Layout</Heading>
      <Content>
        {Array(13)
          .fill(null)
          .map((v, i) => (
            <>
              <Heading level={2}>{`${i} : ${12 - i}`}</Heading>
              <ContentType leftColumn={i} rightColumn={12 - i} />
            </>
          ))}
      </Content>
    </>
  );
}
