import React from 'react';

// class Wrapper extends React.Component {
//     render() {
//         return (
//             <section style={{ padding: '4em', background: 'papayaship' }}>
//                 {this.props.children}
//             </section>
//         );
//     }
// }

const Wrapper = (props) => (
  <section style={{ padding: '4em', background: 'papayaship' }}>
    {props.children}
  </section>
);

// class Title extends React.Component {
//     render() {
//         const fontSize = this.props.isBig ? '3em' : '1.5em';
//         return (
//             <h1 style={{ fontSize, textAlign: 'center', color: 'palevioletred '}}>
//                 {this.props.children}
//             </h1>
//         );
//     }
// }

const Title = (props) => {
  const style = {
    fontSize: props.isBig ? '3em' : '1.5em',
    textAlign: 'center',
    color: 'palevioletred',
  };
  return <h1 style={style}>{props.children}</h1>;
};

function App2() {
  const components = <Title>Hello World!</Title>;
  return <Wrapper children={components} />;
}

export default App2;
