import { Table, UnstyledButton } from "@mantine/core";
import {
  IconArrowDown,
  IconArrowsVertical,
  IconArrowUp,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";

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
            <Table.Th>{row.title}</Table.Th>
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
      <Table>
        <Table.Caption>Bordered table</Table.Caption>
        {tableMeat}
      </Table>

      <h3>Striped</h3>
      <Table striped>
        <Table.Caption>Bordered table with horizontal stripes</Table.Caption>
        {tableMeat}
      </Table>

      <h3>Borderless</h3>
      <Table withColumnBorders={false} withTableBorder={false}>
        <Table.Caption>
          Borderless table: A borderless table can be useful when you want the
          information to feel more a part of the text it accompanies and
          extends.
        </Table.Caption>
        {tableMeat}
      </Table>

      <h3>Scrollable</h3>
      <div style={{ width: "50vw" }}>
        <Table.ScrollContainer minWidth={undefined}>
          <Table>
            <Table.Caption>Scrollable table</Table.Caption>
            {tableMeat}
          </Table>
        </Table.ScrollContainer>
      </div>

      <h3>Responsive Stacked</h3>
      <SampleTableMantineResponsive />

      <h3>Sortable</h3>
      <SampleTableMantineSorting />

      <h3>Sticky Header</h3>
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Caption>Sticky header table</Table.Caption>
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
                <Table.Th>{row.title}</Table.Th>
                <Table.Td>{row.description}</Table.Td>
                <Table.Td>{row.year}</Table.Td>
              </Table.Tr>
            ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

const SampleTableMantineSorting: React.FC = () => {
  const [sortBy, setSortBy] = useState("description");
  const [sortDir, setSortDir] = useState("DSC");

  const sortButton = (column: string) => {
    let Icon = IconArrowsVertical;
    if (column === sortBy && sortDir) {
      Icon = sortDir === "ASC" ? IconArrowUp : IconArrowDown;
    }
    return (
      <UnstyledButton
        className="usa-table__header__button"
        onClick={() => {
          if (column === sortBy) {
            setSortDir(sortDir === "DSC" ? "ASC" : "DSC");
          } else {
            setSortDir("DSC");
          }
          setSortBy(column);
        }}
      >
        <Icon size={12} stroke={1.75} color="black" className="usa-icon" />
      </UnstyledButton>
    );
  };

  const getAriaSort = (column: string) => {
    if (column === sortBy) {
      return sortDir === "ASC" ? "ascending" : "descending";
    }
    return undefined;
  };

  const dataSorted = useMemo(() => {
    const data = [...TABLE_DATA].sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "description":
          return a.description.localeCompare(b.description);
        case "year":
          return a.year - b.year;
      }
      return 1;
    });
    if (sortDir === "ASC") {
      return data.reverse();
    }
    return data;
  }, [sortBy, sortDir]);

  return (
    <Table>
      <Table.Caption>sortable table example</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th data-sortable aria-sort={getAriaSort("title")}>
            Document title
            {sortButton("title")}
          </Table.Th>
          <Table.Th data-sortable aria-sort={getAriaSort("description")}>
            Description
            {sortButton("description")}
          </Table.Th>
          <Table.Th data-sortable aria-sort={getAriaSort("year")}>
            Year
            {sortButton("year")}
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {dataSorted.map((row) => (
          <Table.Tr key={row.title}>
            <Table.Th data-sort-active={"title" === sortBy ? true : undefined}>
              {row.title}
            </Table.Th>
            <Table.Td
              data-sort-active={"description" === sortBy ? true : undefined}
            >
              {row.description}
            </Table.Td>
            <Table.Td data-sort-active={"year" === sortBy ? true : undefined}>
              {row.year}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

const SampleTableMantineResponsive: React.FC = () => {
  return (
    <div className="width-mobile">
      <Table className="usa-table--stacked" style={{ border: "none" }}>
        <Table.Caption>
          Stacked bordered table (when on a mobile-width screen)
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th scope="col">Document title</Table.Th>
            <Table.Th scope="col">Description</Table.Th>
            <Table.Th scope="col">Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {TABLE_DATA.map((row) => (
            <Table.Tr key={row.title}>
              <Table.Th data-label="Document title" scope="row">
                {row.title}
              </Table.Th>
              <Table.Td data-label="Description" scope="row">
                {row.description}
              </Table.Td>
              <Table.Td data-label="Year" scope="row">
                {row.year}
              </Table.Td>
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
              {TABLE_DATA.map((row) => (
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
                <th scope="row" role="rowheader" data-label="Document title">
                  {row.title}
                </th>
                <td data-label="Description">{row.description}</td>
                <td data-label="Year">{row.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <th
              data-sortable
              scope="col"
              role="columnheader"
              aria-sort="descending"
            >
              Description
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
              Year
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
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA.sort((a, b) =>
            a.description.localeCompare(b.description)
          ).map((row) => (
            <tr key={row.title}>
              <th scope="row" role="rowheader">
                {row.title}
              </th>
              <td data-sort-active>{row.description}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Sticky Header</h3>
      <table className="usa-table usa-table--sticky-header">
        <caption>Sticky header table</caption>
        <thead style={{ top: "3.75rem" }}>
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
