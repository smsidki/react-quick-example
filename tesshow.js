[code language="javascript"]
class MainLayout extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<header>
					<div className="logo">
						<img
							src="everything-about-web.png"
							width="394"
							height="146"
							alt="everything about web"
						/>
					</div>
					<Navigation/>
				</header>
				<Content/>
				<Sidebar/>
				<footer>
					<p><a href="http://www.everythingaboutweb.com">everything about web</a> © 2012</p>
				</footer>
			</div>
		);
	}
}
[/code]
[code language="javascript"]
class Navigation extends React.Component {
	render() {
		return(
			<div>
				<nav>
					<ul>
						<li className="highlight"><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Tutorials</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</nav>
			</div>
		);
	}
}
[/code]
[code language="javascript"]
class Content extends React.Component {
	render() {
		return(
			<div className="content">
				<h1>Learning HTML 5 The Two-Column Layout</h1>
				<section>
					<article>
						<h2>Heading</h2>
						<p>
							Genuine investments university art purebred investments. Imported property 
							philanthropic estate, designer, first-class educated dynasty luxury purebred manor high-rise enthusiast. 
							Inspiring diplomatatic pedigree wine vacation cutlery genuine wine handmade. Repertoire panoramic townhome, 
							enthusiast, pearl gilded brilliant gentlemen, charity purebred. Impressive investments crafted, accredited, 
							marquis affluent repertoire doctoral, enthusiast.
						</p>
					</article>
					<article>
						<h2>Heading</h2>
						<p>
							Using cutlery fashion suite, portfolio guests fashion dynasty, wine rare 
							investments a. Affluent sport noble first-class, sterling butler. European, townhome travel university, 
							stockmarket in bonds art educated presidential le panoramic brokerage. Fashion with wealth le marquis townhome 
							classical suite property auction purebred.
						</p>
					</article>
				</section>
			</div>
		);
	}
}
[/code]
[code language="javascript"]
class Sidebar extends React.Component {
	render() {
		return(
			<div className="sidebar">
	            <aside>
		            <h2>Recent Posts</h2>
		            <h3>Subheading</h3>
		            <p>This is a short description.</p>
		            <h3>Subheading</h3>
		            <p>This is a short description.</p>
		            <h3>Subheading</h3>
		            <p>This is a short description.</p>
	            </aside>
            </div>
		);
	}
}
[/code]