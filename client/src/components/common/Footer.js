const Footer = () => {
	const link = "https://github.com/Rakesh8969Engineer";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Rakesh Ranjan Ray
			<a href={link} target={target}>
			https://github.com/Rakesh8969Engineer
			</a>
		</div>
	);
};

export default Footer;
