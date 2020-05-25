import React from 'react';
import Navbar from "./PractiseComponents/Navbar";
import MainContent from "./PractiseComponents/MainContent";
import Footer from "./AppComponents/Footer";
import Header from "./ToDoComponents/Header";


function ToDo() {
    return (
        <div >

            <Header />
            <input type="checkbox"/>
            <p>Placeholder text here</p>

            <input type="checkbox"/>
            <p>Placeholder text here</p>

            <input type="checkbox"/>
            <p>Placeholder text here</p>

            <input type="checkbox"/>
            <p>Placeholder text here</p>

            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
}

export default ToDo