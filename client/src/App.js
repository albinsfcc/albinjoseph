import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/Header'
import Banner from './components/banner/Banner';
//import { Button, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
