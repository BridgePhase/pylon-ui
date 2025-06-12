import { Box, Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const SampleModalMantine: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box>
      <Button onClick={open}>Show Modal</Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Are you sure you want to continue?"
        centered
        withCloseButton={false}
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

export const SampleModalUswds: React.FC = () => {
  return (
    <Box bg="dark.2" px="md">
      <div
        className="usa-modal"
        id="example-modal-1"
        aria-labelledby="modal-1-heading"
        aria-describedby="modal-1-description"
      >
        <div className="usa-modal__content">
          <div className="usa-modal__main">
            <h2 className="usa-modal__heading" id="modal-1-heading">
              Are you sure you want to continue?
            </h2>
            <div className="usa-prose">
              <p id="modal-1-description">
                You have unsaved changes that will be lost.
              </p>
            </div>
            <div className="usa-modal__footer">
              <ul className="usa-button-group">
                <li className="usa-button-group__item">
                  <button type="button" className="usa-button" data-close-modal>
                    Continue without saving
                  </button>
                </li>
                <li className="usa-button-group__item">
                  <button
                    type="button"
                    className="usa-button usa-button--unstyled padding-105 text-center"
                    data-close-modal
                  >
                    Go back
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button
            type="button"
            className="usa-button usa-modal__close"
            aria-label="Close this window"
            data-close-modal
          >
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#close"></use>
            </svg>
          </button>
        </div>
      </div>
    </Box>
  );
};
