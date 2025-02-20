import {
  Alert,
  Button,
  Center,
  Loader,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { IconAlertHexagon } from "@tabler/icons-react";
import { useState } from "react";

export interface LoginRequest {
  username: string;
  password: string;
}

interface LoginWidgetProps {
  headline: string;
  doLogin: (loginPayload: LoginRequest) => Promise<void>;
  onSuccess: () => void;
}

interface LoginState {
  loading: boolean;
  error?: boolean;
  success?: boolean;
}

export const LoginWidget: React.FC<LoginWidgetProps> = ({
  headline,
  doLogin,
  onSuccess,
}) => {
  const [loginState, setLoginState] = useState<LoginState>({ loading: false });
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });
  return (
    <>
      <Center
        style={(theme) => ({
          marginBottom: theme.spacing.md,
        })}
      >
        <Title>{headline}</Title>
      </Center>
      <Form
        data-testid="loginForm"
        form={form}
        onSubmit={(formValues) => {
          setLoginState({
            loading: true,
            error: undefined,
            success: undefined,
          });
          doLogin(formValues)
            .then((result) => {
              setLoginState((_oldState) => ({
                loading: false,
                error: false,
                success: true,
              }));
              onSuccess();
              return result;
            })
            .catch((error) => {
              setLoginState((_oldState) => ({
                loading: false,
                error: true,
                success: true,
              }));
              return error;
            });
        }}
      >
        <Stack>
          {loginState.error && (
            <Alert
              icon={<IconAlertHexagon />}
              variant="light"
              title="Oh oh! Couldn't log you in"
              color="pink"
              withCloseButton={false}
            >
              <Text size={"sm"}>
                Check with tech support if you believe this should have worked
              </Text>
            </Alert>
          )}
          <TextInput
            required
            autoFocus
            label="Username"
            placeholder="me@bridgephase.com"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue("username", event.currentTarget.value)
            }
            radius="md"
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            radius="md"
          />
          <Button type="submit" radius="xl" disabled={loginState.loading}>
            {loginState.loading && (
              <>
                <Loader
                  size="sm"
                  style={(theme) => ({
                    marginRight: theme.spacing.sm,
                  })}
                />{" "}
                Logging you in...
              </>
            )}
            {!loginState.loading && <>Login</>}
          </Button>
        </Stack>
      </Form>
    </>
  );
};
