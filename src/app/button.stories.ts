import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AppComponent> = {
  title: 'Example/AppComponent',
  component: AppComponent,
  argTypes: {
    title: {
      control: 'text',
      color: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<AppComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Mijn titel',
    color: '#36ad71',
  },
};
