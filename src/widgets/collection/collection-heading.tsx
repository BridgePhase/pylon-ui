import { Anchor } from "@mantine/core";
import React, { ReactNode } from "react";

export const PylonCollectionHeading: React.FC<{
  heading: ReactNode;
  href: string;
}> = ({ heading, href }) => {
  return (
    <h3 className="usa-collection__heading">
      <Anchor fw="bold" href={href}>
        {heading}
      </Anchor>
    </h3>
  );
};
