import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState('hero');

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about-section', label: 'About' },
    { id: 'wait-section', label: 'Story' },
    { id: 'journey-section', label: 'Journey' },
    { id: 'what-section', label: 'What I Do' },
    { id: 'skills-section', label: 'Skills' },
    { id: 'contact-section', label: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleClick('hero');
          }}
          style={{
            fontWeight: 700,
            fontSize: '1.05rem',
            textDecoration: 'none',
            color: 'white',
            letterSpacing: '0.01em',
          }}
        >
          Eli Wemyss
        </a>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.id);
              }}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                color: active === link.id ? '#16a34a' : '#e5e7eb',
                backgroundColor: active === link.id ? 'rgba(22, 163, 74, 0.12)' : 'transparent',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

