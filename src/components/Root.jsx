import React, { Component } from 'react';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>


        <div className="site-wrap">

          <div className="site-navbar mt-4">
            <div className="container py-1">
              <div className="row align-items-center">
                <div className="col-8 col-md-8 col-lg-4">
                  <h1 className="mb-0">
                    <a
                      href="index.html"
                      className="text-white h2 mb-0"
                    >
                      <strong>Radios<span className="text-primary">.</span></strong></a></h1>
                </div>
                <div className="col-4 col-md-4 col-lg-8">
                  <nav className="site-navigation text-right text-md-right" role="navigation">

                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <a href="#" className="site-menu-toggle js-menu-toggle text-white">
                        <span className="icon-menu h3" />

                      </a></div>

                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li><a href="dj.html">DJs</a></li>
                      <li className="has-children">
                        <a href="#">Trending</a>
                        <ul className="dropdown arrow-top">
                          <li><a href="#">Top 20 of The Week</a></li>
                          <li><a href="#">Featured Artist</a></li>
                          <li><a href="#">Interviews</a></li>
                          <li className="has-children">
                            <a href="#">Sub Menu</a>
                            <ul className="dropdown">
                              <li><a href="#">Menu One</a></li>
                              <li><a href="#">Menu Two</a></li>
                              <li><a href="#">Menu Three</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="events.html">Events</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>


              </div>
            </div>
          </div>
        </div>

        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>

        <div
          className="site-blocks-cover overlay"
          style={{ backgroundImage: "url('images/hero_bg_3.jpg')" }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
          data-aos="fade"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay="400">
                <h1>Listen &mdash; On-Air Now</h1>
                <p className="mb-4"><span
                  className="small"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></p>

                <div id="playerContainer" />

              </div>
            </div>
          </div>
        </div>

        <div className="pb-5" style={{ marginTop: '-100px' }}>
          <div className="container-fluid">

            <div className="row no-gutters">
              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="unit-9">
                  <div className="image" style={{ backgroundImage: "url('images/img_1.jpg')" }} />
                  <div className="unit-9-content">
                    <h2>Art Gossip</h2>
                    <span>Friday 1:00pm &mdash; 2:30pm</span>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <a href="#" className="unit-9">
                  <div className="image" style={{ backgroundImage: "url('images/img_2.jpg')" }} />
                  <div className="unit-9-content">
                    <h2>Good Morning Show</h2>
                    <span>Friday 1:00pm &mdash; 2:30pm</span>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                <a href="#" className="unit-9">
                  <div className="image" style={{ backgroundImage: "url('images/img_3.jpg')" }} />
                  <div className="unit-9-content">
                    <h2>Blues Radio</h2>
                    <span>Friday 1:00pm &mdash; 2:30pm</span>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                <a href="#" className="unit-9">
                  <div className="image" style={{ backgroundImage: "url('images/img_4.jpg')" }} />
                  <div className="unit-9-content">
                    <h2>Classic Songs</h2>
                    <span>Friday 1:00pm &mdash; 2:30pm</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">

          <div className="container">

            <div className="row">
              <div
                className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                data-aos="fade-up"
              >
                <h2 className="mb-5">Weekly Radio Program</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati
                                fuga itaque
                                deserunt officia, error reiciendis ab quod?</p>
              </div>
            </div>

            <div className="site-block-retro d-block d-md-flex">

              <a href="#" className="col1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100">
                <div className="image" style={{ backgroundImage: "url('images/img_2.jpg')" }} />
                <div className="unit-9-content">
                  <h2>Classic Songs For Classic People</h2>
                  <span>Friday 1:00pm &mdash; 2:30pm</span>
                </div>
              </a>

              <div className="col2 ml-auto">

                <a href="#" className="col2-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="200">
                  <div className="image" style={{ backgroundImage: "url('images/img_3.jpg');" }} />
                  <div className="unit-9-content">
                    <h2>Classic Songs For Classic People</h2>
                    <span>Friday 1:00pm &mdash; 2:30pm</span>
                  </div>
                </a>

                <a href="#" className="col2-row2 unit-9 no-height" data-aos="fade-up" data-aos-delay="300">
                  <div className="image" style={{ backgroundImage: "url('images/img_1.jpg');" }} />
                  <div className="unit-9-content">
                    <h2>Classic Songs For Classic People</h2>
                    <span>Friday 1:00pm &mdash; 2:30pm</span>
                  </div>
                </a>

              </div>

            </div>

          </div>
        </div>


        <div className="site-section bg-light block-13">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h2 className="mb-5">Love By Our Listeners</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati
                                fuga itaque
                                deserunt officia, error reiciendis ab quod?</p>
              </div>
            </div>
            <div className="nonloop-block-13 owl-carousel">

              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="">
                  <h3 className="font-weight-light h5">Megan Smith</h3>
                  <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Et, iusto.
                                    Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                </div>
              </div>

              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="">
                  <h3 className="font-weight-light h5">Brooke Cagle</h3>
                  <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Et, iusto.
                                    Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                </div>
              </div>

              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_3.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="">
                  <h3 className="font-weight-light h5">Philip Martin</h3>
                  <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Et, iusto.
                                    Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                </div>
              </div>

              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="">
                  <h3 className="font-weight-light h5">Steven Ericson</h3>
                  <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Et, iusto.
                                    Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                </div>
              </div>

              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="">
                  <h3 className="font-weight-light h5">Nathan Dumlao</h3>
                  <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Et, iusto.
                                    Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                </div>
              </div>

              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_4.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="">
                  <h3 className="font-weight-light h5">Brook Smith</h3>
                  <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Et, iusto.
                                    Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div
          className="site-blocks-cover overlay inner-page-cover subscribe"
          style={{ backgroundImage: 'url(images/hero_bg_4.jpg);' }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <h2>Subscribe</h2>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit nihil saepe
                                libero sit odio
                                obcaecati veniam.</p>
                <form action="#" method="post" className="site-block-subscribe">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-secondary text-white bg-transparent"
                      placeholder="Enter your email"
                      aria-label="Enter Email"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button" id="button-addon2">Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h2 className="mb-5">Our DJs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati
                                fuga itaque
                                deserunt officia, error reiciendis ab quod?</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_1.jpg" alt="Image" className="img-fluid" />

                  <div className="text">

                    <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit
                                        nemo.</p>
                    <p>
                      <a href="#" className="text-white p-2"><span
                        className="icon-facebook"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-twitter"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-linkedin"
                      /></a>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_2.jpg" alt="Image" className="img-fluid" />

                  <div className="text">

                    <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit
                                        nemo.</p>
                    <p>
                      <a href="#" className="text-white p-2"><span
                        className="icon-facebook"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-twitter"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-linkedin"
                      /></a>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_3.jpg" alt="Image" className="img-fluid" />

                  <div className="text">

                    <h2 className="mb-2 font-weight-light h4">Philip Martin</h2>
                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit
                                        nemo.</p>
                    <p>
                      <a href="#" className="text-white p-2"><span
                        className="icon-facebook"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-twitter"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-linkedin"
                      /></a>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_4.jpg" alt="Image" className="img-fluid" />

                  <div className="text">

                    <h2 className="mb-2 font-weight-light h4">Steven Ericson</h2>
                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit
                                        nemo.</p>
                    <p>
                      <a href="#" className="text-white p-2"><span
                        className="icon-facebook"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-twitter"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-linkedin"
                      /></a>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_5.jpg" alt="Image" className="img-fluid" />

                  <div className="text">

                    <h2 className="mb-2 font-weight-light h4">Nathan Dumlao</h2>
                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit
                                        nemo.</p>
                    <p>
                      <a href="#" className="text-white p-2"><span
                        className="icon-facebook"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-twitter"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-linkedin"
                      /></a>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_6.jpg" alt="Image" className="img-fluid" />

                  <div className="text">

                    <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit
                                        nemo.</p>
                    <p>
                      <a href="#" className="text-white p-2"><span
                        className="icon-facebook"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-twitter"
                      /></a>
                      <a href="#" className="text-white p-2"><span
                        className="icon-linkedin"
                      /></a>
                    </p>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div
                className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                data-aos="fade-up"
              >
                <h2 className="mb-5">News &amp; Events</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati
                                fuga itaque
                                deserunt officia, error reiciendis ab quod?</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <a href="#"><img src="images/img_4.jpg" alt="Image" className="img-fluid" /></a>
                <div className="p-4 bg-white">
                  <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                  <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam
                                    quae sunt, voluptatum reprehenderit deserunt illum rem.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <a href="#"><img src="images/img_2.jpg" alt="Image" className="img-fluid" /></a>
                <div className="p-4 bg-white">
                  <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                  <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam
                                    quae sunt, voluptatum reprehenderit deserunt illum rem.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <a href="#"><img src="images/img_3.jpg" alt="Image" className="img-fluid" /></a>
                <div className="p-4 bg-white">
                  <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                  <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam
                                    quae sunt, voluptatum reprehenderit deserunt illum rem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary" data-aos="fade">
          <div className="container">
            <div className="row">
              <a href="#" className="col-2 text-center py-4 social-icon d-block"><span
                className="icon-facebook text-white"
              /></a>
              <a href="#" className="col-2 text-center py-4 social-icon d-block"><span
                className="icon-twitter text-white"
              /></a>
              <a href="#" className="col-2 text-center py-4 social-icon d-block"><span
                className="icon-instagram text-white"
              /></a>
              <a href="#" className="col-2 text-center py-4 social-icon d-block"><span
                className="icon-linkedin text-white"
              /></a>
              <a href="#" className="col-2 text-center py-4 social-icon d-block"><span
                className="icon-pinterest text-white"
              /></a>
              <a href="#" className="col-2 text-center py-4 social-icon d-block"><span
                className="icon-youtube text-white"
              /></a>
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">About Radios</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur
                                    reprehenderit vero
                                    atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum
                                    totam quis
                                    blanditiis, minima minus odio!</p>
                </div>


              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Navigations</h3>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-unstyled">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">DJs</a></li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Top 20 of the week</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-unstyled">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Membership</a></li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Follow Us</h3>

                    <div>
                      <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">Watch Live Streaming</h3>

                  <div className="block-16">
                    <figure>
                      <img
                        src="images/img_1.jpg"
                        alt="Image placeholder"
                        className="img-fluid rounded"
                      />
                      <a
                        href="https://vimeo.com/channels/staffpicks/93951774"
                        className="play-button popup-vimeo"
                      ><span className="icon-play" /></a>
                    </figure>
                  </div>

                </div>


              </div>

            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                                Copyright &copy;
                  <script
                    data-cfasync="false"
                    src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                  />
                  <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | This template is made with <i
                                  className="icon-heart text-danger"
                                  aria-hidden="true"
                  ></i> by <a
                                  href="https://colorlib.com" target="_blank"
                                >Colorlib</a>
                </p>
              </div>

            </div>
          </div>
        </footer>


        <script src="js/jquery-3.3.1.min.js" />
        <script src="js/jquery-migrate-3.0.1.min.js" />
        <script src="js/jquery-ui.js" />
        <script src="js/popper.min.js" />
        <script src="js/bootstrap.min.js" />
        <script src="js/owl.carousel.min.js" />
        <script src="js/mediaelement-and-player.min.js" />
        <script src="js/jquery.stellar.min.js" />
        <script src="js/jquery.countdown.min.js" />
        <script src="js/jquery.magnific-popup.min.js" />
        <script src="js/bootstrap-datepicker.min.js" />
        <script src="js/aos.js" />
        <script src="js/circleaudioplayer.js" />

        <script src="js/main.js" />

      </body>
    );
  }
}

export default Root;
