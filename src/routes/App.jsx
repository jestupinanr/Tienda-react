import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout.jsx';
import Login from '@pages/Login.jsx';
import RecoveryPassword from '@pages/RecoveryPassword.jsx';
import Home from '@pages/Home.jsx';
import NotFound from '@pages/NotFound.jsx';
import '@styles/global.css';
import MailSend from '@pages/MailSend.jsx';
import Profile from '@pages/Profile.jsx';
import Checkout from '@pages/Checkout.jsx';
import CreateAccount from '@pages/ProfileCreate.jsx';
import Orders from '@pages/Orders.jsx';
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState.js';

const App = ()=>{
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/login" element={<Login />}/>
                        <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
                        <Route exact path="/send-email" element={<MailSend />}/>
                        <Route exact path="/account" element={<Profile/>}/>
                        <Route exact path="/signup" element={<CreateAccount/>}/>
                        <Route exact path="/checkout" element={<Checkout/>}/>
                        <Route exact path="/orders" element={<Orders/>}/>
                        <Route element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
       
    );
}

export default App;