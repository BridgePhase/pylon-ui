import React, { ReactNode } from "react";

export type PylonCollectionMetaTagProps = {
  label: string;
  variant?: string;
};

export type PylonCollectionMetaProps = {
  ariaLabel: string;
  items?: ReactNode[];
  tags?: PylonCollectionMetaTagProps[];
};

export const PylonCollectionMeta: React.FC<PylonCollectionMetaProps> = ({
  ariaLabel,
  items,
  tags,
}) => {
  return (
    <ul className="usa-collection__meta" aria-label={ariaLabel}>
      {items?.map((metaItem, index) => (
        <li className="usa-collection__meta-item" key={`${ariaLabel}-${index}`}>
          {metaItem}
        </li>
      ))}

      {tags?.map((tag) => (
        <li
          key={tag.label}
          className={`usa-collection__meta-item usa-tag usa-tag--${
            tag.variant ?? "default"
          }`}
        >
          {tag.label}
        </li>
      ))}
    </ul>
  );
};
