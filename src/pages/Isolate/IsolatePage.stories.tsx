import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import IsolatePage from "./IsolatePage";
import { fn } from "storybook/test";

const meta = {
  title: "Example/IsolatePage",
  component: IsolatePage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IsolatePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
