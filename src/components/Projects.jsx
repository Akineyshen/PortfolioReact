import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const projectsPerPage = 9; // Максимум 9 проектов на странице

    // Загружаем данные из Firestore
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const projectsArray = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProjects(projectsArray);
                setFilteredProjects(projectsArray); // Изначально показываем все проекты
                setLoading(false); // Отключаем состояние загрузки
            } catch (error) {
                console.error("Error fetching projects: ", error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Фильтрация по категории
    const filterByCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Сбрасываем на первую страницу
        if (category === "All") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) => project.category === category);
            setFilteredProjects(filtered);
        }
    };

    // Расчет индексов для текущей страницы
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    // Переключение страниц
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <p style={loadingTextStyles}>Loading projects...</p>;
    }

    if (filteredProjects.length === 0) {
        return <p style={noProjectsStyles}>No projects found.</p>;
    }

    return (
        <div id="projects">
        <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>Projects</h2>
            {/* Кнопки для фильтрации */}
            <div style={filterButtonsStyles}>
                {["All", "Frontend", "Backend", "UI/UX", "Fullstack"].map((category) => (
                    <button
                        key={category}
                        style={{
                            ...filterButtonStyle,
                            backgroundColor: selectedCategory === category ? "var(--primary-color)" : "var(--button-bg)",
                            color: selectedCategory === category ? "var(--button-text-color)" : "var(--text-color)",
                        }}
                        onClick={() => filterByCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* Сетка проектов */}
            <div style={projectsGrid}>
                {currentProjects.map((project) => (
                    <div key={project.id} style={projectCard}>
                        <img src={project.image} alt={project.title} style={projectImage} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>
                            <strong>Category:</strong> {project.category}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyles}
                        >
                            Link
                        </a>
                    </div>
                ))}
            </div>
            {/* Пагинация */}
            <div style={paginationStyles}>
                {[...Array(totalPages).keys()].map((number) => (
                    <button
                        key={number + 1}
                        style={{
                            ...paginationButtonStyle,
                            backgroundColor: currentPage === number + 1 ? "var(--primary-color)" : "var(--button-bg)",
                            color: currentPage === number + 1 ? "var(--button-text-color)" : "var(--text-color)",
                        }}
                        onClick={() => paginate(number + 1)}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </section>
        </div>
    );
};

const sectionStyles = {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    transition: "background-color 0.3s ease, color 0.3s ease",
};

const sectionTitleStyles = {
    fontSize: "2.5rem",
    marginBottom: "20px",
};

const filterButtonsStyles = {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
};

const filterButtonStyle = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, color 0.3s ease",
};

const projectsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
};

const projectCard = {
    padding: "20px",
    border: "1px solid var(--border-color)",
    borderRadius: "10px",
    backgroundColor: "var(--card-bg-color)",
    textAlign: "left",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
};

const projectImage = {
    width: "100%",
    height: "200px",
    borderRadius: "5px",
    marginBottom: "10px",
};

const paginationStyles = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
};

const paginationButtonStyle = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, color 0.3s ease",
};

const linkStyles = {
    color: "var(--link-color)",
    textDecoration: "none",
    transition: "color 0.3s ease",
};

const loadingTextStyles = {
    fontSize: "1.2rem",
    color: "var(--text-color)",
};

const noProjectsStyles = {
    fontSize: "1.2rem",
    color: "var(--text-color)",
};

export default Projects;
