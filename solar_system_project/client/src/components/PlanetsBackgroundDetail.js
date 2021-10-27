import React from "react";
import '../App.css';

const PlanetsBackgroundDetail = () => {


    return (
            <div className='space'>

                <iframe className="mercury_vid" src="https://www.youtube.com/embed/rX_NCCpw5Uo" frameborder="0" widt="100%" height="100%" allowFullScreen allow='autoplay; fullscreen'></iframe>
                    <div className='mercury'>
                        <p className='mercury_p'>Click on Mercury to learn more!</p>
                    </div>

                <iframe className="venus_vid" src="https://www.youtube.com/embed/5v5prMW3AzA" frameborder="0" widt="100%" height="100%" allowFullScreen allow='autoplay; fullscreen'></iframe>
                    <div className='venus'>
                        <p className='venus_p'>Click on Venus to learn more!</p>
                    </div>

                {/* <a href="https://www.youtube.com/watch?v=5v5prMW3AzA">
                    <div className='venus'>
                    <p className='venus_p'>Click on Venus to learn more!</p>
                    </div>
                </a> */}

                <a href="https://www.youtube.com/watch?v=v9CRt3-bns0">
                    <div className='earth'>
                    <p className='earth_p'>Click on Earth to learn more!</p>
                    </div>
                </a>

                <a href="https://www.youtube.com/watch?v=H19V4w2P7fE">
                    <div className='mars'>
                    <p className='mars_p'>Click on Mars to learn more!</p>
                    </div>
                </a>

                <a href="https://www.youtube.com/watch?v=PtkqwslbLY8">
                    <div className='jupiter'>
                    <p className='jupiter_p'>Click on Jupiter to learn more!</p>
                    </div>
                </a>

                <a href="https://www.youtube.com/watch?v=vlb-b5ch81k">
                    <div className='saturn'>
                    <p className='saturn_p'>Click on Saturn to learn more!</p>
                    </div>
                </a>

                <a href="https://www.youtube.com/watch?v=m4NXbFOiOGk">
                    <div className='uranus'>
                    <p className='uranus_p'>Click on Uranus to learn more!</p>
                    </div>
                </a>

                <a href="https://www.youtube.com/watch?v=NStn7zZKXfE">
                    <div className='neptune'>
                    <p className='neptune_p'>Click on Neptune to learn more!</p>
                    </div>
                </a>

            </div>

    )
}

export default PlanetsBackgroundDetail;