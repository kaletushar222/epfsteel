import { BookmarkStarFill, EnvelopeAtFill, GeoAltFill, PhoneFill } from 'react-bootstrap-icons';
import React, { useState } from 'react';
import { Link } from "react-scroll";
import CustomModal from './CustomModal.js'

import ValueImage from '../assets/images/value.jpg';
// A catalog
import CoilBend from '../assets/images/A CATALOGUE FILE 1/A Pressure and Non Pressure Parts of Boilers/1 COIL BEND.jpg';
import EconomiserCoils from '../assets/images/A CATALOGUE FILE 1/A Pressure and Non Pressure Parts of Boilers/3 ECONOMISER COILS.jpg';
import BFerrules from '../assets/images/A CATALOGUE FILE 1/B Ferrules/1.jpg';
import AirNozzle from '../assets/images/A CATALOGUE FILE 1/C Air Nozzle/3 AIR NOZZLES.jpg';
import CoalNozzleComplete from '../assets/images/A CATALOGUE FILE 1/D Coal Nozzle Complete/1 COAL NOZZLE COMPLETE.jpg';
import CoalNozzleCapPlate from '../assets/images/A CATALOGUE FILE 1/E  Coal Nozzle Cap plate/1 SS CAP PLATE.jpg';
import Ralv from '../assets/images/A CATALOGUE FILE 1/F RALV AND SCREW FEEDER/1 RALV.jpg';
import ScrewFeeder from '../assets/images/A CATALOGUE FILE 1/F RALV AND SCREW FEEDER/2 SCREW FEEDER.jpg';
import FanWithCasing from '../assets/images/A CATALOGUE FILE 1/G ID FD FANS WITH CASING/1 FAN WITH CASING.avif';
import Impellers from '../assets/images/A CATALOGUE FILE 1/H IMPELLERS/2 IMPELLERS.jpg';
import AirWasher from '../assets/images/A CATALOGUE FILE 1/I AIR WASHER/1 AIR WASHER.jpg';

//BCatalog
import EmittingElectrodes from '../assets/images/B CATALOGUE FILE 2/J COLLECTING ELECTRODES AND EMITTING ELECTRODES OF ESP/1 EMITTING ELECTRODES.jpg';
import CollectingElectrodes from '../assets/images/B CATALOGUE FILE 2/J COLLECTING ELECTRODES AND EMITTING ELECTRODES OF ESP/3 COLLECTING ELECTORDE.jpg';
import Tadpole from '../assets/images/B CATALOGUE FILE 2/K TADPOLE FOR BORROM AND TOP OF COLLECTING ELECTRODES/1 TADPOLE.jpeg';
import EspSpares from '../assets/images/B CATALOGUE FILE 2/L HAMMERS , INSULATORS, SHAFTS,DOORS AND ALL SPARES OF ESP/1 ESP SPARES.jpg';

//C Catalog
import MsChimney from '../assets/images/C CATALOGUE FILE 3/M BOILER CHIMNEY/2 MS CHIMNEY.jpg';
import AirPreheater from '../assets/images/C CATALOGUE FILE 3/N APH COMPLETE/1 AIR PREHEATER.jpg';
import Rollers from '../assets/images/C CATALOGUE FILE 3/O CONVEYOR ROLLERS CARRYING ROLLERS, RETURN ROLLERS, SELF ALIGN ROLLERS/1 ROLLERS.jpeg';


//D catalog
import TankWithAgitators from '../assets/images/D CATALOGUE FILE 4/R MS, SS STORAGE TANKS, HEATING COILS AND AGITATORS/1 TANK WITH AGITATORS.png';
import StorageTank from '../assets/images/D CATALOGUE FILE 4/R MS, SS STORAGE TANKS, HEATING COILS AND AGITATORS/2  STORAGE TANK.png';
import BeltConveyor from '../assets/images/D CATALOGUE FILE 4/S CONVRYOR GUARD , MOTOR GUARDS AND OTHER ROTARY GUARDS/1 BELT CONVEYOR GUARDS.jpg';
import ExpansionBellows from '../assets/images/D CATALOGUE FILE 4/T EXPANSION BELLOWS/1 EXPANSION BELLOWS.png';


function Main() {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelectProduct = (image, title) =>{
        setSelectedProduct({
            image: image,
            title: title
        })
        console.log(selectedProduct)
        handleShow()
    }
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
                        <div className="col-xl-4 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">Boiler Pressure Parts Replacement</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Specialized in Boiler Shutdown</a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">ESP- Electrostatic Precipitator - Repair and Replacement of Parts. </a></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-4 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">ESP - Field Alignment</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Scrubbers Repair and Replacement </a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Dismantling, Shifting and Erection Installation Of Industrial Equipments </a></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-4 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">Laydown of SS / MS Piping and Fittings</a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">SS Mirror Polishing and Buffing of SS Tanks and Parts </a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Belt Jointing ( Hot and Cold) for Ash Conveyor and Husk Conveyor </a></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-4 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">High Pressure Jet Cleaning of Tubes for Condenser, Heat Exchangers, Air Preheater ( APH) and all other tubes</a></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="products">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Products</h2>
                    </div>
                    <div className="row reveal">
                        <div className="col-xl-3 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div class="card" onClick={ () => handleSelectProduct(CoilBend, "Coil Bend") }>
                                <img class="card-img-top" height="200" width="100" src={CoilBend} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Coil Bend</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(EconomiserCoils, "ECONOMISER COILS") }>
                                <img class="card-img-top" height="200" width="100" src={EconomiserCoils} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">ECONOMISER COILS</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(BFerrules, "B Ferrules") } >
                                <img class="card-img-top" height="200" width="100" src={BFerrules} alt="B Ferrules" />
                                <div class="card-body">
                                    <h5 class="card-title">B Ferrules</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(CoalNozzleComplete, "Coal Nozzle Complete") }>
                                <img class="card-img-top" height="200" width="100" src={CoalNozzleComplete} alt="Coal Nozzle Complete" />
                                <div class="card-body">
                                    <h5 class="card-title">Coal Nozzle Complete</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-3 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div class="card" onClick={ () => handleSelectProduct(CoalNozzleCapPlate, "Coal Nozzle Cap Plate") }>
                                <img class="card-img-top" height="200" width="100" src={CoalNozzleCapPlate} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Coal Nozzle Cap Plate</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(Ralv, "Ralv") }>
                                <img class="card-img-top" height="200" width="100" src={Ralv} alt="Ralv" />
                                <div class="card-body">
                                    <h5 class="card-title">Ralv</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(ScrewFeeder, "Screw Feeder") }>
                                <img class="card-img-top" height="200" width="100" src={ScrewFeeder} alt="Screw Feeder" />
                                <div class="card-body">
                                    <h5 class="card-title">Screw Feeder</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(FanWithCasing, "Fan With Casing") }>
                                <img class="card-img-top" height="200" width="100" src={FanWithCasing} alt="Fan With Casing" />
                                <div class="card-body">
                                    <h5 class="card-title">Fan With Casing</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-3 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div class="card" onClick={ () => handleSelectProduct(Impellers, "Impellers") }>
                                <img class="card-img-top" height="200" width="100" src={Impellers} alt="Impellers" />
                                <div class="card-body">
                                    <h5 class="card-title">Impellers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(AirWasher, "Air Washer") }>
                                <img class="card-img-top" height="200" width="100" src={AirWasher} alt="Air Washer" />
                                <div class="card-body">
                                    <h5 class="card-title">Air Washer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(AirNozzle, "Air Nozzle") }>
                                <img class="card-img-top" height="200" width="100" src={AirNozzle} alt="AirNozzle" />
                                <div class="card-body">
                                    <h5 class="card-title">Air Nozzle</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(EmittingElectrodes, "Emitting Electrodes") }>
                                <img class="card-img-top" height="200" width="100" src={EmittingElectrodes} alt="Emitting Electrodes" />
                                <div class="card-body">
                                    <h5 class="card-title">Emitting Electrodes</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-3 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div class="card" onClick={ () => handleSelectProduct(CollectingElectrodes, "Collecting Electrodes") }>
                                <img class="card-img-top" height="200" width="100" src={CollectingElectrodes} alt="Collecting Electrodes" />
                                <div class="card-body">
                                    <h5 class="card-title">Collecting Electrodes</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(Tadpole, "Tadpole") }>
                                <img class="card-img-top" height="200" width="100" src={Tadpole} alt="Tadpole" />
                                <div class="card-body">
                                    <h5 class="card-title">Tadpole</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(EspSpares, "Esp Spares") }>
                                <img class="card-img-top" height="200" width="100" src={EspSpares} alt="Esp Spares" />
                                <div class="card-body">
                                    <h5 class="card-title">Esp Spares</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(MsChimney, "Ms Chimney") }>
                                <img class="card-img-top" height="200" width="100" src={MsChimney} alt="Ms Chimney" />
                                <div class="card-body">
                                    <h5 class="card-title">Ms Chimney</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-3 col-md-6  align-items-stretch" data-aos="zoom-in" >
                            <div class="card" onClick={ () => handleSelectProduct(AirPreheater, "Air Preheater") }>
                                <img class="card-img-top" height="200" width="100" src={AirPreheater} alt="Air Preheater" />
                                <div class="card-body">
                                    <h5 class="card-title">Air Preheater</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(Rollers, "Rollers") }>
                                <img class="card-img-top" height="200" width="100" src={Rollers} alt="Rollers" />
                                <div class="card-body">
                                    <h5 class="card-title">Rollers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(TankWithAgitators, "Tank With Agitators") }>
                                <img class="card-img-top" height="200" width="100" src={TankWithAgitators} alt="Tank With Agitators" />
                                <div class="card-body">
                                    <h5 class="card-title">Tank With Agitators</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(StorageTank, "Storage Tank") }>
                                <img class="card-img-top" height="200" width="100" src={StorageTank} alt="StorageTank" />
                                <div class="card-body">
                                    <h5 class="card-title">Storage Tank</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row reveal">
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(BeltConveyor, "Belt Conveyor") }>
                                <img class="card-img-top" height="200" width="100" src={BeltConveyor} alt="Belt Conveyor" />
                                <div class="card-body">
                                    <h5 class="card-title">Belt Conveyor Guards</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6  align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="card" onClick={ () => handleSelectProduct(ExpansionBellows, "Expansion Bellows") }>
                                <img class="card-img-top" height="200" width="100" src={ExpansionBellows} alt="Expansion Bellows" />
                                <div class="card-body">
                                    <h5 class="card-title">Expansion Bellows</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </section>

            <section id="our-values" className="section-bg" >
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6  align-items-center" data-aos="fade-right" >
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

                        <div className="col-lg-5  align-items-stretch">
                            <div className="info">
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
                                        +91 - 9876067941
                                        <br/>
                                        +91 - 9463279127
                                        <br/>
                                        +91 - 9814412360
                                        <br/>
                                        01762 294086
                                    </p>
                                </div>
                            </div>

                        </div>
                        { show && <CustomModal selectedProduct={selectedProduct} show={show} handleClose={handleClose} /> }
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex  align-items-stretch">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.645916102786!2d76.85352387632227!3d30.58753957465468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fbfd3f44da10d%3A0x5839d559db08ce87!2sDerabassi%20-%20Barwala%20Rd%2C%20Bhagat%20Singh%20Nagar%2C%20Dera%20Bassi%2C%20Punjab!5e0!3m2!1sen!2sin!4v1684182681146!5m2!1sen!2sin"
                                frameborder="0"
                                height="400"
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