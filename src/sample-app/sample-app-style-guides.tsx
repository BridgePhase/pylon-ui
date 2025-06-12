import { ReactNode } from "react";
import { ColorsPage } from "./pages/colors.page";
import { TypographyPage } from "./pages/typography.page";

export interface StyleGuide {
  name: string;
  page: ReactNode;
}

export const STYLE_GUIDES: StyleGuide[] = [
  { name: "Typography", page: <TypographyPage /> },
  { name: "Colors", page: <ColorsPage /> },
];
