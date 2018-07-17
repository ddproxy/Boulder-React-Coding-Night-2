import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './components/Nav';
import routes from './routes';
import './index.css';



class AppContainer extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Route path={'/'} component={Nav} />
            {routes}
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));
