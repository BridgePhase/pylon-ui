import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Table, UnstyledButton } from "@mantine/core";
import {
  IconArrowDown,
  IconArrowUp,
  IconArrowsVertical,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Table` maps onto Mantine's `Table`. The theme translates Mantine props
 * into USWDS modifiers: `striped` → `usa-table--striped`,
 * `withTableBorder={false}` → `usa-table--borderless`, `stickyHeader` →
 * `usa-table--sticky-header`, and `verticalSpacing="stacked"` →
 * `usa-table--stacked`.
 */
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

const TABLE_ROWS = (
  <>
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
          <Table.Th scope="row">{row.title}</Table.Th>
          <Table.Td>{row.description}</Table.Td>
          <Table.Td>{row.year}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  </>
);

const meta: Meta<typeof Table> = {
  component: Table,
  title: "USWDS Components/Table",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <Table.Caption>Bordered table</Table.Caption>
      {TABLE_ROWS}
    </Table>
  ),
};

export const Striped: Story = {
  args: { striped: true },
  render: (args) => (
    <Table {...args}>
      <Table.Caption>Bordered table with horizontal stripes</Table.Caption>
      {TABLE_ROWS}
    </Table>
  ),
};

/** Borderless tables read as part of the surrounding prose. */
export const Borderless: Story = {
  args: { withTableBorder: false, withColumnBorders: false },
  render: (args) => (
    <Table {...args}>
      <Table.Caption>
        Borderless table: useful when you want the information to feel more a
        part of the text it accompanies and extends.
      </Table.Caption>
      {TABLE_ROWS}
    </Table>
  ),
};

/** `Table.ScrollContainer` adds USWDS's scrollable wrapper and keyboard focus. */
export const Scrollable: Story = {
  render: (args) => (
    <Box w="30rem">
      <Table.ScrollContainer minWidth={undefined}>
        <Table {...args}>
          <Table.Caption>Scrollable table</Table.Caption>
          {TABLE_ROWS}
        </Table>
      </Table.ScrollContainer>
    </Box>
  ),
};

/**
 * `verticalSpacing="stacked"` produces `usa-table--stacked`, which stacks each
 * row into a card at mobile width. Each cell needs a `data-label` so the stacked
 * form keeps its column heading.
 */
export const StackedOnMobile: Story = {
  render: () => (
    <Box className="width-mobile">
      <Table verticalSpacing="stacked">
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
              <Table.Td data-label="Description">{row.description}</Table.Td>
              <Table.Td data-label="Year">{row.year}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  ),
};

export const StickyHeader: Story = {
  args: { stickyHeader: true, stickyHeaderOffset: 0 },
  render: (args) => (
    <Box h="15rem" style={{ overflowY: "auto" }}>
      <Table {...args}>
        <Table.Caption>Sticky header table</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th scope="col">Document title</Table.Th>
            <Table.Th scope="col">Description</Table.Th>
            <Table.Th scope="col">Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {TABLE_DATA.flatMap((row) =>
            [1, 2, 3, 4].map((copy) => ({
              ...row,
              title: copy === 1 ? row.title : `${row.title} (${copy})`,
            })),
          ).map((row) => (
            <Table.Tr key={row.title}>
              <Table.Th scope="row">{row.title}</Table.Th>
              <Table.Td>{row.description}</Table.Td>
              <Table.Td>{row.year}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  ),
};

type SortColumn = "title" | "description" | "year";

/**
 * USWDS's sortable table is markup plus behavior: `data-sortable` and `aria-sort`
 * on the header, `data-sort-active` on the sorted column's cells, and a button
 * carrying `usa-table__header__button`. Mantine has no sorting built in, so the
 * component below supplies it.
 */
const SortableTableDemo: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortColumn>("year");
  const [ascending, setAscending] = useState(true);

  const sorted = useMemo(() => {
    const rows = [...TABLE_DATA].sort((a, b) =>
      sortBy === "year" ? a.year - b.year : a[sortBy].localeCompare(b[sortBy]),
    );
    return ascending ? rows : rows.reverse();
  }, [sortBy, ascending]);

  const sortButton = (column: SortColumn) => {
    let Icon = IconArrowsVertical;
    if (column === sortBy) {
      Icon = ascending ? IconArrowUp : IconArrowDown;
    }
    return (
      <UnstyledButton
        className="usa-table__header__button"
        aria-label={`Sort by ${column}`}
        onClick={() => {
          setAscending(column === sortBy ? !ascending : true);
          setSortBy(column);
        }}
      >
        <Icon size={12} stroke={1.75} color="black" className="usa-icon" />
      </UnstyledButton>
    );
  };

  const ariaSort = (column: SortColumn) => {
    if (column !== sortBy) return undefined;
    return ascending ? "ascending" : "descending";
  };

  const columns: { key: SortColumn; label: string }[] = [
    { key: "title", label: "Document title" },
    { key: "description", label: "Description" },
    { key: "year", label: "Year" },
  ];

  return (
    <Table>
      <Table.Caption>Sortable table</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          {columns.map((column) => (
            <Table.Th
              key={column.key}
              scope="col"
              data-sortable
              aria-sort={ariaSort(column.key)}
            >
              {column.label}
              {sortButton(column.key)}
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {sorted.map((row) => (
          <Table.Tr key={row.title}>
            <Table.Th
              scope="row"
              data-sort-active={sortBy === "title" ? true : undefined}
            >
              {row.title}
            </Table.Th>
            <Table.Td
              data-sort-active={sortBy === "description" ? true : undefined}
            >
              {row.description}
            </Table.Td>
            <Table.Td data-sort-active={sortBy === "year" ? true : undefined}>
              {row.year}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export const Sortable: Story = {
  render: () => <SortableTableDemo />,
};
