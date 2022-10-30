import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='center'>
        <div>
        <h2>Shuily Akhter</h2>
        <h4>Web Developer</h4>
        <p>I am a front and web Developer.
            Dhaka Bangladesh.This is my <h3>Blog Site</h3></p>
        </div>
            <div className="half-width">
                <img src="https://images.unsplash.com/photo-1664575195621-a5f347e67554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
    </div>
    );
};

export default Home;