import React from 'react';
import ReactDOM from 'react-dom';

// Functional Component 可以視為 f(d) => UI，根據傳進去的 props 繪出對應的 UI。注意這邊 props 是傳入函式的參數，因此取用 props 不用加 this
const HelloMessage = (props) => (
  <div>
    <h1>Hello, {props.name}!</h1>
  </div>
);

// class HelloMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.props.name}!</h1>
//       </div>
//     );
//   }
// }

HelloMessage.propTypes = {
  name: React.PropTypes.string,
}

HelloMessage.defaultProps = {
 name: 'Zuck',
}

ReactDOM.render(<HelloMessage />, document.getElementById('app'));