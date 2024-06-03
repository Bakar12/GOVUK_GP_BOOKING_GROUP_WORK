import './App.css';

import { Route, Routes } from "react-router-dom";
import Book from './Pages/Book';
import Book2 from './Pages/Book2';
import Book3 from './Pages/Book3';
import Book4 from './Pages/Book4';
import ViewAvailable from './Pages/ViewAvailable';
import ViewAvailable02 from './Pages/ViewAvailable02';
import Cancel from './Pages/Cancel';
function App() {
    return (
        <>
            <Routes>
                <Route path="/book" element={<Book />} />
                <Route path="/book2" element={<Book2 />} />
                <Route path="/book3" element={<Book3 />} />
                <Route path="/book4" element={<Book4 />} />
                <Route path="/available" element={<ViewAvailable />} />
                <Route path="/available2" element={<ViewAvailable02 />} />
                <Route path="/pc" element={<Cancel />} />
            </Routes>
        </>
    );
}
export default App;
