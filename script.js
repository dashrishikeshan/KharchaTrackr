const mobileMenuQuery = window.matchMedia("(max-width: 820px)");

document.querySelectorAll(".site-header").forEach((header) => {
  const menuButton = header.querySelector(".menu-button");
  const menu = header.querySelector(".nav-links");

  if (!menuButton || !menu) {
    return;
  }

  const setMenuState = (isOpen) => {
    header.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  };

  menuButton.addEventListener("click", () => {
    setMenuState(!header.classList.contains("is-open"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  mobileMenuQuery.addEventListener("change", () => {
    setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
});

const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top";
backToTopButton.type = "button";
backToTopButton.setAttribute("aria-label", "Move to top");
backToTopButton.setAttribute("title", "Move to top");
backToTopButton.innerHTML = '<span aria-hidden="true">↑</span>';
document.body.append(backToTopButton);

const toggleBackToTop = () => {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 360);
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

toggleBackToTop();
window.addEventListener("scroll", toggleBackToTop, { passive: true });
