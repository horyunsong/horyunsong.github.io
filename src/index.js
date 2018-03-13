import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

import Index from './pages/index/index';
import Emotion from './pages/work/emotion/emotion';
import Docs from './pages/work/docs/docs';
import Bslide from './pages/work/bslide/bslide';
import Underlined from './pages/work/underlined/underlined';
import Logue from './pages/work/logue/logue';
import Urack from './pages/work/urack/urack';
import Recaffeine from './pages/work/recaffeine/recaffeine';
import Bunny from './pages/work/bunny/bunny';
import Misc from './pages/work/misc/misc';
import Ticket from './pages/work/ticket/ticket';
import Not from './pages/notfound/notfound';

ReactGA.initialize('UA-115628472-1');

/*
function scrollTop () {
  window.scrollTo(0,0)
}*/


function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  window.scrollTo(0,0);
  if ('scrollRestoration' in browserHistory) {
    browserHistory.scrollRestoration = 'manual';
  }
}

ReactDOM.render(
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" component={Index} />
    <Route path="/ticket" component={Ticket}/>
    <Route path="/emotion" component={Emotion} />
    <Route path="/docs" component={Docs}/>
    <Route path="/bslide" component={Bslide}/>
    <Route path="/underlined" component={Underlined}/>
    <Route path="/logue" component={Logue}/>
    <Route path="/urack" component={Urack}/>
    <Route path="/recaffeine" component={Recaffeine}/>
    <Route path="/bunny" component={Bunny}/>
    <Route path="/misc" component={Misc}/>
    <Route path="/*" component={Not}/>
  </Router>,
  document.getElementById('root')
);
