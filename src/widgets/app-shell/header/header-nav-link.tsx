import { Anchor, AnchorProps } from "@mantine/core";

export type HeaderNavLinkProps = AnchorProps & {
  href: string;
  children: React.ReactNode;
};

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = (props) => {
  return (
    <Anchor className="usa-nav__link" {...props} fz="inherit">
      <span>{props.children}</span>
    </Anchor>
  );
};
