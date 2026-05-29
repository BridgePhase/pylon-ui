import { composeStory } from "@storybook/react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import meta, {
  InteractiveListItem,
} from "../../stories/widgets/datalist/interactivedatalistitem.widget.stories";

describe("DataListItem", () => {
  it("renders interactive list item properly", () => {
    const ComposedPrimary = composeStory(InteractiveListItem, meta);
    const { container } = render(<ComposedPrimary />);
    expect(container).toMatchSnapshot();
  });

  it("calls handler", async () => {
    const fakeCallback = vi.fn();
    const ComposedPrimary = composeStory(InteractiveListItem, meta);
    render(<ComposedPrimary onSelect={() => fakeCallback()} />);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(fakeCallback).toHaveBeenCalled());
  });
});
