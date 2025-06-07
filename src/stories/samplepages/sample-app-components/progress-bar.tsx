import { Progress, Tooltip } from "@mantine/core";

export const ProgressBar = ({
  count,
  total,
}: {
  count: number;
  total: number;
}) => {
  return (
    <Tooltip label={`${count} of ${total} available`}>
      <Progress.Root size="xl" flex="1 0" bg="#414142">
        <Progress.Section
          aria-label={`${count} of ${total}`}
          value={(100 * count) / total}
          color="#AF3036"
          animated={count !== total}
        >
          <Progress.Label>
            {count} of {total}
          </Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Tooltip>
  );
};
