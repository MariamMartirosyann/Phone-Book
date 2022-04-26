import React from 'react';
import '../../App.css';
import Addbtn from '../Components/Addbtn';
import Navbar from '../Components/Navbar';
import Table from '../Components/Table';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Addbtn />
            <Table />
        </div>
    )
}

export default HomePage