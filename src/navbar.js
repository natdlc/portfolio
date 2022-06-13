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
  closeBtn.innerText = "✖";
  
  navbar.appendChild(closeBtn);
  
	navbar.appendChild(menu);
  
	const aboutLink = document.createElement("a");
	aboutLink.innerText = "About";
  menu.appendChild(aboutLink);
  
	const projectsLink = document.createElement("a");
	projectsLink.innerText = "Projects";
  menu.appendChild(projectsLink);
  
	const processLink = document.createElement("a");
	processLink.innerText = "Process";
  menu.appendChild(processLink);
  
	const techStackLink = document.createElement("a");
  techStackLink.innerText = "Tech Stack";
  menu.appendChild(techStackLink);
  
  closeBtn.addEventListener("click", (e) => {
    navbar.classList.remove("collapsed");
  })
  
  navbarBtn.addEventListener("click", e => {
    navbar.classList.add("collapsed");
  })
  
	main.appendChild(navbarBtn);
	main.appendChild(navbar);
	return "hello";
};

export default Navbar;
