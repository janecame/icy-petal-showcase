import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Stack, 
  IconButton, 
  Tooltip, 
  useTheme, 
  Drawer, 
  useMediaQuery,
  AppBar,
  Toolbar
} from '@mui/material';
import { Home, Work, Code, Mail, Menu as MenuIcon, Close } from '@mui/icons-material';

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
  const [activeId, setActiveId] = useState('hero');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsDrawerOpen(false);
  };

  const NavContent = () => (
    <Stack spacing={0} alignItems="center">
      {navItems.map((item, index) => {
        const isActive = item.id === activeId;
        const activeIndex = navItems.findIndex((n) => n.id === activeId);
        const isNeighbor = Math.abs(index - activeIndex) === 1;
        
        const opacity = isActive ? 1 : isNeighbor ? 0.4 : 0.1;
        const scale = isActive ? 1.3 : isNeighbor ? 0.9 : 0.7;

        return (
          <React.Fragment key={item.id}>
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
            <Tooltip title={item.label} placement="right" arrow disableHoverListener={isMobile}>
              <IconButton
                onClick={() => handleScroll(item.id)}
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
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            sx={{
              position: 'fixed',
              top: 16,
              left: 16,
              zIndex: theme.zIndex.drawer + 1,
              bgcolor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(79, 142, 247, 0.18)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
              color: '#2C3E50',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.98)',
              },
            }}
          >
            {isDrawerOpen ? <Close /> : <MenuIcon />}
          </IconButton>

          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(238, 244, 255, 0.25)',
                backdropFilter: 'blur(15px) saturate(180%)',
                borderRight: '1px solid rgba(79, 142, 247, 0.2)',
                boxShadow: 'none'
              },
            }}
          >
            <NavContent />
          </Drawer>
        </>
      ) : (
        <Box
          component="nav"
          sx={{
            position: 'fixed',
            left: 40,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: theme.zIndex.appBar,
          }}
        >
          <NavContent />
        </Box>
      )}
    </>
  );
};

export default Sidebar;