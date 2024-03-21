import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    // This component will have an automatically generated Autodocs
    // entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <Button>Click me</Button>,
};

export const Primary: Story = {
    render: () => <Button type={Button.TYPE.PRIMARY}>Click me</Button>,
};

export const Secondary: Story = {
    render: () => <Button type={Button.TYPE.SECONDARY}>Click me</Button>,
};
