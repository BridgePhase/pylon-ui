import React from "react";
import {
  PylonCollectionItem,
  PylonCollectionItemProps,
} from "./collection-item";

export const PylonCollection: React.FC<{
  items: PylonCollectionItemProps[];
}> = ({ items }) => {
  return (
    <ul className="usa-collection" data-testid="collection">
      {items.map((item, index) => (
        <PylonCollectionItem
          key={`collection-item-${index}`}
          heading={item.heading}
          href={item.href}
          metas={item.metas}
          children={item.children}
        />
      ))}
    </ul>
  );
};
