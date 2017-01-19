import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

import Index from './pages/index/index';
import Bslide from './pages/work/bslide/bslide';
import Underlined from './pages/work/underlined/underlined';
import Logue from './pages/work/logue/logue';
import Urack from './pages/work/urack/urack';
import Recaffeine from './pages/work/recaffeine/recaffeine';
import Bunny from './pages/work/bunny/bunny';

function scrollTop () {
  window.scrollTo(0,0)
}

ReactDOM.render(
  <Router history={browserHistory} onUpdate={scrollTop}>
    <Route path="/" component={Index} />
    <Route path="/bslide" component={Bslide}/>
    <Route path="/underlined" component={Underlined}/>
    <Route path="/logue" component={Logue}/>
    <Route path="/urack" component={Urack}/>
    <Route path="/recaffeine" component={Recaffeine}/>
    <Route path="/bunny" component={Bunny}/>
  </Router>,
  document.getElementById('root')
);
