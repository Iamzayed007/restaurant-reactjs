import React from 'react';
import background from '../../image/bannerbackground.png'

const Banner = () => {
    return (
        <div claName="container">
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src={background} alt="img" />
                        <div className="banner-item">
                            <h1>Best Food waiting for your belly</h1>
                            <div className="search">

                                <input type="text" className="form-control" placeholder="Search" />
                                <button type="submit" className="btn btn-danger" > Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;