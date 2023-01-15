import NavBar from './components/navBar';
import Info from './components/info';
import Benefits from './components/benefits';
import Awards from './components/awards';
import Features from './components/features';
import TrustedCompanies from './components/trustedCompanies';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Info />
        <Benefits />
        <Awards/>
        <Features/>
        <TrustedCompanies/>
    </div>
  );
}

export default App;
