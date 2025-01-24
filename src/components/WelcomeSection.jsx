import React from "react";

const WelcomeSection = () => (
    <section style={welcomeStyles}>
        <div style={textContainerStyles}>
            <h1 style={greetingStyles}>Hello, I`m</h1>
            <h2 style={introStyles}>
                <span style={nameStyles}>Ivan Ivanov</span>
            </h2>
            <h3 style={jobTitleStyles}>Front-end developer and UI/UX Designer</h3>
        </div>
        <div style={imageContainerStyles}>
            <img src="../../public/sticker_welcome.webp" alt="Profile" style={imageStyles} />
        </div>
    </section>
);

const welcomeStyles = {
    display: "flex",
    alignItems: "center", // Выравнивает элементы по вертикали
    justifyContent: "space-between", // Распределяет текст и картинку по краям
    height: "100vh", // Высота блока на весь экран
    padding: "0 20px", // Добавляет отступы по бокам контейнера
};

const textContainerStyles = {
    maxWidth: "100%",
};

const greetingStyles = {
    fontSize: "3rem",
    margin: "0",
};

const introStyles = {
    fontSize: "4rem",
    margin: "10px 0",
};

const nameStyles = {
    fontWeight: "bold",
    color: "#5692da",
};

const jobTitleStyles = {
    fontSize: "1.5rem",
    margin: "10px 0",
    color: "#555",
};

const imageContainerStyles = {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "20px",
};

const imageStyles = {
    maxWidth: "400px",
    width: "100%",
    height: "auto",
};

export default WelcomeSection;
