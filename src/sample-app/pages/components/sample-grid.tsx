import { Grid } from "@mantine/core";

const GRID_CELL_STYLE = {
  border: "1px solid",
  padding: "1rem",
  backgroundColor: "rgb(225, 231, 241)",
};

const GRID_CELL = <div style={GRID_CELL_STYLE}>Content</div>;

export const SampleGridMantine: React.FC = () => {
  return (
    <Grid columns={3}>
      <Grid.Col>{GRID_CELL}</Grid.Col>
      <Grid.Col>{GRID_CELL}</Grid.Col>
      <Grid.Col>{GRID_CELL}</Grid.Col>
    </Grid>
  );
};

export const SampleGridUswds: React.FC = () => {
  return (
    <div data-testid="gridContainer" className="grid-container">
      <div className="grid-row" data-testid="grid">
        <div className="tablet:grid-col" data-testid="grid">
          {GRID_CELL}
        </div>
        <div className="tablet:grid-col" data-testid="grid">
          {GRID_CELL}
        </div>
        <div className="tablet:grid-col" data-testid="grid">
          {GRID_CELL}
        </div>
      </div>
    </div>
  );
};
