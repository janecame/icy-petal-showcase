import React, { useEffect, useState, useRef } from 'react';
import { Box, Stack, IconButton, Tooltip, useTheme } from '@mui/material';
import { Home, Work, Code, Mail, Circle } from '@mui/icons-material';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', icon: <Home />, label: 'Home' },
  { id: 'projects', icon: <Code />, label: 'Projects' },
  { id: 'experience', icon: <Work />, label: 'Experience' },
  { id: 'contact', icon: <Mail />, label: 'Contact' },
];

const Sidebar = () => {
  const [activeId, setActiveId] = useState('home');
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this to trigger sooner or later
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = navItems.findIndex((item) => item.id === activeId);

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        left: { xs: 16, md: 40 },
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Stack spacing={0} alignItems="center">
        {navItems.map((item, index) => {
          const isActive = index === activeIndex;
          const isNeighbor = Math.abs(index - activeIndex) === 1;
          
          // Logic for fading: Active is 1, Neighbors are 0.4, others are 0.1
          const opacity = isActive ? 1 : isNeighbor ? 0.4 : 0.1;
          const scale = isActive ? 1.3 : isNeighbor ? 0.9 : 0.7;

          return (
            <React.Fragment key={item.id}>
              {/* Timeline Connector Line */}
              {index !== 0 && (
                <Box
                  sx={{
                    width: '2px',
                    height: '30px',
                    bgcolor: 'text.secondary',
                    opacity: isNeighbor || isActive ? 0.3 : 0.1,
                    transition: 'all 0.5s ease',
                  }}
                />
              )}

              <Tooltip title={item.label} placement="right" arrow>
                <IconButton
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    color: isActive ? 'primary.main' : 'text.secondary',
                    opacity: opacity,
                    transform: `scale(${scale})`,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': { opacity: 1 },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            </React.Fragment>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Sidebar;