import { Content, Heading, ProgressCircle } from "@adobe/react-spectrum";
import CodeExample from "@components/CodeExample";
import { SpProgressCircle } from "@swc-nextjs/progress-circle";

export default function ProgressCirclePage() {
  return (
    <>
      <Heading level={1}>Radio Button</Heading>
      <Content>
        <CodeExample
          title="Base case"
          rspCode={`<ProgressCircle aria-label="Loading…" value={50} />`}
          rspChildren={<ProgressCircle aria-label="Loading…" value={50} />}
          swcCode={`<SpProgressCircle label="Loading…" progress={50} />`}
          swcChildren={<SpProgressCircle label="Loading…" progress={50} />}
        />
        <CodeExample
          title="Indeterminate"
          rspCode={`<ProgressCircle aria-label="Loading…" size='L' isIndeterminate />`}
          rspChildren={<ProgressCircle aria-label="Loading…" size='L' isIndeterminate />}
          swcCode={`<SpProgressCircle label="Loading…" size="l" indeterminate />`}
          swcChildren={<SpProgressCircle label="Loading…" size="l" indeterminate />}
        />
      </Content>
    </>);
}