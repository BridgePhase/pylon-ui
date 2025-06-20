import { AnchorProps } from "@mantine/core";

export type HeaderNavLinkProps = AnchorProps & {
  href: string;
  children: React.ReactNode;
  current?: boolean;
};

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = (props) => {
  return (
    <a href={props.href} className={props.current ? "usa-current" : ""}>
      <span>{props.children}</span>
    </a>
  );
};
