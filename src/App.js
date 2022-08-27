import './App.css';
import Header from "./components/header/Header";
import Home from "./components/page/Home";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import DetailContent from "./components/content/detail_movie/DetailContent";
import Search from "./components/page/Search";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route  path='/movie/:movieName' element={<DetailContent/>}/>
                    <Route  path='/search/' element={<Search/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
