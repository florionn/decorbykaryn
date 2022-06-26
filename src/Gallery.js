function Gallery(){
    return(<>
            <div className="fh5co-hero" data-section="home">
                <div className="fh5co-overlay"></div>
                <div className="fh5co-cover text-center" data-stellar-background-ratio="0.5">
                    <div className="display-t">
                        <div className="display-tc">
                            <div className="container">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="animate-box">
                                        <h2>Explore Our Gallery</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fh5co-gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h2>Event Gallery</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="gallery animate-box">
                                <a className="gallery-img image-popup image-popup" href="images/gallery-1.jpg"><img src="images/gallery-1.jpg" className="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></img></a>
                            </div>
                            <div className="gallery animate-box">
                                <a className="gallery-img image-popup" href="images/gallery-7.jpg"><img src="images/gallery-7.jpg" className="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></img></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery animate-box">
                                <a className="gallery-img image-popup" href="images/gallery-6.jpg"><img src="images/gallery-6.jpg" className="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></img></a>
                            </div>
                            <div className="gallery animate-box">
                                <a className="gallery-img image-popup" href="images/gallery-2.jpg"><img src="images/gallery-2.jpg" className="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></img></a>
                            </div>
                            <div className="gallery animate-box">
                                <a className="gallery-img image-popup" href="images/gallery-5.jpg"><img src="images/gallery-5.jpg" className="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></img></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery animate-box">
                                <a className="gallery-img image-popup" href="images/gallery-3.jpg"><img src="images/gallery-3.jpg" className="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></img></a>
                            </div>
                            <div className="gallery animate-box">
                                <a className="gallery-img image-popup" href="images/gallery-4.jpg"><img src="images/gallery-4.jpg" className="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>          
    );
}

export default Gallery;