import { useState } from 'react';

import SignIn from './pages/sign-in';
import Flag from './pages/flag';
import Alert from './utils/alert';
import SignUp from './pages/sign-up';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [alerts, setAlerts] = useState([]);

  return (
    <BrowserRouter>
    <div className="container">
   
        <Switch>
          <Route exact path="/sign_up" render={() => <SignUp />} />
          <Route exact path="/" render={() => 
            accessToken ? <Flag />
              : <SignIn setAccessToken={setAccessToken} setAlerts={setAlerts} />
          } />

          <Alert alertsState={[alerts, setAlerts]} />


        </Switch>
  
    </div>
    </BrowserRouter>
  );
};

export default App;
