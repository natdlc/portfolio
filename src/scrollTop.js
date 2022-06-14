const ScrollTop = () => {
	const main = document.getElementsByTagName("main")[0];

	const scrollTopBtn = document.createElement("a");
	scrollTopBtn.classList.add("scroll-top");
	scrollTopBtn.addEventListener("click", (e) => {
		window.scrollTo(0, 0);
	});

	const scrollTopShapes = document.createElement("div");
	scrollTopShapes.classList.add("scroll-top_shapes");
	scrollTopBtn.appendChild(scrollTopShapes);

	window.addEventListener("scroll", (e) => {
		if (window.scrollY <= 100) {
			scrollTopBtn.classList.remove("visible");
		} else if (window.scrollY > 100) {
			scrollTopBtn.classList.add("visible");
		}
	});
	main.appendChild(scrollTopBtn);
};

export default ScrollTop;
