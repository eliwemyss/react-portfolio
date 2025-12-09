import React from 'react';

const projects = [
  {
    title: 'Gmail Rejection Tracker CLI',
    techStack: 'PostgreSQL, Railway, API keys, .env',
    description: 'A CLI tool to track and analyze Gmail rejection emails using PostgreSQL and Railway.',
    github: 'https://github.com/yourusername/gmail-rejection-tracker',
    liveDemo: '',
  },
  {
    title: 'Trail Planner App',
    techStack: 'Vercel, Supabase',
    description: 'A web app to plan and organize your hiking trips with real-time data.',
    github: 'https://github.com/yourusername/trail-planner-app',
    liveDemo: 'https://trail-planner.vercel.app',
  },
];

const Projects = () => {
  const styles = {
    section: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
      backgroundColor: '#ffffff',
      color: '#1f2937',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    card: {
      backgroundColor: '#f9fafb',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      transition: 'box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    techStack: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '1rem',
    },
    description: {
      fontSize: '1.125rem',
      marginBottom: '1rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
    },
    button: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      borderRadius: '0.25rem',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
    },
    buttonGithub: {
      backgroundColor: '#1f2937',
      color: 'white',
    },
    buttonGithubHover: {
      backgroundColor: '#111827',
    },
    buttonDemo: {
      backgroundColor: '#16a34a',
      color: 'white',
    },
    buttonDemoHover: {
      backgroundColor: '#15803d',
    },
  };

  return (
    <section id="projects-section" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Projects</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.techStack}>{project.techStack}</p>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.buttonContainer}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...styles.button, ...styles.buttonGithub }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#111827';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#1f2937';
                  }}
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...styles.button, ...styles.buttonDemo }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#15803d';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#16a34a';
                    }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;