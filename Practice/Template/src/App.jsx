

import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return <>
    <div>
      <h1 className='text-primary'>React Template</h1>
    </div>

    <Header />
    <Content />
    <Footer />
  </>
};

export default App;