import React, { useState } from "react";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);

        // Меняем класс на элементе body
        if (!isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header style={headerStyles}>
            <div style={navContainer}>
                <h1
                    style={logoStyles}
                    onClick={() => scrollToSection("top")} // Переход к началу страницы
                >
                    WebSite Portfolio
                </h1>
                <nav style={navStyles}>
                    <button style={navButtonStyles} onClick={() => scrollToSection("about")}>
                        About Me
                    </button>
                    <button style={navButtonStyles} onClick={() => scrollToSection("projects")}>
                        Projects
                    </button>
                    <button style={navButtonStyles} onClick={() => scrollToSection("statistics")}>
                        Statistics
                    </button>
                    <button style={navButtonStyles} onClick={() => scrollToSection("contact")}>
                        Contact
                    </button>
                </nav>
                <div style={rightSectionStyles}>
                    {/* Социальные иконки */}
                    <div style={socialIconsStyles}>
                        <a
                            href="https://github.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={iconLinkStyles}
                        >
                            <img src="../../public/github.png" alt="GitHub" style={iconStyles} />
                        </a>
                        <a
                            href="https://linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={iconLinkStyles}
                        >
                            <img src="../../public/linkedin.png" alt="LinkedIn" style={iconStyles} />
                        </a>
                        <a
                            href="https://behance.net/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={iconLinkStyles}
                        >
                            <img src="../../public/behance.png" alt="Behance" style={iconStyles} />
                        </a>
                    </div>
                    {/* Кнопка скачивания CV */}
                    <a href="/cv.pdf" download style={downloadButtonStyles}>
                        Download CV
                    </a>
                    {/* Кнопка переключения темы */}
                    <button onClick={toggleTheme} style={themeToggleButtonStyles}>
                        {isDarkMode ? "☀️" : "🌙"}
                    </button>
                </div>
            </div>
        </header>
    );
};

const headerStyles = {
    width: "100%",
    background: "var(--bg-color)",
    color: "var(--text-color)",
    padding: "10px 20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    cursor: "pointer",
};

const navContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
};

const logoStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
    cursor: "pointer",
};

const navStyles = {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center", // Центрирование меню
};

const navButtonStyles = {
    background: "none",
    border: "none",
    color: "var(--text-color)",
    fontSize: "1rem",
    cursor: "pointer",
    marginLeft: "20px",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background 0.3s ease",
};

const rightSectionStyles = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
};

const downloadButtonStyles = {
    background: "var(--button-bg)",
    color: "var(--color-text)",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
};

const socialIconsStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
};

const iconLinkStyles = {
    textDecoration: "none",
};

const iconStyles = {
    width: "28px",
    height: "28px",
};

const themeToggleButtonStyles = {
    background: "var(--button-bg)",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.5rem",
};

export default Header;
