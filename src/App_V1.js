import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';

function App_V1() {
  return (
    <div className="logo">
      <Logo />

      <Header />
      
      <Footer title='Google' website='www.google.com' postcode={11000} isOpen={true}/>

      <hr />

      <Sidebar />

      <hr />

      <Menu />
    </div>
  )
}

export default App_V1;
