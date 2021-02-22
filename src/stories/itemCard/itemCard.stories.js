import React from 'react';

import  ItemCard from './itemCard';

export default {
  title: 'Example/ItemCard',
  component: ItemCard,
};

const Template = (args) => <ItemCard {...args} />;

export const Item = Template.bind({});
Item.args = {
};