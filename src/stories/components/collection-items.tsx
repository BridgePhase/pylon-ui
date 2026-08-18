import { PylonCollectionItemProps } from "../../widgets/collection/collection-item";

/** Shared fixtures for the `PylonCollection*` stories. */
export const COLLECTION_ITEMS: PylonCollectionItemProps[] = [
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
        tags: [{ label: "New", variant: "new" }, { label: "PMA" }, { label: "OMB" }],
      },
    ],
    children: (
      <>
        Today, the Administration announces the winners of the Gears of
        Government President’s Award. This program recognizes the contributions of
        individuals and teams across the federal workforce who make a profound
        difference in the lives of the American people.
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
        In honor of National Women’s Small Business Month, we’ve partnered with
        SBA’s Office of Government Contracting and Business Development and Office
        of Program Performance, Analysis, and Evaluation to highlight the
        Women-Owned Small Businesses (WOSBs) data dashboard!
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
        Today, we published progress updates for both Cross-Agency Priority (CAP)
        Goals and Agency Priority Goals (APGs) for the third quarter of FY2020.
        These updates highlight recent milestones and accomplishments as well as
        related initiatives that support progress towards a more modern and
        effective government.
      </>
    ),
  },
];
