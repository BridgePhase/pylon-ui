import { PylonCollection } from "../../../widgets/collection/collection";

export const SampleCollectionMantine: React.FC = () => {
  return (
    <PylonCollection
      items={[
        {
          heading: "Gears of Government President’s Award winners",
          href: "https://www.performance.gov/presidents-winners-press-release/",
          metas: [
            {
              ariaLabel: "More Information",
              items: [
                <>By Sondra Alnsworth and Constance Lu</>,
                <>September 30, 2020</>,
              ],
            },
            {
              ariaLabel: "Topics",
              tags: [
                { label: "New", variant: "new" },
                { label: "PMA" },
                { label: "OMB" },
              ],
            },
          ],
          children: (
            <>
              Today, the Administration announces the winners of the Gears of
              Government President’s Award. This program recognizes the
              contributions of individuals and teams across the federal
              workforce who make a profound difference in the lives of the
              American people.
            </>
          ),
        },

        {
          heading: "Women-owned small business dashboard",
          href: "https://www.performance.gov/sba-wosb-dashboard/",
          metas: [
            {
              ariaLabel: "More Information",
              items: [<>By Constance Lu</>, <>September 30, 2020</>],
            },
            {
              ariaLabel: "Topics",
              tags: [{ label: "SBA" }],
            },
          ],
          children: (
            <>
              In honor of National Women’s Small Business Month, we’ve partnered
              with SBA’s Office of Government Contracting and Business
              Development and Office of Program Performance, Analysis, and
              Evaluation to highlight the Women-Owned Small Businesses (WOSBs)
              data dashboard!
            </>
          ),
        },

        {
          heading:
            "September 2020 updates show progress on cross-agency and agency priority goals",
          href: "https://www.performance.gov/sba-wosb-dashboard/",
          metas: [
            {
              ariaLabel: "More Information",
              items: [<>By Eric L. Miller</>, <>September 17, 2020</>],
            },
            {
              ariaLabel: "Topics",
              tags: [
                { label: "Quarterly Update" },
                { label: "Cap Goal" },
                { label: "APG" },
                { label: "PMA" },
                { label: "Success Story" },
              ],
            },
          ],
          children: (
            <>
              Today, we published progress updates for both Cross-Agency
              Priority (CAP) Goals and Agency Priority Goals (APGs) for the
              third quarter of FY2020. These updates highlight recent milestones
              and accomplishments as well as related initiatives that support
              progress towards a more modern and effective government.
            </>
          ),
        },
      ]}
    />
  );
};

export const SampleCollectionUswds: React.FC = () => {
  return (
    <ul className="usa-collection" data-testid="collection">
      <li className="usa-collection__item">
        <div className="usa-collection__body">
          <h3 className="usa-collection__heading">
            <a
              className="usa-link"
              href="https://www.performance.gov/presidents-winners-press-release/"
            >
              Gears of Government President’s Award winners
            </a>
          </h3>
          <p className="usa-collection__description">
            Today, the Administration announces the winners of the Gears of
            Government President’s Award. This program recognizes the
            contributions of individuals and teams across the federal workforce
            who make a profound difference in the lives of the American people.
          </p>
          <ul className="usa-collection__meta" aria-label="More Information">
            <li className="usa-collection__meta-item">
              By Sondra Alnsworth and Constance Lu
            </li>
            <li className="usa-collection__meta-item">September 30, 2020</li>
          </ul>
          <ul className="usa-collection__meta" aria-label="Topics">
            <li className="usa-collection__meta-item usa-tag usa-tag--new">
              New
            </li>
            <li className="usa-collection__meta-item usa-tag">PMA</li>
            <li className="usa-collection__meta-item usa-tag">OMB</li>
          </ul>
        </div>
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__body">
          <h3 className="usa-collection__heading">
            <a
              className="usa-link"
              href="https://www.performance.gov/sba-wosb-dashboard/"
            >
              Women-owned small business dashboard
            </a>
          </h3>
          <p className="usa-collection__description">
            In honor of National Women’s Small Business Month, we’ve partnered
            with SBA’s Office of Government Contracting and Business Development
            and Office of Program Performance, Analysis, and Evaluation to
            highlight the Women-Owned Small Businesses (WOSBs) data dashboard!
          </p>
          <ul className="usa-collection__meta" aria-label="More Information">
            <li className="usa-collection__meta-item">By Constance Lu</li>
            <li className="usa-collection__meta-item">September 30, 2020</li>
          </ul>
          <ul className="usa-collection__meta" aria-label="Topics">
            <li className="usa-collection__meta-item usa-tag">SBA</li>
          </ul>
        </div>
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__body">
          <h3 className="usa-collection__heading">
            <a
              className="usa-link"
              href="https://www.performance.gov/sba-wosb-dashboard/"
            >
              September 2020 updates show progress on cross-agency and agency
              priority goals
            </a>
          </h3>
          <p className="usa-collection__description">
            Today, we published progress updates for both Cross-Agency Priority
            (CAP) Goals and Agency Priority Goals (APGs) for the third quarter
            of FY2020. These updates highlight recent milestones and
            accomplishments as well as related initiatives that support progress
            towards a more modern and effective government.
          </p>
          <ul className="usa-collection__meta" aria-label="More Information">
            <li className="usa-collection__meta-item">By Eric L. Miller</li>
            <li className="usa-collection__meta-item">September 17, 2020</li>
          </ul>
          <ul className="usa-collection__meta" aria-label="Topics">
            <li className="usa-collection__meta-item usa-tag">
              Quarterly Update
            </li>
            <li className="usa-collection__meta-item usa-tag">Cap Goal</li>
            <li className="usa-collection__meta-item usa-tag">APG</li>
            <li className="usa-collection__meta-item usa-tag">PMA</li>
            <li className="usa-collection__meta-item usa-tag">Success Story</li>
          </ul>
        </div>
      </li>
    </ul>
  );
};
