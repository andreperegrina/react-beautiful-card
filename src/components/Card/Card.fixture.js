import React from 'react';
import Card from "./Card";
import image from '../../meeting.svg';

export default () => (
   <Card
      color='color-1'
      onClick={() => {
         console.log('clicked')
      }}
      image={image}
      title={'Build a web app with React Hooks'}
      subtitle={'Early Access'}
      buttons={[{key: 1, text: '👍'}, {key: 2, text: '👏'}]}
   />
);

