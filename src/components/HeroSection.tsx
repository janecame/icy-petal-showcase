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
        backgroundColor: "#f9f9f9", // Optional: matching your screenshot background
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-30%",
          right: "-20%",
          width: { xs: 300, md: 600 }, // Scaled down for mobile
          height: { xs: 300, md: 600 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(160,180,200,0.3) 0%, transparent 70%)",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: { xs: 250, md: 500 }, // Scaled down for mobile
          height: { xs: 250, md: 500 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,213,217,0.3) 0%, transparent 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          // Add responsive horizontal padding
          px: { xs: 3, sm: 6, md: 0 }
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#A0B4C8",
            fontWeight: 700,
            letterSpacing: 2,
            mb: { xs: 1, md: 2 },
            display: "block",
            fontSize: { xs: "0.7rem", md: "0.9rem" }
          }}
        >
          Hello, I'm
        </Typography>

        <Typography
          variant="h1"
          sx={{
            // Dynamic scaling for the main name
            fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.5rem" },
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 1.5,
            color: "#2C3E50",
            // If you want the gradient back, uncomment below
            // background: "linear-gradient(135deg, #2C3E50 40%, #A0B4C8 100%)",
            // WebkitBackgroundClip: "text",
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
            mb: 2,
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
          }}
        >
          React JS Developer
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.85rem", md: "1rem" },
            mb: 1,
            opacity: 0.7,
          }}
        >
          Philippines, Murcia
        </Typography>

        <Typography
          sx={{
            maxWidth: 560,
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: { xs: 1.6, md: 1.8 },
            mb: { xs: 3, md: 4 },
          }}
        >
          3 Years of React Experience | TypeScript | Full-Stack Developer.
          Building sleek, functional web experiences with MUI and Node.js.
        </Typography>

        {/* Contact Info Group */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 4 },
            flexDirection: { xs: "column", sm: "row" },
            mb: 4
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ color: "#2C3E50", fontSize: "1.1rem", opacity: 0.7 }} />
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              rianecuello@gmail.com
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ color: "#2C3E50", fontSize: "1.1rem", opacity: 0.7 }} />
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              +63 912 341 2345
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "auto" } }}>


          <Button
            variant="contained"
            component="a"
            href="/rodrigo-cuello-cv.pdf" // Path to your file in the 'public' folder
            download="Rodrigo_Cuello_CV.pdf" // Suggests a filename to the browser
            fullWidth={{ xs: true, sm: false }}
            size="large"
            sx={{
              py: 1.5,
              px: 4,

              borderRadius: "12px",
              textTransform: "none",
              background: "linear-gradient(135deg, #A0B4C8, #8CA3B8)",
              fontWeight: 600,
              boxShadow: "0 8px 20px rgba(160,180,200,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #8CA3B8, #7A93A8)",
              },
            }}
          >
            Download CV
          </Button>

          <Button
            variant="contained"
            fullWidth={{ xs: true, sm: false }} // Button goes full width on mobile
            size="large"
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              py: 1.5,
              px: 4,
              ml: 1,
              borderRadius: "12px",
              textTransform: "none",
              background: "linear-gradient(135deg, #A0B4C8, #8CA3B8)",
              fontWeight: 600,
              boxShadow: "0 8px 20px rgba(160,180,200,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #8CA3B8, #7A93A8)",
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