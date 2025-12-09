import React from 'react';

const AboutMe = () => {
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
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      alignItems: 'center',
    },
    textContent: {
      flex: 1,
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.8',
      marginBottom: '1.5rem',
      color: '#d1d5db',
    },
    imageContainer: {
      flex: 1,
    },
    image: {
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
      width: '100%',
      height: 'auto',
    },
  };

  return (
    <section id="about-section" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <div style={styles.content}>
          <div style={styles.textContent}>
            <p style={styles.paragraph}>
              Over 4+ years at companies like ChartHop and Sailthru, I've specialized in API integrations, enterprise escalations, and building elegant solutions to messy technical challenges. I work fluently with JSON, Postman, MongoDB, and JavaScript—translating between customer needs and engineering requirements while maintaining a 99%+ satisfaction rating.
            </p>
            <p style={styles.paragraph}>
              I'm equally comfortable debugging a broken API integration as I am navigating ambiguous requirements to build solutions customers didn't know they needed.
            </p>
            <p style={styles.paragraph}>
              In 2025, I thru-hiked the 2,200-mile Appalachian Trail from Georgia to Maine—a six-month test of resourcefulness, adaptability, and staying calm when systems fail. The same mindset that got me through challenging trail conditions drives how I approach technical problems: break them down, stay resilient, and find the path forward.
            </p>
            <p style={styles.paragraph}>
              Whether I'm troubleshooting API responses or building automation tools in my downtime, I bring technical rigor and unshakeable persistence to everything I do.
            </p>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/images/katahdin-summit.jpg"
              alt="Eli at Katahdin Summit - End of Appalachian Trail"
              style={styles.image}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop&q=80';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;