import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddBook from './components/Pages/AddBook';
import Dashboard from "./components/Pages/Dashboard";
import EditBook from './components/Pages/EditBook';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Home from "./components/Pages/Home";
import Login from "./components/Authentication/Login";
import NotFound from "./components/Pages/NotFound";
import PrivateRoute from './PrivateRoute';
import Register from './components/Authentication/Register';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className='flex-1'>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />}/>
                    <Route path="/add-book" element={<PrivateRoute element={<AddBook />} />}/>
                    <Route path="/edit-book/:bookId" element={<PrivateRoute element={<EditBook/>} />}/>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;