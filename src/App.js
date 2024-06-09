import React from 'react';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import MainContent from './components/organisms/MainContent/MainContent'
import './App.css'

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
