import React from 'react';

import  MainCarousel from './mainCarousel';

export default {
  title: 'Example/Carousel',
  component: MainCarousel,
};

const Template = (args) => <MainCarousel {...args} />;

export const Carousel = Template.bind({});
Carousel.args = {
};