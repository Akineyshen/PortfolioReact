import "react";

const AboutMe = () => (
    <div id="about">
        <section style={aboutMeStyles}>
            <div style={imageContainerStyles}>
                <img src="../../public/sticker_aboutme.webp" alt="About Me" style={imageStyles}/>
            </div>
            <div style={textContainerStyles}>
                <h2 style={titleStyles}>About Me</h2>
                <p style={descriptionStyles}>
                    Hello! Im a passionate frontend developer with a knack for creating beautiful and responsive web
                    applications.
                    I love solving problems, learning new technologies, and turning ideas into reality. Lets build
                    something great together!
                </p>
            </div>
        </section>
    </div>
        );

        const aboutMeStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px", // Расстояние между текстом и картинкой
        padding: "40px 0", // Отступы сверху и снизу
    };

        const imageContainerStyles = {
        maxWidth: "50%",
        display: "flex",
        justifyContent: "flex-start",
    };

        const imageStyles = {
        width: "100%",
        maxWidth: "400px",
        height: "auto",
    };

        const textContainerStyles = {
        maxWidth: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    };

        const titleStyles = {
        color: "#5692da",
        fontSize: "2.5rem",
        margin: "0 0 20px 0", // Отступ между заголовком и описанием
        fontWeight: "bold",
    };

        const descriptionStyles = {
        fontSize: "1.2rem",
        lineHeight: "1.6",
        color: "#555",
    };

        export default AboutMe;
