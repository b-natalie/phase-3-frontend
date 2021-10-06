import './App.css';
import ServicesPage from './components/ServicesPage';
import ClientsContainer from './components/ClientsContainer';
import ReservationsContainer from './components/ReservationsContainer';

function App() {
  return (
    <div className="App">
      {/* <ServicesContainer /> */}
      {/* <ClientsContainer /> */}
      <ServicesPage />
      <ReservationsContainer />
    </div>
  );
}

export default App;
