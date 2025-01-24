import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div id="contact">
        <section style={contactContainerStyles}>
            {/* Социальные иконки */}
            <div style={socialIconsContainerStyles}>
                <div style={socialBlockStyles}>
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={socialIconStyles}
                    >
                        <img src="../../public/linkedin.png" alt="LinkedIn" style={iconImageStyles} />
                        <p style={socialTextStyles}>LinkedIn</p>
                    </a>
                </div>
                <div style={socialBlockStyles}>
                    <a
                        href="https://github.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={socialIconStyles}
                    >
                        <img src="../../public/github.png" alt="GitHub" style={iconImageStyles} />
                        <p style={socialTextStyles}>GitHub</p>
                    </a>
                </div>
                <div style={socialBlockStyles}>
                    <a
                        href="https://behance.net/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={socialIconStyles}
                    >
                        <img src="../../public/behance.png" alt="Behance" style={iconImageStyles} />
                        <p style={socialTextStyles}>Behance</p>
                    </a>
                </div>
                <div style={socialBlockStyles}>
                    <a
                        href="https://instagram.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={socialIconStyles}
                    >
                        <img src="../../public/instagram.png" alt="Instagram" style={iconImageStyles} />
                        <p style={socialTextStyles}>Instagram</p>
                    </a>
                </div>
            </div>

            {/* Форма отправки */}
            <div style={formContainerStyles}>
                <h2 style={formTitleStyles}>Contact Me</h2>
                <form onSubmit={handleSubmit} style={formStyles}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={inputStyles}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={inputStyles}
                    />
                    <textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        style={{ ...inputStyles, resize: "none" }}
                    ></textarea>
                    <button type="submit" style={submitButtonStyles}>
                        Send Message
                    </button>
                </form>
                {submitted && <p style={successMessageStyles}>Message Sent!</p>}
            </div>
        </section>
        </div>
    );
};

// Контейнер для всей секции
const contactContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px 20px",
    gap: "30px",
};

// Контейнер для блоков с иконками (сетка 2x2)
const socialIconsContainerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Две колонки
    gap: "20px", // Расстояние между элементами
    width: "300px", // Ширина контейнера для размещения сетки
};

// Отдельный блок для каждой иконки
const socialBlockStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "300px",
    height: "200px",
    backgroundColor: "var(--card-bg-color)",
    borderRadius: "10px",
    boxShadow: "0 4px 8px var(--border-color)",
    transition: "box-shadow 0.3s ease, background-color 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
};

// Стиль для ссылки с иконкой
const socialIconStyles = {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

// Стиль для изображения иконки
const iconImageStyles = {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
};

// Текст под иконкой
const socialTextStyles = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "var(--text-color)",
};

// Стиль для контейнера формы
const formContainerStyles = {
    flex: 1,
    maxWidth: "500px",
    boxShadow: "0 4px 8px var(--border-color)",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "var(--card-bg-color)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
};

// Стиль для формы
const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
};

// Стиль для заголовка формы
const formTitleStyles = {
    color: "var(--text-color)",
};

// Стиль для инпутов
const inputStyles = {
    padding: "10px",
    border: "1px solid var(--border-color)",
    borderRadius: "5px",
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
};

// Стиль для кнопки отправки
const submitButtonStyles = {
    backgroundColor: "var(--primary-color)",
    color: "var(--button-text-color)",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
};

const successMessageStyles = {
    color: "green",
    fontWeight: "bold",
};

export default ContactForm;
