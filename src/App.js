
import './App.css';
import Pics from './faqComponents/pic';
import Header from './faqComponents/header';
import Faq from './faqComponents/faqs';
import Footer from './faqComponents/footer';
import Tab from './faqComponents/tab';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pics/>
      <Tab/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
