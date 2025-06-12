import { Alert, Box } from "@mantine/core";
import {
  UswdsAlertVariants,
  UswdsContexts,
} from "../../../themes/uswds-constants";

const ALERT_TEXT = (
  <>
    Lorem ipsum dolor sit amet,&nbsp;
    <a className="usa-link">consectetur adipiscing</a>
    &nbsp;elit, sed do eiusmod.
  </>
);

export const SampleAlertMantine: React.FC = () => {
  return (
    <Box>
      <h3>Standard alerts</h3>
      {Object.keys(UswdsContexts).map((context) => {
        return (
          <Alert key={context} color={context} title={`${context} status`}>
            {ALERT_TEXT}
          </Alert>
        );
      })}

      <h3>Slim alert</h3>
      <Alert color={UswdsContexts.Info} variant={UswdsAlertVariants.Slim}>
        {ALERT_TEXT}
      </Alert>

      <h3>Alert with no icon</h3>
      <Alert color={UswdsContexts.Info} variant={UswdsAlertVariants.NoIcon}>
        {ALERT_TEXT}
      </Alert>
    </Box>
  );
};

export const SampleAlertUswds: React.FC = () => {
  return (
    <div>
      <h3>Standard alerts</h3>
      {Object.keys(UswdsContexts).map((color) => (
        <div
          key={color}
          className={`usa-alert usa-alert--${color.toLowerCase()}`}
        >
          <div className="usa-alert__body">
            <h4 className="usa-alert__heading">{color} status</h4>
            <p className="usa-alert__text">{ALERT_TEXT}</p>
          </div>
        </div>
      ))}

      <h3>Slim alert</h3>

      <div className="usa-alert usa-alert--info usa-alert--slim">
        <div className="usa-alert__body">
          <p className="usa-alert__text">{ALERT_TEXT}</p>
        </div>
      </div>

      <h3>Alert with no icon</h3>

      <div className="usa-alert usa-alert--info usa-alert--no-icon">
        <div className="usa-alert__body">
          <p className="usa-alert__text">{ALERT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};
