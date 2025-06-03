import { Image } from "@mantine/core";
import { PylonAppShellFooter } from "../../../widgets/app-shell/footer/app-shell-footer";
import { AppShellFooterHeading } from "../../../widgets/app-shell/footer/app-shell-footer-heading";
import icon from "/pylon.png";

export const SampleFooterMantine: React.FC = () => {
  return (
    <PylonAppShellFooter
      heading={<AppShellFooterHeading text="Name of Agency" />}
      image={<Image src={icon} mah="5rem" />}
    />
  );
};

export const SampleFooterUswds: React.FC = () => {
  return (
    <footer className="usa-footer usa-footer--big">
      <div className="usa-footer__secondary-section">
        <div className="grid-row grid-gap">
          <div
            className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2"
            data-testid="footerLogo"
          >
            <div className="mobile-lg:grid-col-auto">
              {
                <img
                  className="usa-footer__logo-img"
                  alt="img alt text"
                  src={icon}
                />
              }
            </div>
            <div className="mobile-lg:grid-col-auto">
              <p className="usa-footer__logo-heading">Name of Agency</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
