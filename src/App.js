import React from "react";
import { hot } from 'react-hot-loader/root';
import SelectionPage from './views/SelectionPage';

class App extends React.Component {
  render() {
    return (
      
      <div className="app-wrapper">
        <div className="app-background"></div>
        <SelectionPage/>
      </div>
      
      
    );
  }
}

export default hot(App);