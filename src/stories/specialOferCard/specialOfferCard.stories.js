import React from 'react';

import  SpecialOfferCard from './specialOfferCard';

export default {
  title: 'Example/SpecialOfferCard',
  component: SpecialOfferCard,
};

const Template = (args) => <SpecialOfferCard {...args} />;

export const SpecialOffers = Template.bind({});
SpecialOffers.args = {
};