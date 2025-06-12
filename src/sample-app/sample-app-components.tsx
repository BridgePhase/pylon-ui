import {
  SampleAccordionMantine,
  SampleAccordionUswds,
} from "./pages/components/sample-accordion";
import { ReactNode } from "react";
import {
  SampleAlertMantine,
  SampleAlertUswds,
} from "./pages/components/sample-alert";
import {
  SampleBreadcrumbsMantine,
  SampleBreadcrumbsUswds,
} from "./pages/components/sample-breadcrumbs";
import {
  SampleButtonMantine,
  SampleButtonUswds,
} from "./pages/components/sample-button";
import {
  SampleCardMantine,
  SampleCardUswds,
} from "./pages/components/sample-card";
import {
  SampleTableMantine,
  SampleTableUswds,
} from "./pages/components/sample-table";
import {
  SampleCheckboxMantine,
  SampleCheckboxUswds,
} from "./pages/components/sample-checkbox";
import {
  SampleTagMantine,
  SampleTagUswds,
} from "./pages/components/sample-tag";
import {
  SampleDatepickerMantine,
  SampleDatepickerUswds,
} from "./pages/components/sample-datepicker";

import {
  SampleLogoUswds,
  SampleLogoMantine,
} from "./pages/components/sample-logo";
import {
  SampleLinkMantine,
  SampleLinkUswds,
} from "./pages/components/sample-link";
import {
  SampleModalMantine,
  SampleModalUswds,
} from "./pages/components/sample-modal";
import {
  SampleTitleMantine,
  SampleTitleUswds,
} from "./pages/components/sample-title";
import {
  SampleLabelUswds,
  SampleLabelMantine,
} from "./pages/components/sample-label";
import {
  SampleFooterUswds,
  SampleFooterMantine,
} from "./pages/components/sample-footer";
import {
  SampleFooterItemsMantine,
  SampleFooterItemsUswds,
} from "./pages/components/sample-footer-tems";
import {
  SampleCollectionUswds,
  SampleCollectionMantine,
} from "./pages/components/sample-collection";
import {
  SampleTextInputMantine,
  SampleTextInputUswds,
} from "./pages/components/sample-text-input";
import {
  SampleGridUswds,
  SampleGridMantine,
} from "./pages/components/sample-grid";
import {
  SampleInputPrefixSuffixUswds,
  SampleInputPrefixSuffixMantine,
} from "./pages/components/sample-input-prefix-suffix";
import {
  SamplePaginationMantine,
  SamplePaginationUswds,
} from "./pages/components/sample-pagination";
import {
  SampleHeaderMantine,
  SampleHeaderUswds,
} from "./pages/components/sample-header";
import {
  SampleSelectMantine,
  SampleSelectUswds,
} from "./pages/components/sample-select";
import {
  SampleStepIndicatorMantine,
  SampleStepIndicatorUswds,
} from "./pages/components/sample-step-indicator";

export interface SampleComponent {
  name: string;
  uswdsComponent?: ReactNode;
  mantineComponent?: ReactNode;
}

export const SAMPLE_COMPONENTS: SampleComponent[] = [
  {
    name: "Accordion",
    uswdsComponent: <SampleAccordionUswds />,
    mantineComponent: <SampleAccordionMantine />,
  },
  {
    name: "Alert",
    uswdsComponent: <SampleAlertUswds />,
    mantineComponent: <SampleAlertMantine />,
  },
  {
    name: "Breadcrumbs",
    uswdsComponent: <SampleBreadcrumbsUswds />,
    mantineComponent: <SampleBreadcrumbsMantine />,
  },
  {
    name: "Button",
    uswdsComponent: <SampleButtonUswds />,
    mantineComponent: <SampleButtonMantine />,
  },
  {
    name: "Card",
    uswdsComponent: <SampleCardUswds />,
    mantineComponent: <SampleCardMantine />,
  },
  {
    name: "Checkbox",
    uswdsComponent: <SampleCheckboxUswds />,
    mantineComponent: <SampleCheckboxMantine />,
  },
  {
    name: "Collection",
    uswdsComponent: <SampleCollectionUswds />,
    mantineComponent: <SampleCollectionMantine />,
  },
  {
    name: "Datepicker",
    uswdsComponent: <SampleDatepickerUswds />,
    mantineComponent: <SampleDatepickerMantine />,
  },
  {
    name: "Footer",
    uswdsComponent: <SampleFooterUswds />,
    mantineComponent: <SampleFooterMantine />,
  },
  {
    name: "Footer Item / Address",
    uswdsComponent: <SampleFooterItemsUswds />,
    mantineComponent: <SampleFooterItemsMantine />,
  },
  {
    name: "Grid / Grid Container",
    uswdsComponent: <SampleGridUswds />,
    mantineComponent: <SampleGridMantine />,
  },
  {
    name: "Header / Primary Nav",
    uswdsComponent: <SampleHeaderUswds />,
    mantineComponent: <SampleHeaderMantine />,
  },
  {
    name: "Input Group / Input Suffix",
    uswdsComponent: <SampleInputPrefixSuffixUswds />,
    mantineComponent: <SampleInputPrefixSuffixMantine />,
  },
  {
    name: "Label / Required Marker",
    uswdsComponent: <SampleLabelUswds />,
    mantineComponent: <SampleLabelMantine />,
  },
  {
    name: "Link",
    uswdsComponent: <SampleLinkUswds />,
    mantineComponent: <SampleLinkMantine />,
  },
  {
    name: "Logo",
    uswdsComponent: <SampleLogoUswds />,
    mantineComponent: <SampleLogoMantine />,
  },
  {
    name: "Modal / Modal Heading",
    uswdsComponent: <SampleModalUswds />,
    mantineComponent: <SampleModalMantine />,
  },
  {
    name: "Pagination",
    uswdsComponent: <SamplePaginationUswds />,
    mantineComponent: <SamplePaginationMantine />,
  },
  {
    name: "Select",
    uswdsComponent: <SampleSelectUswds />,
    mantineComponent: <SampleSelectMantine />,
  },
  {
    name: "Step Indicator / Step Indicator Step",
    uswdsComponent: <SampleStepIndicatorUswds />,
    mantineComponent: <SampleStepIndicatorMantine />,
  },
  {
    name: "Table",
    uswdsComponent: <SampleTableUswds />,
    mantineComponent: <SampleTableMantine />,
  },
  {
    name: "Tag",
    uswdsComponent: <SampleTagUswds />,
    mantineComponent: <SampleTagMantine />,
  },
  {
    name: "Text Input / Text Input Mask",
    uswdsComponent: <SampleTextInputUswds />,
    mantineComponent: <SampleTextInputMantine />,
  },
  {
    name: "Title",
    uswdsComponent: <SampleTitleUswds />,
    mantineComponent: <SampleTitleMantine />,
  },
];
