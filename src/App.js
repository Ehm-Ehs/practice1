import logo from './logo.svg';
import './App.css';
import Pics from './components/pic';
import Header from './components/header';
import Faq from './components/faqs';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pics/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
