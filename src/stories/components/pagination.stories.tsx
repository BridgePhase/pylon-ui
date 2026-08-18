import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "@mantine/core";
import { useState } from "react";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Pagination` maps onto Mantine's `Pagination`. The theme renders the
 * root as `usa-pagination` and each control as an unstyled USWDS button.
 */
const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "USWDS Components/Pagination",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    total: 20,
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

/** Middle of a long range — both overflow indicators are visible. */
export const Default: Story = {
  args: { value: 10 },
};

export const FirstPage: Story = {
  args: { value: 1 },
};

export const LastPage: Story = {
  args: { value: 20 },
};

/** Few enough pages to list them all. */
export const FewPages: Story = {
  args: { total: 5, value: 2 },
};

const PaginationDemo: React.FC = () => {
  const [page, setPage] = useState(1);
  return <Pagination total={20} value={page} onChange={setPage} />;
};

export const Interactive: Story = {
  render: () => <PaginationDemo />,
};
