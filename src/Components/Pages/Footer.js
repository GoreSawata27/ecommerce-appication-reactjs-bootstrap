import React from 'react'
export default function Footer() {
    return (
        <>
            <footer class=" shadow-lg  bg-white rounded text-center text-lg-start bg-light text-muted">
                {/* <!-- Section: So/cial media --> */}
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div class="me-5 d-none d-lg-block">
                        {/* <span>Get connected with us on social networks:</span> */}
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="https://www.linkedin.com/in/sawata-gore-666b9a21b/" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/GoreSawata27" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div class="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>E-Buy
                                </h6>
                                <p>
                                    Our website allows people to buy products over the internet rather than at a brick-and-mortar location.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="/" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="/" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="/" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="/" class="text-reset">Help</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i> At Post Bori , Parbhani</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    sawatagore27@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> 9158827061</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div class="text-center p-4" style={{backgroundColor:' rgba(0, 0, 0, 0.05)'}}>
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">E-Buy</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>



        </>
    )
}
