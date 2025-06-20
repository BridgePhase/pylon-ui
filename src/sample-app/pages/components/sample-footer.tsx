import { Image, Stack, Text } from "@mantine/core";
import { PylonFooter } from "../../../widgets/app-shell/footer/footer";
import { PylonFooterHeading } from "../../../widgets/app-shell/footer/footer-heading";
import icon from "/pylon.png";

export const SampleFooterMantine: React.FC = () => {
  return (
    <Stack>
      <PylonFooter
        heading={<PylonFooterHeading text="Name of Agency" />}
        image={<Image src={icon} mah="5rem" />}
      />

      <PylonFooter
        heading={<PylonFooterHeading text="Name of Agency" />}
        image={<Image src={icon} mah="5rem" />}
        preFooter={
          <Text ta="center" fs="italic">
            We're the thing that explodes when there's too much friction in the
            air.
          </Text>
        }
      />
    </Stack>
  );
};

export const SampleFooterUswds: React.FC = () => {
  return (
    <Stack>
      <footer className="usa-footer usa-footer--big">
        <div className="usa-footer__primary-section">
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

      <footer className="usa-footer usa-footer--big">
        <div className="usa-footer__primary-section text-center text-italic">
          We're the thing that explodes when there's too much friction in the
          air.
        </div>
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
    </Stack>
  );
};
