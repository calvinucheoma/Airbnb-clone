import './App.css';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

function App() {

  return (

      <div className="app">

        <Router>

            <Header/>

            <Routes>
              
                <Route path='/' element={<Home/>} />
                <Route path='search' element={<SearchPage/>} />

            </Routes>

            <Footer/>

        </Router>

      </div>

  );

};

export default App;
