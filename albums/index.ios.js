// Index.ios.js - place code here for IOS!!!!!
// Use https://facebook.github.io/react-native/docs/getting-started.html
// npm install -g create-react-native-app


// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
    // JSX
    <Header />
    
  );


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
