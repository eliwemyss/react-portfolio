import React from 'react';
import { motion } from 'framer-motion';

const TheJourney = () => {
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
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#ffffff',
    },
    timeline: {
      position: 'relative',
      padding: '2rem 0',
    },
    timelineItem: {
      display: 'flex',
      marginBottom: '2rem',
      alignItems: 'flex-start',
    },
    timelineIcon: {
      fontSize: '2rem',
      marginRight: '1.5rem',
      minWidth: '60px',
      textAlign: 'center',
    },
    timelineContent: {
      flex: 1,
      backgroundColor: '#2a2a2a',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    },
    timelineYear: {
      fontWeight: 'bold',
      color: '#16a34a',
      fontSize: '0.875rem',
    },
    timelineTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginTop: '0.25rem',
      color: '#ffffff',
    },
    testimonials: {
      marginTop: '3rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.5rem',
    },
    testimonialCard: {
      backgroundColor: '#111827',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
      color: '#e5e7eb',
      lineHeight: 1.6,
    },
    testimonialName: {
      marginTop: '1rem',
      fontWeight: 700,
      color: '#16a34a',
      fontSize: '0.95rem',
    },
  };

  const journeyItems = [
    { emoji: '📧', year: '2019-2020', title: 'Campaign Monitor Technical Support', desc: 'Started my support career' },
    { emoji: '⛵', year: '2020-2021', title: 'Sailthru Support Engineer', desc: 'Growing technical expertise' },
    { emoji: '🚀', year: '2021-2023', title: 'ChartHop Senior Support Engineer', desc: 'Integration SME, API expert, HRIS/ATS integrations' },
    { emoji: '✈️', year: '2024', title: 'Got My Wings', desc: 'Earned FAA Private Pilot Certificate' },
    { emoji: '🥾', year: '2025', title: 'Walked to Maine', desc: '2,200+ miles on the Appalachian Trail' },
  ];

  const testimonials = [
    {
      quote: 'Eli is the person you want when production is on fire. Clear-headed, communicative, and relentless about finding the real root cause.',
      name: 'Engineering Manager, ChartHop',
    },
    {
      quote: 'He translates deeply technical issues into language customers understand, without losing accuracy. Our escalations were smoother because of him.',
      name: 'Sr. Support Lead, Sailthru',
    },
    {
      quote: 'Disciplined and thorough. Whether it was API debugging or process documentation, Eli made the team better.',
      name: 'Director of Support, Campaign Monitor',
    },
  ];

  return (
    <section id="journey-section" style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Journey
        </motion.h2>

        <div style={styles.timeline}>
          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              style={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div style={styles.timelineIcon}>{item.emoji}</div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineYear}>{item.year}</div>
                <div style={styles.timelineTitle}>{item.title}</div>
                <p style={{ color: '#b4b9c1', marginTop: '0.5rem' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={styles.testimonials}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              style={styles.testimonialCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <p>"{t.quote}"</p>
              <div style={styles.testimonialName}>{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheJourney;