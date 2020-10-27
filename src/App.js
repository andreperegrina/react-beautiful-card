import React from 'react';
import './App.css';
import Card from "./components/Card/Card";
import image from "./meeting.svg";

function App() {
   return (
      <div className='App'>
         <div className="container">
            <div className='title-container'>
               <h1>Beautiful Cards, Amazing colors!</h1>
            </div>
            <div className='list-cards'>
               <Card
                  size='md'
                  color='color-1'
                  onClick={() => {
                     console.log('clicked')
                  }}
                  image={image}
                  title={'Build a web app with React Hooks'}
                  subtitle={'Early Access'}
                  buttons={[{key: 1, text: '👍'}, {key: 2, text: '👏'}]}
               />
               <Card
                  size='md'
                  color='color-2'
                  onClick={() => {
                     console.log('clicked')
                  }}
                  image={image}
                  title={'Build a web app with React Hooks'}
                  subtitle={'Early Access'}
                  buttons={[{key: 1, text: '👍'}, {key: 2, text: '👏'}]}
               />
               <Card
                  size='md'
                  color='color-3'
                  onClick={() => {
                     console.log('clicked')
                  }}
                  image={image}
                  title={'Build a web app with React Hooks'}
                  subtitle={'Early Access'}
                  buttons={[{key: 1, text: '👍'}, {key: 2, text: '👏'}]}
               />
               <Card
                  size='md'
                  color='color-4'
                  onClick={() => {
                     console.log('clicked')
                  }}
                  image={image}
                  title={'Build a web app with React Hooks'}
                  subtitle={'Early Access'}
                  buttons={[{key: 1, text: '👍'}, {key: 2, text: '👏'}]}
               />
            </div>
         </div>
      </div>
   );
}

export default App;
