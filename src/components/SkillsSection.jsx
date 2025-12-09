import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'REST APIs', percentage: 95 },
    { name: 'JSON/XML Parsing', percentage: 95 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'Node.js', percentage: 80 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'SQL', percentage: 85 },
    { name: 'Postman', percentage: 95 },
    { name: 'Technical Documentation', percentage: 95 },
    { name: 'Customer Communication', percentage: 95 },
    { name: 'Problem Diagnosis', percentage: 95 },
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
      marginBottom: '3rem',
      color: '#ffffff',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
    },
    skillWrapper: {
      position: 'relative',
    },
    skillItem: {
      padding: '1rem',
      backgroundColor: '#1a1a1a',
      borderRadius: '0.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '1px solid transparent',
    },
    skillName: {
      fontSize: '1rem',
      fontWeight: '500',
      color: '#ffffff',
    },
    skillPercentage: {
      fontSize: '0.9rem',
      color: '#ffffff',
      fontWeight: 'bold',
      minWidth: '3rem',
      textAlign: 'right',
    },
  };

  return (
    <section style={styles.section}>
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
              style={{
                ...styles.skillWrapper,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  ...styles.skillItem,
                  ...(hoveredSkill === idx && {
                    backgroundColor: '#16a34a',
                    borderColor: '#15803d',
                  }),
                }}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span
                  style={{
                    ...styles.skillName,
                    color: hoveredSkill === idx ? '#ffffff' : '#ffffff',
                  }}
                >
                  {skill.name}
                </span>
                <motion.span
                  style={{
                    ...styles.skillPercentage,
                    opacity: hoveredSkill === idx ? 1 : 0,
                  }}
                  animate={{ opacity: hoveredSkill === idx ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.percentage}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
