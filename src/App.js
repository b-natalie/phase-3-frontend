import './App.css';
import ServicesPage from './components/ServicesPage';
import ClientsContainer from './components/ClientsContainer';
import ReservationsContainer from './components/ReservationsContainer';
import Header from './components/Header';
import { Route, Switch } from 'react-router';
import ServiceDetails from './components/ServiceDetails';
import ClientsPage from './components/ClientsPage';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/services/:id">
          <ServiceDetails />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/clients">
          <ClientsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
