import { action } from "@storybook/addon-actions";
import Form from "./form.component";

export default {
  title: "Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const CardNumberForm = Template.bind({});

CardNumberForm.args = {
  required: true,
  inputInfo: [
    { type: "number" },
    { type: "number" },
    { type: "password" },
    { type: "password" },
  ],
  connector: "-",
  inputClass: "default-input",
  label: "카드 번호",
  formType: "card-number",
  name: "card-number",
};

export const ExpireDateForm = Template.bind({});

ExpireDateForm.args = {
  required: true,
  inputInfo: [
    { type: "number", placeholder: "MM" },
    { type: "number", placeholder: "YY" },
  ],
  connector: "/",
  inputClass: "expire-date-input",
  label: "만료일",
  formType: "expire-date",
  name: "expire-date",
};

export const CardUserForm = Template.bind({});

CardUserForm.args = {
  required: false,
  inputInfo: [
    { type: "text", placeholder: "카드에 표시된 이름과 동일하게 입력하세요." },
  ],
  inputClass: "default-input",
  label: "카드 소유자 이름 (선택)",
  name: "card-user",
};

export const SecurityCodeForm = Template.bind({});

SecurityCodeForm.args = {
  required: true,
  inputInfo: [{ type: "password", value: "" }],
  inputClass: "security-code-input",
  label: "보안 코드(CVC/CVV)",
  formType: "security-code",
  name: "security-code",
  onClickVirtualKeyboard: action("clickVirtualKeyboard"),
  onClickCloseButton: action("clickCloseButton"),
  onClickBackspaceButton: action("clickBackSpaceButton"),
};

export const CardPasswordForm = Template.bind({});

CardPasswordForm.args = {
  required: true,
  inputClass: "card-password-input",
  label: "카드 비밀번호",
  name: "card-password",
  formType: "card-password",
  value: {
    first: "",
    second: "",
  },
  onClickVirtualKeyboard: action("clickVirtualKeyboard"),
  onClickCloseButton: action("clickCloseButton"),
  onClickBackspaceButton: action("clickBackSpaceButton"),
};
