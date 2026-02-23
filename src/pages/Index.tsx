import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import theme from "@/theme";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "#F9F6EF", minHeight: "100vh" }}>
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
