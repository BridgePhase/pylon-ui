import { Group, Title } from "@mantine/core";
import { ReactNode } from "react";

export const AppShellHeaderTitle: React.FC<{
  longText: string;
  shortText: string;
  id?: string;
  logo: ReactNode;
}> = ({ longText, shortText, id, logo }) => {
  return (
    <Group className="usa-logo site-logo" m={0} id={id} gap={0} wrap="nowrap">
      {logo}
      <em className="usa-logo__text site-logo__text">
        <a href="/" title={`${longText} Home`}>
          <Title
            component="span"
            order={1}
            className="site-title--short font-sans-sm"
            hiddenFrom="sm"
          >
            {shortText}
          </Title>
          <Title
            component="span"
            order={1}
            className="site-title--long font-sans-sm"
            fz="1.46rem"
            visibleFrom="sm"
          >
            {longText}
          </Title>
        </a>
      </em>
    </Group>
  );
};
