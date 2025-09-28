import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";
import { fn } from "storybook/test";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
