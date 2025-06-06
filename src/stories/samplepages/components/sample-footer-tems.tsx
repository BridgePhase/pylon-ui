import { Anchor } from "@mantine/core";
import { PylonFooterItems } from "../../../widgets/app-shell/footer/footer-items";

export const SampleFooterItemsMantine: React.FC = () => {
  return (
    <PylonFooterItems
      items={[
        <Anchor href="tel:123-456-7890">(123) 456 - 7890</Anchor>,
        <Anchor href="mailto:thisnotfake@emailaddress.com">
          thisnotfake@emailaddress.com
        </Anchor>,
      ]}
    />
  );
};

export const SampleFooterItemsUswds: React.FC = () => {
  return (
    <address className="usa-footer__address">
      <div className="usa-footer__contact-info grid-row grid-gap">
        <div className="">
          <a href="tel:123-456-7890">(123) 456 - 7890</a>
        </div>
        <div className="">
          <a href="mailto:thisnotfake@emailaddress.com">
            thisnotfake@emailaddress.com
          </a>
        </div>
      </div>
    </address>
  );
};
