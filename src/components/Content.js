import React from 'react';
import './Content.css'
function Content() {
    return (
        <>
          <div className="content">
                <h1>THE SOUL OF THE WORLD</h1>
                <h3>A SIMPLE SOLUTION</h3>
                <div className="card">
                <i className="fas fa-play"></i>
                </div>
                <h4>For business and orgenizations - you can build communities and engage audiences with one easy-to-use mobile app platform.</h4>
                <div className="btn">
                    <button>Know More</button>
                    <button>Contact Us</button>
                </div>
          </div>  
          {/* Second Content */}
          <div className="second-content">
            <h1>Why Choose BOTSPOT AI? We're so glad you asked!</h1>
            <div className='btn-1'>
                <button>GET STARTED TODAY <i className="fas fa-arrow-down"></i> </button>
            </div>
            <div className='btn-2'>
                <button>OUR SERVICES <i className="fas fa-arrow-down"></i> </button>
            </div>    
          </div>
          {/* Third Content */}
          <div className="third-content">
            <h3>Botspot AI offers our customer a  wealth and technical and business expertise. We create diverse, complex, web and mobile sollutions for any business need. Our knowldge and experiences transkate to added value and peace of mind for our customer.</h3>
            <div className="services"><h3>Who We Serve</h3></div>
            <h3>Botspot AI serves businesses in all major sectors, providing exceptional software solutions for large corporation, mid-sized and startups. we use industry specific knowledge and custom tailor our products to each customer's unique needs</h3>
            <div className="cards">
                <div className="card-1">
                    <i className="fas fa-hand-holding-usd"></i>
                    <h2>Finance and Insaurance</h2>
                </div>
                <div className="card-1">
                    <i className="fas fa-heartbeat"></i>
                    <h2>Healthcare</h2>
                </div>
                <div className="card-1">
                    <i className="fas fa-hammer"></i>
                    <h2>Construction</h2>
                </div>
                <div className="card-1">
                    <i className="fas fa-shopping-cart"></i>
                    <h2>Wholesale and retail</h2>
                </div>
                <div className="card-1">
                    <i className="fas fa-user-graduate"></i>
                    <h2>Education</h2>
                </div>
                <div className="card-1">
                    <i className="fas fa-lightbulb"></i>
                    <h2>Energy and resources</h2>
                </div>
                <div className="card-1">
                    <i className="fas fa-theater-masks"></i>
                    <h2>Entertainment</h2>
                </div>
                <div className="card-1">
                    <i className="fas fa-bus"></i>
                    <h2>Transportaion</h2>
                </div>
            </div>
          </div>
          
        </>
    )
}

export default Content;
