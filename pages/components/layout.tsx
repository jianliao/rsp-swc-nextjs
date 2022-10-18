import { Content, Grid, Heading, View } from "@adobe/react-spectrum";
import CodeExample from "@components/CodeExample";

export default function LayoutPage() {
    return (
        <>
            <Heading level={1}>Layout</Heading>
            <Content>
                <CodeExample
                    title="Auto Focus"
                    rspCode={`N/A`}
                    rspChildren={
                        <Grid
                            areas={[
                                'header  header',
                                'sidebar content',
                                'footer  footer'
                            ]}
                            columns={['1fr', '3fr']}
                            rows={['size-1000', 'auto', 'size-1000']}
                            height="size-6000"
                            gap="size-100">
                            <View backgroundColor="celery-600" gridArea="header" />
                            <View backgroundColor="blue-600" gridArea="sidebar" />
                            <View backgroundColor="purple-600" gridArea="content" />
                            <View backgroundColor="magenta-600" gridArea="footer" />
                        </Grid>
                    }
                    swcCode={`N/A`}
                    swcChildren={<></>}
                />
            </Content>
        </>
    )
}