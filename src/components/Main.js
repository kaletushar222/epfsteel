import { BookmarkStarFill, EnvelopeAtFill, GeoAltFill, PhoneFill } from 'react-bootstrap-icons';
import { Link } from "react-scroll";
import ValueImage from '../assets/images/value.jpg';
import { useState } from 'react';

function Main() {

    const [ selectedCategory, setSelectedCategory ] = useState("INDUSTRIAL_SUPPLIES")
    
    return (
        <main id="main">

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                Engineering Projects and Fabrication is a renowned company occupied in the business of manufacturing Engineering Products, which include Boiler Parts, ESP Parts and accessories.
                                <br/><br/>
                                The company is engaged in manufacturing Pressure and Non- Pressure Parts of Boilers, besides manufacturing the Collecting Plates, Emitting Electrodes, and Tadpoles for Bottom and Top; and other spare parts of ESP – Electro Static Precipitator. 
                                <br/><br/>
                                The company is known for executing the supplies in the time bound manner and they are enjoying repeat orders of their regular clients. 
                                <br/><br/>
                            </p>
                            <a href="#contact" className="btn-learn-more">Learn More</a>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                                The transparent functioning of their business dealing and ethical business operations has made them a natural choice for their clients for their critical and regular requirements among the competitors. 
                            <br/><br/>
                                Engineering Projects and Fabrication is a team of professionals backed with ample experience of the manufacturing techniques. They are fully equipped to fulfil the needs of their clients in a highly professional way. 
                            <br/><br/>
                                The company is also undertaking the site job work which spreads over the piping laydown, Boiler Shutdowns, ESP refurbishments, Paint Shops, Fire Hydrants and the erection installation of the Equipments. 
                        </div>
                    </div>

                </div>
            </section>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>We are a reputed fabrication house undertaking all on-site, off-site fabrication and shut-down activities. We are equipped for any maintenance activity in Utilities, Mechanical and Projects.</p>
                    </div>

                    <div className="row reveal">
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">Boiler Pressure Parts and their replacement, specialize in Boiler shutdown work</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Electrostatic Precipitators (ESP) – Parts and their replacement / Field alignment</a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Scrubbers and Bag House</a></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">Piping and structures</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Construction of SS / MS Tanks and Chimneys</a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Conveyors and Trolleys</a></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">Designing, fabrication and Erection of Sheds , Gates and steel Doors</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Fabrication and development of parts as per drawings ( tailor-made )</a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Fabrication of sheet metal , Aluminium with glass fittings</a></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">Rollers, Buckets, shafts and other machined items</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Consumables like Filters, Rubber Rollers, Filter Bags</a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Dynamical Balancing of Fans</a></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="why-us">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" >
                            <img src={ValueImage} className="img-fluid reveal" alt="" style={{ height: "300px" }} />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left"  style={{ padding: "2%" }}>
                            <br />
                            <h3>Our Values </h3>
                            <br />
                            <p className="fst-italic">
                                <ul>
                                    <li><BookmarkStarFill size={25} color="#684dfb" />&nbsp; Quality</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="#684dfb" />&nbsp; Customer Satisfaction and Deliver Exceptional Service</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="#684dfb" />&nbsp; Integrity</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="#684dfb" />&nbsp; Operate With Excellence</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">

                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-start">
                            <h3>Call To Action</h3>
                            <br />
                            <p>
                                Whether you're looking to prototype a groundbreaking invention, fabricate custom parts, or explore innovative solutions, we have the expertise and state-of-the-art facilities to meet your needs. Our team is committed to delivering excellence, precision, and timely results for every project we undertake.
                                <br/><br/>
                                Don't wait any longer! Contact us today to discuss your engineering requirements, receive a personalized quote, or schedule a consultation with our experts. We are here to listen to your ideas, provide guidance, and bring your visions to life.
                            </p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <Link
                                activeclassName=""
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="cta-btn align-middle"
                            >
                                Call To Action
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
            <section id="contact" className="contact section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Thank you for your interest in our services. Please send an email to us with your contact information and a brief message about your inquiry. We will get back to you as soon as possible. Thank you!</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <GeoAltFill size={35}/>
                                    <h4>Branch Office</h4>
                                    <p>
                                        Office No. 321, Tower D,
                                        Chandigarh City Centre,
                                        Zirakpur - 140603, Punjab
                                    </p>
                                </div>
                                <div className="address">
                                    <GeoAltFill size={35}/>
                                    <h4>Registerred Office</h4>
                                    <p>
                                        Village - Bhagwanpura, Barwala Road,
                                        DeraBassi
                                        Punjab - 140507
                                    </p>
                                </div>

                                <div className="email">
                                    <EnvelopeAtFill size={35} />
                                    <h4>Email:</h4>
                                    <p>
                                        sales@epfsteel.com
                                    </p>
                                </div>

                                <div className="phone">
                                    <PhoneFill  size={35}  />
                                    <h4>Call:</h4>
                                    <p>
                                        +91 - 7696672502
                                        <br/>
                                        +91 - 98144 12360
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.3413675453669!2d76.81626023563389!3d30.623656095191542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fead1b4c5ad41%3A0xde4256f38f066c10!2sTower-D%2C%20Affinity%20Greens%2C%20Punjab%20140603!5e0!3m2!1sen!2sin!4v1680121420471!5m2!1sen!2sin"
                                frameborder="0"
                                height="600"
                                width="800"
                                allowfullscreen>
                            </iframe>
                        </div>

                    </div>

                </div>
            </section>

        </main>

    )
}

export default Main