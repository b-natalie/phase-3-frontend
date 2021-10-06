import './App.css';
import ServicesPage from './components/ServicesPage';
import ClientsContainer from './components/ClientsContainer';
import ReservationsContainer from './components/ReservationsContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesPage />
    </div>
  );
}

export default App;
