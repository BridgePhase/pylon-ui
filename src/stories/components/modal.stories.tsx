import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Button, Group, Modal, Text, useModalsStack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Modal` maps onto Mantine's `Modal`, with the modal heading coming from
 * the `title` prop. USWDS's `ModalRef` — the handle used to open and close a
 * modal from elsewhere — has no direct equivalent; use `useDisclosure` for a
 * single modal, or `useModalsStack` when several modals can open one another.
 */
const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "USWDS Components/Modal",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Modal>;

const ModalDemo: React.FC<{ withCloseButton?: boolean }> = ({
  withCloseButton = false,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box>
      <Button onClick={open}>Show modal</Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Are you sure you want to continue?"
        centered
        withCloseButton={withCloseButton}
      >
        <Text>You have unsaved changes that will be lost.</Text>
        <Group mt="xl">
          <Button onClick={close}>Continue without saving</Button>
          <Button onClick={close} unstyled>
            Go back
          </Button>
        </Group>
      </Modal>
    </Box>
  );
};

export const Default: Story = {
  render: () => <ModalDemo />,
};

/** USWDS's forced-action modal omits the close button. */
export const WithCloseButton: Story = {
  render: () => <ModalDemo withCloseButton />,
};

/**
 * `useModalsStack` is the closest thing to USWDS's `ModalRef`: it hands back
 * `open`, `close`, and `register` for each named modal, so one modal can open
 * another and the stack unwinds in order.
 */
const ModalsStackDemo: React.FC = () => {
  const stack = useModalsStack(["confirm-delete", "confirm-again"]);
  return (
    <Box>
      <Button onClick={() => stack.open("confirm-delete")}>
        Delete this record
      </Button>
      <Modal.Stack>
        <Modal
          {...stack.register("confirm-delete")}
          title="Delete this record?"
          centered
        >
          <Text>This action cannot be undone.</Text>
          <Group mt="xl">
            <Button
              variant="secondary"
              onClick={() => stack.open("confirm-again")}
            >
              Delete
            </Button>
            <Button unstyled onClick={() => stack.close("confirm-delete")}>
              Cancel
            </Button>
          </Group>
        </Modal>
        <Modal
          {...stack.register("confirm-again")}
          title="Really delete this record?"
          centered
        >
          <Text>Last chance — the record and its history will be removed.</Text>
          <Group mt="xl">
            <Button variant="secondary" onClick={() => stack.closeAll()}>
              Yes, delete it
            </Button>
            <Button unstyled onClick={() => stack.close("confirm-again")}>
              Go back
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>
    </Box>
  );
};

export const StackedModals: Story = {
  render: () => <ModalsStackDemo />,
};
