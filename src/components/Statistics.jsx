import React, { useEffect, useState } from "react";

const Statistics = () => {
    const [githubStatsTheme, setGithubStatsTheme] = useState("default");

    // Проверяем текущую тему (светлая/тёмная) и задаём правильный параметр для URL GitHub-статистики
    useEffect(() => {
        const isDarkMode = document.body.classList.contains("dark-mode");
        setGithubStatsTheme(isDarkMode ? "dark" : "default");

        const observer = new MutationObserver(() => {
            const updatedIsDarkMode = document.body.classList.contains("dark-mode");
            setGithubStatsTheme(updatedIsDarkMode ? "dark" : "default");
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    return (
        <div id="statistics">
        <section style={statisticsStyles}>
            <h2 style={titleStyles}>My GitHub Statistics</h2>
            <div style={statsContainerStyles}>
                <a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noopener noreferrer">
                    <img
                        height="200"
                        align="center"
                        src={`https://github-readme-stats.vercel.app/api?username=Akineyshen&show_icons=true&card_width=450&theme=${githubStatsTheme}`}
                        alt="GitHub Stats"
                        style={imageStyles}
                    />
                </a>
                <a href="https://github.com/anuraghazra/convoychat" target="_blank" rel="noopener noreferrer">
                    <img
                        height="200"
                        align="center"
                        src={`https://github-readme-stats.vercel.app/api/top-langs?username=Akineyshen&hide=C,Makefile&layout=compact&langs_count=8&card_width=300&theme=${githubStatsTheme}`}
                        alt="Top Languages"
                        style={imageStyles}
                    />
                </a>
            </div>
        </section>
        </div>
    );
};

const statisticsStyles = {
    textAlign: "center", // Центровка текста
    padding: "50px 20px",
    backgroundColor: "var(--bg-color)", // Используем переменные для фона
    color: "var(--text-color)", // Цвет текста адаптируется к теме
    transition: "background-color 0.3s ease, color 0.3s ease",
};

const titleStyles = {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "var(--text-color)", // Текст заголовка адаптируется к теме
};

const statsContainerStyles = {
    display: "flex",
    justifyContent: "center", // Центровка изображений
    gap: "20px", // Расстояние между карточками
    flexWrap: "wrap", // Позволяет адаптироваться на маленьких экранах
};

const imageStyles = {
    borderRadius: "10px",
    boxShadow: "0 4px 8px var(--border-color)", // Используем переменную для тени
    transition: "box-shadow 0.3s ease",
};

export default Statistics;
