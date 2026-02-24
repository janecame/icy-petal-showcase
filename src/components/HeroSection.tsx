import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-30%",
          right: "-20%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(160,180,200,0.3) 0%, transparent 70%)",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,213,217,0.3) 0%, transparent 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="overline"
          sx={{
            color: "#A0B4C8",
            fontWeight: 700,
            letterSpacing: 3,
            mb: 2,
            display: "block",
          }}
        >
          Hello, I'm
        </Typography>
        <Typography
          variant="h1"
          sx={{
           
            fontSize: { xs: "2.8rem", md: "4.5rem" },
            lineHeight: 1.1,
            mb: 2,
            background: "linear-gradient(135deg, #2C3E50 40%, #A0B4C8 100%)",
            WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          Rodrigo Cuello
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "text.secondary",
            fontWeight: 400,
            mb: 3,
            fontSize: { xs: "1.2rem", md: "1.6rem" },
          }}
        >
          React JS Developer
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
            mb: 1,
            opacity: 0.8,
          }}
        >
          Philippines, Murcia
        </Typography>
        <Typography
          sx={{
            maxWidth: 560,
            color: "text.secondary",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
            3 Years of React Experience | TypeScript Specialist | Full-Stack Enthusiast. 
            Building sleek, functional web experiences with MUI and Node.js.
        </Typography>

        <Box 
          sx={{ 
            display: "flex", 
            gap: { xs: 1, sm: 4 }, 
            flexWrap: "wrap", 
            flexDirection: { xs: "column", sm: "row" },
            mb: 3 
          }}
        >
          {/* Email Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ color: "text.secondary", fontSize: { xs: "1rem", md: "1.2rem" } }} />
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                fontSize: { xs: "0.8rem", md: "1rem" }, // Slightly increased mobile size for readability
              }}
            >
              rianecuello@gmail.com
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ color: "text.secondary", fontSize: { xs: "1rem", md: "1.2rem" } }} />
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              +63 912 341 2345
            </Typography>
          </Box>
        </Box>
        

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              background: "linear-gradient(135deg, #A0B4C8, #8CA3B8)",
              color: "#fff",
              boxShadow: "0 8px 30px rgba(160,180,200,0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #8CA3B8, #7A93A8)",
                boxShadow: "0 12px 40px rgba(160,180,200,0.5)",
              },
            }}
          >
            My Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
