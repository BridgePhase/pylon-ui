import { Anchor, AnchorProps } from "@mantine/core";

export type HeaderNavLinkProps = AnchorProps & {
  href: string;
  children: React.ReactNode;
  current?: boolean;
};

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = (props) => {
  return (
    <Anchor
      href={props.href}
      className={props.current ? "usa-current" : ""}
      underline="never"
    >
      <span>{props.children}</span>
    </Anchor>
  );
};
