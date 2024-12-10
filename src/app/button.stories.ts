import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

const meta: Meta<AppComponent> = {
  title: 'Example/AppComponent',
  component: AppComponent,
  argTypes: {
    title: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
    clicked: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<AppComponent>;

export const Default: Story = {
  args: {},
};

export const Custom: Story = {
  args: {
    title: 'Mijn titel',
    color: '#36ad71',
  },
};
