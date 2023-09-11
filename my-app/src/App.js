import './App.css';
import Header from './containers/header/head';
import Nav from './components/navbar/nav';
import Brand from './components/brands/brand';
import Gbt3 from './containers/gbt3/gbt3';
import Featuries from './containers/features/featuries';
import Apps from './containers/apps/apps';
import Regist from './containers/regist/regist';
import Blogs from './containers/blogs/blogs';
import Footer from './containers/footer/footer';

function App() {
  return (
    <div className="App">
      <div className='header bg-gradient'>

        <div className='container'>
          <div className='part1'>
              <Nav />
              <Header />
          </div>

          <div>
            <Brand />
            <Gbt3 />
            <Featuries />
            <Apps />
            <Regist />
            <Blogs />
          </div>
        </div>

        <Footer />
        
      </div>
    </div>
  );
}

export default App;
