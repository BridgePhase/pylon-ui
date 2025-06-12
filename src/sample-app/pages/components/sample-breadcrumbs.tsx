import { Anchor, Breadcrumbs, Text } from "@mantine/core";

const BREADCRUMB_TRAIL = [
  "Home",
  "Federal Contracting",
  "Contracting assistance programs",
  "Economically disadvantaged women-owned small business federal contracting program",
];

export const SampleBreadcrumbsMantine: React.FC = () => {
  return (
    <>
      <h3>Default breadcrumb</h3>
      <Breadcrumbs>
        {BREADCRUMB_TRAIL.map((crumb, index) =>
          index === BREADCRUMB_TRAIL.length - 1 ? (
            <Text key={crumb}>{crumb}</Text>
          ) : (
            <Anchor key={crumb}>{crumb}</Anchor>
          )
        )}
      </Breadcrumbs>

      <h3>Wrapping breadcrumb</h3>
      <Breadcrumbs variant="wrap">
        {BREADCRUMB_TRAIL.map((crumb, index) =>
          index === BREADCRUMB_TRAIL.length - 1 ? (
            <Text key={crumb}>{crumb}</Text>
          ) : (
            <Anchor key={crumb}>{crumb}</Anchor>
          )
        )}
      </Breadcrumbs>
    </>
  );
};

export const SampleBreadcrumbsUswds: React.FC = () => {
  return (
    <div>
      <h3>Default breadcrumb</h3>
      <nav className="usa-breadcrumb" aria-label="Breadcrumbs,,">
        <ol className="usa-breadcrumb__list">
          {BREADCRUMB_TRAIL.map((crumb, index) =>
            index === BREADCRUMB_TRAIL.length - 1 ? (
              <li
                key={crumb}
                className="usa-breadcrumb__list-item usa-current"
                aria-current="page"
              >
                <span>{crumb}</span>
              </li>
            ) : (
              <li className="usa-breadcrumb__list-item" key={crumb}>
                <a href="" className="usa-breadcrumb__link">
                  {crumb}
                </a>
              </li>
            )
          )}
        </ol>
      </nav>

      <h3>Wrapping breadcrumb</h3>
      <nav
        className="usa-breadcrumb usa-breadcrumb--wrap"
        aria-label="Breadcrumbs,,,"
      >
        <ol className="usa-breadcrumb__list">
          {BREADCRUMB_TRAIL.map((crumb, index) =>
            index === BREADCRUMB_TRAIL.length - 1 ? (
              <li
                key={crumb}
                className="usa-breadcrumb__list-item usa-current"
                aria-current="page"
              >
                <span>{crumb}</span>
              </li>
            ) : (
              <li key={crumb} className="usa-breadcrumb__list-item">
                <a href="" className="usa-breadcrumb__link">
                  {crumb}
                </a>
              </li>
            )
          )}
        </ol>
      </nav>
    </div>
  );
};
