function NavBar(){
    return(
        <header id="fh5co-header-section" className="sticky-banner">
			<div className="container">
				<div className="nav-header">
					<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
					<h1 id="fh5co-logo"><a href="/">Decor By Karyn</a></h1>
				
					<nav id="fh5co-menu-wrap" role="navigation">
						<ul className="sf-menu" id="fh5co-primary-menu">
							<li className="active"><a href="/" >Home</a></li>
							<li><a href="/gallery">Gallery</a></li>
							<li><a href="/blog">Contact Us</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>        
    );
}

export default NavBar;