import React from 'react'
import './style.css'

function ShowTemp({text}) {
    return (
        <div className='main'>
            <div className='card'>
                    <div className="card-body">
                        <h5 className="card-title">Description</h5>
                        <p className="card-text">{text.description}</p>
                    </div>
            </div>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Temperature</h5>
                        <p className="card-text">{text.temp} K</p>
                    </div>
            </div>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Maximum Temperature</h5>
                        <p className="card-text">{text.max_temp} K</p>
                    </div>
            </div>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Minimum Temperature</h5>
                        <p className="card-text">{text.min_temp} K</p>
                    </div>
            </div>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Humidity</h5>
                        <p className="card-text">{text.humidity}</p>
                    </div>
            </div>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Sunrise</h5>
                        <p className="card-text">{text.sunrise}</p>
                    </div>
            </div>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Sunset</h5>
                        <p className="card-text">{text.sunset}</p>
                    </div>
            </div>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Country</h5>
                        <p className="card-text">{text.country}</p>
                    </div>
            </div>
        </div>
    )
}

export default ShowTemp