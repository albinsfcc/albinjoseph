import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
//import { Button, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
