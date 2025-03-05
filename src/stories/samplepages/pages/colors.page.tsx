import {
  Text,
  Title,
  Table,
  ColorSwatch,
  useMantineTheme,
} from "@mantine/core";

export const ColorsPage = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Title order={2}>Colors</Title>
      <Table>
        <thead>
          <tr>
            <th rowSpan={2}>Color</th>
            <th colSpan={10}>Shade</th>
          </tr>
          <tr>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
              <th key={shade}>
                <Text ta="center">{shade}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {theme &&
            theme.colors &&
            Object.keys(theme.colors).map((color) => (
              <tr key={color}>
                <th>{color}</th>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => {
                  if (!theme || !theme.colors) {
                    return null;
                  }

                  const themeColor = theme.colors[color];

                  if (!themeColor) {
                    return null;
                  }

                  const colorHex = themeColor[shade];
                  return (
                    <td key={shade}>
                      <ColorSwatch
                        mx="auto"
                        color={colorHex ?? "transparent"}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};
