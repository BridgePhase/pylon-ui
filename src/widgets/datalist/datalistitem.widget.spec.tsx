import { composeStory } from "@storybook/react";
import meta, {
  ListItemWithAvatar,
  ListItemWithAvatarAndSideContext,
  SimpleListItem,
} from "../../stories/widgets/datalist/datalistitem.widget.stories";
import { render } from "@testing-library/react";

describe("DataListItem", () => {
  it("renders list item with avatar properly", () => {
    const ComposedPrimary = composeStory(ListItemWithAvatar, meta);
    const { container } = render(<ComposedPrimary />);
    expect(container).toMatchSnapshot();
  });

  it("renders list item with side context properly", () => {
    const ComposedPrimary = composeStory(
      ListItemWithAvatarAndSideContext,
      meta
    );
    const { container } = render(<ComposedPrimary />);
    expect(container).toMatchSnapshot();
  });

  it("renders simple list item properly", () => {
    const ComposedPrimary = composeStory(SimpleListItem, meta);
    const { container } = render(<ComposedPrimary />);
    expect(container).toMatchSnapshot();
  });
});
