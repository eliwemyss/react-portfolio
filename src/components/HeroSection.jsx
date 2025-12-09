import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: "url('/images/katahdin-hero.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundAttachment: 'fixed',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    title: {
      fontSize: 'clamp(2.5rem, 10vw, 4rem)',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    subtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.5rem)',
      color: '#f3f4f6',
      marginBottom: '3rem',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    ctaButton: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      backgroundColor: '#16a34a',
      color: 'white',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      textDecoration: 'none',
      display: 'inline-block',
    },
    secondaryButton: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      backgroundColor: 'transparent',
      color: 'white',
      borderRadius: '0.5rem',
      border: '2px solid white',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Eli Wemyss
        </motion.h1>
        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Technical Support Engineer · Adventurer · Appalachian Trail Thru-Hiker
        </motion.p>
        <motion.a
          href="mailto:eli@himynameiseli.com"
          style={styles.secondaryButton}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = '#16a34a';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.borderColor = 'white';
          }}
        >
          Let's Talk
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;