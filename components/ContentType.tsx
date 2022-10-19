import { Grid, View } from '@adobe/react-spectrum';

export default function ContentType({ leftColumn, rightColumn }: { leftColumn: number; rightColumn: number }) {
  return (
    <>
      <Grid
        areas={{
          base: ['left', 'right'],
          M: [`${leftColumn !== 0 && rightColumn !== 0 ? 'left right' : leftColumn === 0 ? 'right' : 'left'}`],
          L: [
            `${leftColumn !== 0 && rightColumn !== 0 ? 'left left right right' : leftColumn === 0 ? 'right' : 'left'}`,
          ],
        }}
        columns={
          leftColumn !== 0 && rightColumn !== 0
            ? {
                M: [`${leftColumn}fr`, `${rightColumn}fr`],
                L: [`${leftColumn}fr`, `${leftColumn}fr`, `${rightColumn}fr`, `${rightColumn}fr`],
              }
            : leftColumn === 0
            ? { L: [`${rightColumn}fr`] }
            : { L: [`${leftColumn}fr`] }
        }
        gap="size-100"
      >
        {leftColumn !== 0 ? <View backgroundColor="blue-600" height="size-300" gridArea="left" /> : undefined}
        {rightColumn !== 0 ? <View backgroundColor="purple-600" height="size-300" gridArea="right" /> : undefined}
      </Grid>
    </>
  );
}
