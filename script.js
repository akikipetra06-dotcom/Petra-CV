document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // 1. Remove 'active' class from all navigation links
            navLinks.forEach(nav => nav.classList.remove("active"));
            
            // 2. Add 'active' class to the clicked navigation link
            link.classList.add("active");

            // 3. Hide all content sections
            contentSections.forEach(section => section.classList.remove("active"));

            // 4. Show the section that matches the data-target attribute
            const targetId = link.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});