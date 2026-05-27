import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import theme from "@/theme";
//import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "#EEF4FF", minHeight: "100vh" }}>
        <Sidebar />
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
