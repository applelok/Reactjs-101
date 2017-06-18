'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
// import Home from './components/Home';
import Repos from './components/Repos';
// import About from './components/About';
// import User from './components/User';
// import Contacts from './components/Contacts';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos/:name" component={Repos} />
    </Route>
  </Router>,
  document.getElementById('app'));

  /* 另外一種寫法：
	const routes = (
	    <Route path="/" component={App}>
	      <IndexRoute component={Home} />
	      <Route path="/repos/:name" component={Repos} />
	      <Route path="/about" component={About} />
	      <Route path="/user" component={User} />
	      <Route path="/contacts" component={Contacts} />
	    </Route>
	);

	ReactDOM.render(
	  <Router routes={routes} history={hashHistory} />,
	  document.getElementById('app'));
  */