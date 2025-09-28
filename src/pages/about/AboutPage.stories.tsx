import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AboutPage from "./AboutPage";
import { fn } from "storybook/test";

const meta = {
  title: "Example/AboutPage",
  component: AboutPage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
