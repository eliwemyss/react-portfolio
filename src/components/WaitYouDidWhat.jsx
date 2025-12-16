import React from 'react';
import { motion } from 'framer-motion';

const WaitYouDidWhat = () => {
  const styles = {
    section: {
      paddingTop: '5rem',
      paddingBottom: '5rem',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
    },
    statsRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap',
      marginBottom: '2.5rem',
    },
    statCard: {
      minWidth: '240px',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.14), rgba(14, 165, 233, 0.12))',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
      textAlign: 'center',
    },
    statValue: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#16a34a',
      marginBottom: '0.5rem',
      letterSpacing: '-0.01em',
    },
    statLabel: {
      fontSize: '1rem',
      color: '#e5e7eb',
      marginBottom: '0.25rem',
      fontWeight: '600',
    },
    statSub: {
      fontSize: '0.95rem',
      color: '#cbd5e1',
      lineHeight: 1.6,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    heading: {
      fontSize: 'clamp(1.875rem, 5vw, 2.75rem)',
      fontWeight: 'bold',
      marginBottom: '3rem',
      textAlign: 'center',
      color: '#ffffff',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2.5rem',
    },
    card: {
      padding: '2.5rem',
      backgroundColor: '#2a2a2a',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
    },
    emoji: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block',
      lineHeight: '1',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffffff',
      lineHeight: '1.3',
    },
    cardText: {
      fontSize: '0.95rem',
      lineHeight: '1.75',
      color: '#d1d5db',
    },
  };

  const milestones = [
    {
      emoji: '🥾',
      title: 'Thru-Hiked the AT',
      description: '2,200+ miles from Georgia to Maine. Five months of daily problem-solving, resource management, and adapting to whatever nature threw at me. Turns out debugging production issues and figuring out how to cross a flooded river at 2am use the same mental muscles.',
    },
    {
      emoji: '✈️',
      title: 'Earned My Wings',
      description: 'FAA Private Pilot Certificate + working on Instrument Rating. Mastered complex systems, federal regulations, and making critical decisions when there\'s no undo button. Aviation and software engineering aren\'t that different: follow the checklists, know your systems, and don\'t panic.',
    },
    {
      emoji: '💡',
      title: 'Why This Actually Matters',
      description: 'Proof I can commit to hard things and see them through to the end. Enhanced problem-solving from 5 months of daily survival challenges. Systems thinking from learning to fly aircraft safely. 5 years of technical support experience that didn\'t evaporate.',
    },
  ];

  return (
    <section id="wait-section" style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          "Wait, you did what?"
        </motion.h2>

        <div style={styles.statsRow}>
          <motion.div
            style={styles.statCard}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={styles.statValue}>99%</div>
            <div style={styles.statLabel}>Customer Satisfaction</div>
            <div style={styles.statSub}>Across enterprise support queues</div>
          </motion.div>
          <motion.div
            style={styles.statCard}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={styles.statValue}>2,200 mi</div>
            <div style={styles.statLabel}>Appalachian Trail</div>
            <div style={styles.statSub}>Proof of grit, systems thinking, and follow-through</div>
          </motion.div>
          <motion.div
            style={styles.statCard}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={styles.statValue}>FAA</div>
            <div style={styles.statLabel}>Private Pilot</div>
            <div style={styles.statSub}>Disciplined procedures and calm decision-making</div>
          </motion.div>
        </div>

        <div style={styles.grid}>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              style={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div style={styles.emoji}>{milestone.emoji}</div>
              <h3 style={styles.cardTitle}>{milestone.title}</h3>
              <p style={styles.cardText}>{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitYouDidWhat;