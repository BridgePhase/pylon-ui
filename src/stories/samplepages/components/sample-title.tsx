import { Image } from "@mantine/core";
import { AppShellHeaderTitle } from "../../../widgets/app-shell/header/app-shell-header-title";

export const SampleTitleMantine: React.FC = () => {
  return (
    <AppShellHeaderTitle
      shortText="USWDS"
      longText="U.S. Web Design System (USWDS)"
      logo={<Image src="/pylon.png" w={40} fit="contain" />}
    />
  );
};

export const SampleTitleUswds: React.FC = () => {
  return (
    <div
      className="usa-logo site-logo display-flex flex-align-center margin-0"
      id="logo"
    >
      <img src="/pylon.png" width="40" style={{ display: "inline" }} />
      <em className="usa-logo__text site-logo__text">
        <a href="/" title="U.S. Web Design System (USWDS) Home">
          <span className="site-title--long">
            U.S. Web Design System (USWDS)
          </span>
        </a>
      </em>
    </div>
  );
};
