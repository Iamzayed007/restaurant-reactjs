import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousal = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img height="500px"
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/proxy/9TTK-nKAEHDFfEllJpG4E7SDbcyhYq67m5bxmUTPwJUFKp92KU4uDZeqhucQP1OKI5FEJYKds-tJqhfy5XP3Kl0PLu3qvmR1hRSZ2WZpAsKt_rfxE70Z668FMZTDEjYGGAjCpcjv4sLcPIuN?fbclid=IwAR2p50VXGPNQZpfhenp59NzS5KPzhXbBiiTCcoFZOBHbK1c5tAMs3COLi7c"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="500px"
                        className="d-block w-100 "
                        src="https://www.kiwitech.com/assets/images/industry/healthcare/banner.jpg?fbclid=IwAR1OYUGOd0OV99I9XIKe7mCphxZxLWTKKsQDL_4jrCWuJx5W0z9Vtry_tRI"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="500px"
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/proxy/Q8N5CaMPK2C4x8D7sLfUWPBH7SbZC8d3uBGyriBtFDcj80znqPSfKNhIDFGgTmkdPxT5BJcBX6gL5FeQ3tYx_NuUnTwTwQ?fbclid=IwAR2p50VXGPNQZpfhenp59NzS5KPzhXbBiiTCcoFZOBHbK1c5tAMs3COLi7c"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousal;