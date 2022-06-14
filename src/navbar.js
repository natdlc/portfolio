const Navbar = () => {
	const main = document.getElementsByTagName("main")[0];

	const navbarBtn = document.createElement("a");
	const navbarBtnShapes = document.createElement("div");
	navbarBtnShapes.classList.add("navbar_btn_shapes");
	navbarBtn.classList.add("navbar_btn");

	navbarBtn.appendChild(navbarBtnShapes);

	const navbar = document.createElement("div");
	navbar.classList.add("navbar");

	const menu = document.createElement("div");
	menu.classList.add("navbar_menu");

	const closeBtn = document.createElement("a");
	closeBtn.classList.add("close_btn");
	closeBtn.innerText = "Close";

	navbar.appendChild(closeBtn);

	navbar.appendChild(menu);

	//home
	const homeLink = document.createElement("a");
	homeLink.innerText = "Home";
	homeLink.href = "#home";
	homeLink.addEventListener("click", (e) => {
		navbar.classList.remove("collapsed");
	});
	menu.appendChild(homeLink);

	//about
	const aboutLink = document.createElement("a");
	aboutLink.innerText = "About";
	aboutLink.href = "#about";
	aboutLink.addEventListener("click", (e) => {
		navbar.classList.remove("collapsed");
	});
	menu.appendChild(aboutLink);

	//tech stack
	const techStackLink = document.createElement("a");
	techStackLink.innerText = "Tech Stack";
	techStackLink.href = "#tech-stack";
	techStackLink.addEventListener("click", (e) => {
		navbar.classList.remove("collapsed");
	});
	menu.appendChild(techStackLink);

	//process
	const processLink = document.createElement("a");
	processLink.innerText = "Process";
	processLink.href = "#process";
	processLink.addEventListener("click", (e) => {
		navbar.classList.remove("collapsed");
	});
	menu.appendChild(processLink);

	//projects
	const projectsLink = document.createElement("a");
	projectsLink.innerText = "Projects";
	projectsLink.href = "#projects";
	projectsLink.addEventListener("click", (e) => {
		navbar.classList.remove("collapsed");
	});
	menu.appendChild(projectsLink);

	const contactLink = document.createElement("a");
	contactLink.innerText = "Contact";
	contactLink.href = "#contact";
	contactLink.addEventListener("click", (e) => {
		navbar.classList.remove("collapsed");
	});
	menu.appendChild(contactLink);

	closeBtn.addEventListener("click", (e) => {
    navbar.classList.remove("collapsed");
    document.querySelector(".scroll-top").classList.add("visible");
    
	});
  
	navbarBtn.addEventListener("click", (e) => {
    navbar.classList.add("collapsed");
    document.querySelector(".scroll-top").classList.remove("visible");
	});

	main.appendChild(navbarBtn);
	main.appendChild(navbar);
};

export default Navbar;
