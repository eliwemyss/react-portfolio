import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const styles = {
    section: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffffff',
    },
    subtitle: {
      fontSize: '1.125rem',
      marginBottom: '3rem',
      color: '#b4b9c1',
    },
    linksContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      marginBottom: '3rem',
    },
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      backgroundColor: '#16a34a',
      color: 'white',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: 'none',
      fontSize: '1rem',
    },
    footer: {
      borderTop: '1px solid #3a3a3a',
      paddingTop: '2rem',
      marginTop: '3rem',
      fontSize: '0.875rem',
      color: '#6b7280',
    },
    easterEgg: {
      marginTop: '1rem',
      fontStyle: 'italic',
      fontSize: '0.875rem',
    },
  };

  return (
    <section id="contact-section" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.heading}>Let's Connect</h2>
          <p style={styles.subtitle}>
            Check out my work, connect with me, or download my resume.
          </p>

          <div style={styles.linksContainer}>
            <motion.a
              href="mailto:eli@himynameiseli.com"
              style={styles.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#15803d'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#16a34a'}
            >
              Email
            </motion.a>

            <motion.a
              href="https://github.com/eliwemyss"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#15803d'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#16a34a'}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/eliwemyss/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#15803d'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#16a34a'}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="/Eli_Wemyss_Resume_2025.pdf"
              download="Eli_Wemyss_Resume_2025.pdf"
              style={styles.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#15803d'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#16a34a'}
            >
              Resume
            </motion.a>
          </div>

          <div style={styles.footer}>
            <p>Built with React, Framer Motion, and a love for the trail.</p>
            <p style={styles.easterEgg}>
              "Almost there doesn't exist. Either you're there, or you're not." — Eli on the AT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;