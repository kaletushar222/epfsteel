import Logo from '../assets/images/logo.png';

function Banner() {
    return (
        <section id="hero" class="d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                        <img src={Logo} style={{ marginTop: "-7px", alignSelf: "center", width : "250px" }} alt="Logo" className="img-fluid" />
                    </div>
                    <div class="col-lg-1 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">

                    </div>
                    <div class="col-lg-8 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                        <br/><br/>
                        <h1>Engineering Projects and Fabrication</h1>
                        <h2>Projecting in future !!</h2>
                    </div>
                </div>
                {/* <img src={Logo} style={{ marginTop: "-7px" }} alt="Logo" className="img-fluid" /> */}
            </div>
        </section>
    );
}

export default Banner;
