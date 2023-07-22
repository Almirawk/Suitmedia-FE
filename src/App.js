import { Menu } from './components/Navbar';
import { FormEmail } from './components/form';
import { Banner } from './components/Banner';
import {Footer} from './components/Footer'
import { Content } from './components/Card';
function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Content />
      <FormEmail/>
      <Footer />
    </div>
    
  );
}

export default App;
