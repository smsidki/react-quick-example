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
					<p><a href="http://www.everythingaboutweb.com">everything about web</a> &copy; 2012</p>
				</footer>
			</div>
		);
	}
}