import { composeStory } from "@storybook/react";
import meta, {
  Primary,
  WrongLogin,
} from "../../stories/widgets/login/login.widget.stories";
import {
  screen,
  render,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("LoginWidget", () => {
  it("allows login with correct credentials", async () => {
    const fakeSuccessHandler = vitest.fn();
    const ComposedPrimary = composeStory(Primary, meta);
    render(<ComposedPrimary onSuccess={() => fakeSuccessHandler()} />);

    await fakeUserLogin();

    await waitFor(() => expect(fakeSuccessHandler).toHaveBeenCalled());
  });

  it("shows an error and does not call the success handler when login fails", async () => {
    const fakeSuccessHandler = vitest.fn();
    const ComposedWrongLogin = composeStory(WrongLogin, meta);
    render(<ComposedWrongLogin onSuccess={() => fakeSuccessHandler()} />);

    await fakeUserLogin();

    const wrongLoginAlert = await screen.findByRole("alert");
    expect(wrongLoginAlert.textContent).toContain("Oh oh! Couldn't log you in");
    expect(fakeSuccessHandler).not.toHaveBeenCalled();
  });

  it("shows a loading indicator and login is disabled when login is in progress", async () => {
    const fakeSuccessHandler = vitest.fn();
    const ComposedWrongLogin = composeStory(WrongLogin, meta);
    render(
      <ComposedWrongLogin
        onSuccess={() => fakeSuccessHandler()}
        // creates an indeterminate promise that never resolves
        doLogin={() => new Promise(() => null)}
      />
    );

    await fakeUserLogin();

    expect(screen.getByRole("button")).toBeDisabled();
    expect(fakeSuccessHandler).not.toHaveBeenCalled();
  });

  async function fakeUserLogin() {
    const usernameInput = screen.getByLabelText(/^Username.*/);
    const passwordInput = screen.getByLabelText(/^Password.*/);
    const loginForm = screen.getByTestId("loginForm");

    await act(async () => {
      await userEvent.type(usernameInput, "fake-user");
      await userEvent.type(passwordInput, "fake-value");
      fireEvent.submit(loginForm);
    });
  }
});
