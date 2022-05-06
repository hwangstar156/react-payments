import HelpBox from "./helpBox.component";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "HelpBox",
  component: HelpBox,
};

export const DefaultHelpBox = (args) => <HelpBox {...args} />;

export const HoverHelpBox = DefaultHelpBox.bind({});

HoverHelpBox.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.hover(canvas.getByRole("button", { hidden: true }));
};
