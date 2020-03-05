import React from 'react';
import PropTypes from "prop-types";
import Counter from "Counter";
import Message from "Message";
import Profile from "Profile";
import 'App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Profile />
        <Message />
        <Counter />
        <Counter color="green" />
        <Counter color="blue" />
      </div>
    );
  }
}

export default App;
