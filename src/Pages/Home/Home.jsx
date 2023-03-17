import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <>
      <section id="home">
        <div id="home-content">
          <h1>Neo Motors</h1>
          <p>Embrace Change. Embrace NEO.</p>
          <Link to={`catalog`} style={{ textDecoration: "none", color:'inherit', paddingTop:'10px', }}>
            <p id='CTA'>Shop Now</p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home