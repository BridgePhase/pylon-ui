import { Center, Group, Table, UnstyledButton } from "@mantine/core";
import { IconArrowsVertical } from "@tabler/icons-react";

const TABLE_DATA = [
  {
    title: "Declaration of Independence",
    description:
      "Statement adopted by the Continental Congress declaring independence from the British Empire.",
    year: 1776,
  },
  {
    title: "Bill of Rights",
    description:
      "The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.",
    year: 1791,
  },
  {
    title: "Declaration of Sentiments",
    description:
      "A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.",
    year: 1848,
  },
  {
    title: "Emancipation Proclamation",
    description:
      "An executive order granting freedom to slaves in designated southern states.",
    year: 1863,
  },
];

export const SampleTableMantine: React.FC = () => {
  const tableMeat = (
    <>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Document title</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Year</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {TABLE_DATA.map((row) => (
          <Table.Tr key={row.title}>
            <Table.Td>{row.title}</Table.Td>
            <Table.Td>{row.description}</Table.Td>
            <Table.Td>{row.year}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </>
  );
  return (
    <div>
      <h3>Standard</h3>
      <Table captionSide="top">
        <Table.Caption>Bordered table</Table.Caption>
        {tableMeat}
      </Table>

      <h3>Striped</h3>
      <Table captionSide="top" striped>
        <Table.Caption>Striped table</Table.Caption>
        {tableMeat}
      </Table>

      <h3>Borderless</h3>

      <h3>Scrollable</h3>
      <div style={{ width: "50vw" }}>
        <Table.ScrollContainer minWidth={"100vw"} type="native">
          <Table captionSide="top" striped>
            <Table.Caption>Scrollable table</Table.Caption>
            {tableMeat}
          </Table>
        </Table.ScrollContainer>
      </div>

      <h3>Responsive</h3>
      <div style={{ width: "20rem" }}>
        <Table captionSide="top">
          <Table.Caption>Responsive table</Table.Caption>
          <Table.Thead>
            <Table.Tr style={{ display: "none" }}>
              <Table.Th>Document title</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Year</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {TABLE_DATA.map((row) => (
              <Table.Tr key={row.title}>
                <Table.Td
                  data-label="Document title"
                  style={{ width: "100%", display: "block" }}
                >
                  {row.title}
                </Table.Td>
                <Table.Td
                  data-label="Description"
                  style={{ width: "100%", display: "block" }}
                >
                  {row.description}
                </Table.Td>
                <Table.Td
                  data-label="Year"
                  style={{ width: "100%", display: "block" }}
                >
                  {row.year}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <h3>Sortable</h3>
      <Table captionSide="top">
        <Table.Caption>Sortable table</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Group justify="space-between">
                Document title
                <UnstyledButton onClick={() => null}>
                  <Center>
                    <IconArrowsVertical size={16} stroke={2} />
                  </Center>
                </UnstyledButton>
              </Group>
            </Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {TABLE_DATA.map((row) => (
            <Table.Tr key={row.title}>
              <Table.Td>{row.title}</Table.Td>
              <Table.Td>{row.description}</Table.Td>
              <Table.Td>{row.year}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <h3>Sticky Header</h3>
      <Table captionSide="top" stickyHeader stickyHeaderOffset={60}>
        <Table.Caption>Sticky table</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Document title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {TABLE_DATA.map((row) => [
            row,
            { ...row, title: `${row.title}2` },
            { ...row, title: `${row.title}3` },
            { ...row, title: `${row.title}4` },
            { ...row, title: `${row.title}5` },
            { ...row, title: `${row.title}6` },
            { ...row, title: `${row.title}7` },
          ])
            .flat()
            .map((row) => (
              <Table.Tr key={row.title}>
                <Table.Td>{row.title}</Table.Td>
                <Table.Td>{row.description}</Table.Td>
                <Table.Td>{row.year}</Table.Td>
              </Table.Tr>
            ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export const SampleTableUswds: React.FC = () => {
  const tableMeat = (
    <>
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        {TABLE_DATA.map((row) => (
          <tr key={row.title}>
            <th scope="row">{row.title}</th>
            <td>{row.description}</td>
            <td>{row.year}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
  return (
    <div>
      <h3>Standard</h3>
      <table className="usa-table">
        <caption>Bordered table</caption>
        {tableMeat}
      </table>

      <h3>Striped</h3>
      <table className="usa-table usa-table--striped">
        <caption>Bordered table with horizontal stripes</caption>
        {tableMeat}
      </table>

      <h3>Borderless</h3>
      <table className="usa-table usa-table--borderless">
        <caption>
          Borderless table: A borderless table can be useful when you want the
          information to feel more a part of the text it accompanies and
          extends.
        </caption>
        {tableMeat}
      </table>

      <h3>Scrollable</h3>
      <div style={{ width: "50vw", wordBreak: "normal" }}>
        <div className="usa-table-container--scrollable" tabIndex={0}>
          <table className="usa-table">
            <caption>Scrollable table</caption>
            <thead>
              <tr>
                <th scope="col">Document title</th>
                <th scope="col">Description</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((row) => [
                row,
                { ...row, title: `${row.title}2` },
                { ...row, title: `${row.title}3` },
                { ...row, title: `${row.title}4` },
                { ...row, title: `${row.title}5` },
              ])
                .flat()
                .map((row) => (
                  <tr key={row.title}>
                    <th scope="row">{row.title}</th>
                    <td>{row.description}</td>
                    <td>{row.year}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <h3>Responsive Stacked</h3>
      <div className="table-example-container">
        <div className="width-mobile">
          <table className="usa-table usa-table--stacked">
            <caption>
              Stacked bordered table (when on a mobile-width screen)
            </caption>
            <thead>
              <tr>
                <th scope="col" role="columnheader">
                  Document title
                </th>
                <th scope="col" role="columnheader">
                  Description
                </th>
                <th scope="col" role="columnheader">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((row) => (
                <tr key={row.title}>
                  <th scope="row" role="rowheader">
                    {row.title}
                  </th>
                  <td>{row.description}</td>
                  <td>{row.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h3>Sortable</h3>
      <table className="usa-table">
        <caption>sortable table example</caption>
        <thead>
          <tr>
            <th data-sortable scope="col" role="columnheader">
              Document title
              <button
                tabIndex={0}
                className="usa-table__header__button"
                title="Click to sort by Alphabetical in ascending order."
              >
                <svg
                  className="usa-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g className="descending" fill="transparent">
                    <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                  </g>
                  <g className="ascending" fill="transparent">
                    <path
                      transform="rotate(180, 12, 12)"
                      d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"
                    ></path>
                  </g>
                  <g className="unsorted" fill="transparent">
                    <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"></polygon>
                  </g>
                </svg>
              </button>
            </th>
            <th data-sortable scope="col" role="columnheader">
              Description
            </th>
            <th data-sortable scope="col" role="columnheader">
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA.map((row) => (
            <tr key={row.title}>
              <th scope="row" role="rowheader">
                {row.title}
              </th>
              <td>{row.description}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Sticky Header</h3>
      <table className="usa-table usa-table--sticky-header">
        <caption>Scrollable table</caption>
        <thead>
          <tr>
            <th scope="col">Document title</th>
            <th scope="col">Description</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA.map((row) => [
            row,
            { ...row, title: `${row.title}2` },
            { ...row, title: `${row.title}3` },
            { ...row, title: `${row.title}4` },
            { ...row, title: `${row.title}5` },
            { ...row, title: `${row.title}6` },
            { ...row, title: `${row.title}7` },
          ])
            .flat()
            .map((row) => (
              <tr key={row.title}>
                <th scope="row">{row.title}</th>
                <td>{row.description}</td>
                <td>{row.year}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
