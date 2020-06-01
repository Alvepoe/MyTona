import React from "react";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import PageContent from "./components/page-content/page-content";
import './App.sass'

function App() {
    return (
        <div className={'app'}>
            <Header />
            <PageContent />
            <Footer />
        </div>
    );
}

export default App;