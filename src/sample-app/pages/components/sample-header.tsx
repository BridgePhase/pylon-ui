import { Button, Flex, Image, Menu, Stack } from "@mantine/core";
import { HeaderTitle } from "../../../widgets/app-shell/header/header-title";
import { HeaderNav } from "../../../widgets/app-shell/header/header-nav";
import { HeaderNavLink } from "../../../widgets/app-shell/header/header-nav-link";

export const SampleHeaderMantine: React.FC = () => {
  return (
    <Stack gap="md">
      <Flex align="center" m={0} bg="#ddd" px="lg">
        <HeaderTitle shortText="PylonUI" longText="Project Title" />
        <HeaderNav
          items={[
            <Menu position="bottom-start" offset={0} key="menu">
              <Menu.Target>
                <Button className="usa-accordion__button usa-nav__link usa-current">
                  Nav Label
                </Button>
              </Menu.Target>
              <Menu.Dropdown
                className="usa-nav__submenu"
                style={{ borderRadius: 0, border: "none" }}
                miw="200"
              >
                <Menu.Item className="usa-nav__submenu-item" c="white">
                  Current Link
                </Menu.Item>
                <Menu.Item className="usa-nav__submenu-item" c="white">
                  Simple Link Two
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>,
            <HeaderNavLink key="link" href="/">
              Nav link
            </HeaderNavLink>,
          ]}
        />
      </Flex>

      <Flex align="center" m={0} bg="#ddd" px="lg">
        <HeaderTitle
          shortText="PylonUI"
          longText="Project Title"
          logo={<Image src="/pylon.png" w={40} fit="contain" />}
        />
        <HeaderNav
          items={[
            <Menu position="bottom-start" offset={0} key="menu">
              <Menu.Target>
                <Button className="usa-accordion__button usa-nav__link usa-current">
                  Nav Label
                </Button>
              </Menu.Target>
              <Menu.Dropdown
                className="usa-nav__submenu"
                style={{ borderRadius: 0, border: "none" }}
                miw="200"
              >
                <Menu.Item className="usa-nav__submenu-item" c="white">
                  Current Link
                </Menu.Item>
                <Menu.Item className="usa-nav__submenu-item" c="white">
                  Simple Link Two
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>,
            <HeaderNavLink href="/" key="link">
              Parent link
            </HeaderNavLink>,
          ]}
        />
      </Flex>
    </Stack>
  );
};

export const SampleHeaderUswds: React.FC = () => {
  return (
    <Stack gap="md">
      <div
        style={{
          background: "#ddd",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 20px ",
        }}
      >
        <div className="usa-navbar">
          <div className="usa-logo">
            <em className="usa-logo__text">Project Title</em>
          </div>
          <button
            className="usa-menu-btn"
            data-testid="navMenuButton"
            type="button"
          >
            Menu
          </button>
        </div>
        <nav
          // className="usa-nav"
          style={{
            display: "flex",
            marginLeft: "auto",
            alignItems: "baseline",
          }}
        >
          <ul className="usa-nav__primary usa-accordion">
            <li className="usa-nav__primary-item">
              <button
                data-testid="navDropDownButton"
                className="usa-accordion__button usa-nav__link usa-current"
                aria-expanded="false"
                aria-controls="testDropDownOne"
                type="button"
              >
                <span>Nav Label</span>
              </button>
              <ul className="usa-nav__submenu" id="testDropDownOne" hidden>
                <li className="usa-nav__submenu-item">
                  <a href="#linkOne">Current link</a>
                </li>
                <li className="usa-nav__submenu-item">
                  <a href="#linkTwo">Simple link Two</a>
                </li>
              </ul>
            </li>
            <li className="usa-nav__primary-item">
              <a href="#two" className="usa-nav__link">
                <span>Parent link</span>
              </a>
            </li>
          </ul>
          <div>
            <button className="usa-button" type="button">
              Logout
            </button>
          </div>
        </nav>
      </div>
      <div
        style={{
          background: "#ddd",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 20px ",
        }}
      >
        <div className="usa-navbar">
          <div className="usa-logo display-flex">
            <img src="/pylon.png" height="40" />
            <em className="usa-logo__text">Project Title</em>
          </div>
          <button
            className="usa-menu-btn"
            data-testid="navMenuButton"
            type="button"
          >
            Menu
          </button>
        </div>
        <nav
          className="usa-nav"
          style={{
            display: "flex",
            marginLeft: "auto",
            alignItems: "baseline",
          }}
        >
          <ul className="usa-nav__primary usa-accordion">
            <li className="usa-nav__primary-item">
              <button
                data-testid="navDropDownButton"
                className="usa-accordion__button usa-nav__link usa-current"
                aria-expanded="false"
                aria-controls="testDropDownOne"
                type="button"
              >
                <span>Nav Label</span>
              </button>
              <ul className="usa-nav__submenu" id="testDropDownOne" hidden>
                <li className="usa-nav__submenu-item">
                  <a href="#linkOne">Current link</a>
                </li>
                <li className="usa-nav__submenu-item">
                  <a href="#linkTwo">Simple link Two</a>
                </li>
              </ul>
            </li>
            <li className="usa-nav__primary-item">
              <a href="#two" className="usa-nav__link">
                <span>Parent link</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Stack>
  );
};
