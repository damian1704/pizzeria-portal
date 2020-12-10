import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/vievs/Login/Login';
import Tables from './components/vievs/Tables/Tables';
import Ordering from './components/vievs/Ordering/Ordering';
import Kitchen from './components/vievs/Kitchen/Kitchen';
import Events from './components/vievs/Events/Events';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={Ordering} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Ordering} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Events} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={Events} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
