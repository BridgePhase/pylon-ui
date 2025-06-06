import { Anchor } from "@mantine/core";
import React from "react";

export const PylonCollectionHeading: React.FC<{
  heading: string;
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
