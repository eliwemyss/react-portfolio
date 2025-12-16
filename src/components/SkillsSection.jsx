import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    'REST APIs',
    'JSON/XML Parsing',
    'JavaScript',
    'React',
    'Python',
    'Node.js',
    'MongoDB',
    'SQL',
    'Postman',
    'Technical Documentation',
    'Customer Communication',
    'Problem Diagnosis',
  ];

  const highlights = [
    'Integration SME (HRIS/ATS/Payroll)',
    'Incident response & escalations',
    'Root-cause analysis & RCA docs',
    'Playbooks & automation for support',
  ];

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
      textAlign: 'center',
      marginBottom: '2.5rem',
      letterSpacing: '0.01em',
      color: '#ffffff',
    },
    highlightsRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      justifyContent: 'center',
      marginBottom: '2rem',
    },
    highlightTag: {
      padding: '0.5rem 0.9rem',
      borderRadius: '9999px',
      border: '1px solid #1f2937',
      backgroundColor: '#111827',
      color: '#d1d5db',
      fontWeight: 600,
      fontSize: '0.95rem',
      boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1rem',
    },
    skillItem: {
      padding: '1.25rem',
      backgroundColor: '#141414',
      borderRadius: '0.6rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #1f2937',
      minHeight: '90px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
      fontSize: '1.05rem',
      fontWeight: 600,
      color: '#e5e7eb',
      textAlign: 'center',
    },
  };

  return (
    <section id="skills-section" style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div style={styles.highlightsRow}>
          {highlights.map((item, idx) => (
            <motion.span
              key={idx}
              style={styles.highlightTag}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <motion.div
          style={styles.skillsGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              style={styles.skillItem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 22px rgba(0,0,0,0.3)' }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
