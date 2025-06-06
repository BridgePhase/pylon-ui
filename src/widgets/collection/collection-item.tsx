import React, { ReactNode } from "react";
import { PylonCollectionHeading } from "./collection-heading";
import {
  PylonCollectionMeta,
  PylonCollectionMetaProps,
} from "./collection-meta";

export type PylonCollectionItemProps = {
  heading: string;
  href: string;
  metas: PylonCollectionMetaProps[];
  children: ReactNode;
};

export const PylonCollectionItem: React.FC<PylonCollectionItemProps> = ({
  heading,
  href,
  metas,
  children,
}) => {
  return (
    <li className="usa-collection__item">
      <div className="usa-collection__body">
        <PylonCollectionHeading heading={heading} href={href} />

        <p className="usa-collection__description">{children}</p>

        {metas.map((meta) => (
          <PylonCollectionMeta
            key={meta.ariaLabel}
            ariaLabel={meta.ariaLabel}
            items={meta.items}
            tags={meta.tags}
          />
        ))}
      </div>
    </li>
  );
};
