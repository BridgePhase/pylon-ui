import React, { ReactNode } from "react";

export const PylonFooterItems: React.FC<{ items: ReactNode[] }> = ({
  items,
}) => {
  return (
    <address className="usa-footer__address">
      <div className="usa-footer__contact-info grid-row grid-gap">
        {items.map((item, index) => (
          <div key={`item-${index}`}>{item}</div>
        ))}
      </div>
    </address>
  );
};
