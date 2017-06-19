import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route,Switch} from 'react-router-dom'
// import App from './components/App/App';
import Home from './components/Home';
// // import Repos from './components/Repos/Repos';
import About from './components/About';
// import User from './components/User';
// import Contacts from './components/Contacts';

let Router = BrowserRouter;

class Index extends React.Component{
  render(){
    return(
    <Router>
        <div className="container">
	       	<ul>
	         <li><Link to="/">Home</Link></li>
	         <li><Link to="/about">About</Link></li>
	       	</ul>
		    <hr/>
		    <Route exact path="/" component={Home} /> 
		    <Route path="/about" component={About} />   
        </div>
    </Router>
    )
  }
}


ReactDOM.render(<Index />,document.getElementById('app'));