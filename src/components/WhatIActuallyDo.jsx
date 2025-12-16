import React from 'react';
import { motion } from 'framer-motion';

const WhatIActuallyDo = () => {
  const styles = {
    section: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
      backgroundColor: '#0f0f0f',
      color: '#ffffff',
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
      marginBottom: '1rem',
      color: '#ffffff',
    },
    subheading: {
      fontSize: '1.125rem',
      color: '#b4b9c1',
      marginBottom: '3rem',
    },
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '3rem',
    },
    skillTag: {
      display: 'inline-block',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      backgroundColor: '#2a2a2a',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#d1d5db',
      border: '1px solid #3a3a3a',
    },
    strengthsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    strengthCard: {
      padding: '1.5rem',
      backgroundColor: '#2a2a2a',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    },
    strengthTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      color: '#ffffff',
    },
    strengthDesc: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#b4b9c1',
    },
  };

  const skills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Python', 'Git', 'APIs', 'Troubleshooting', 'Postman', 'JSON', 'Regex'];

  const strengths = [
    {
      title: 'Translating Technical → Human',
      desc: 'Making engineers sound less like robots and customers feel heard',
    },
    {
      title: 'Staying Calm When It\'s On Fire',
      desc: 'Production down? Customer screaming? I\'m your guy.',
    },
    {
      title: 'Actually Understanding the Code',
      desc: 'Not just reading error messages - actually knowing what broke and why',
    },
    {
      title: 'Finishing What I Start',
      desc: 'Whether it\'s a 2,000 mile hike or a gnarly production bug',
    },
  ];

  return (
    <section id="what-section" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.heading}>What I Actually Do</h2>
          <p style={styles.subheading}>(Besides hiking and flying, obviously)</p>

          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                style={styles.skillTag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem', marginTop: '2rem', color: '#ffffff' }}>
            The Stuff That Actually Matters
          </h3>

          <div style={styles.strengthsGrid}>
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                style={styles.strengthCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div style={styles.strengthTitle}>{strength.title}</div>
                <p style={styles.strengthDesc}>{strength.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIActuallyDo;