import { Group, Title } from "@mantine/core";
import { ReactNode } from "react";

export const HeaderTitle: React.FC<{
  longText: string;
  shortText: string;
  id?: string;
  logo?: ReactNode;
  dark?: boolean;
}> = ({ longText, shortText, id, logo, dark = false }) => {
  return (
    <div className="usa-navbar">
      <Group
        className="usa-logo site-logo"
        id={id}
        gap={0}
        wrap="nowrap"
        m={0}
        mih="70px"
      >
        {logo}
        <em className="usa-logo__text site-logo__text">
          <a href="/" title={`${longText} Home`}>
            <Title
              component="span"
              order={1}
              className="site-title--short font-sans-sm"
              hiddenFrom="sm"
              m={0}
              lh={1.1}
              c={dark ? "white" : "black"}
            >
              {shortText}
            </Title>
            <Title
              component="span"
              order={1}
              className="site-title--long font-sans-sm"
              fz="1.46rem"
              visibleFrom="sm"
              m={0}
              lh={1.1}
              c={dark ? "white" : "black"}
            >
              {longText}
            </Title>
          </a>
        </em>
      </Group>
    </div>
  );
};
