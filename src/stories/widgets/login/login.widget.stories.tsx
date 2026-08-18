import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoginWidget } from "../../../widgets/login/login.widget";

const meta: Meta<typeof LoginWidget> = {
  component: LoginWidget,
  title: "Additional Widgets/Login",
};
export default meta;

type Story = StoryObj<typeof LoginWidget>;

export const Primary: Story = {
  args: {
    headline: "Welcome",
    doLogin: () => {
      return new Promise((resolve) => resolve());
    },
    onSuccess: () => alert("Login was successful"),
  },
};

export const WrongLogin: Story = {
  args: {
    headline: "Welcome",
    doLogin: () => {
      return new Promise((_resolve, reject) => reject());
    },
    onSuccess: () => alert("Login was successful"),
  },
};
