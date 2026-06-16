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
        backgroundColor: "#EEF4FF",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-30%",
          right: "-20%",
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,142,247,0.25) 0%, transparent 70%)",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,196,248,0.35) 0%, transparent 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 3, sm: 6, md: 0 }
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#4F8EF7",
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
            fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.5rem" },
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 1.5,
            color: "#202124",
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
          React JS Developer&nbsp;
          <Box
            component="span"
            sx={{
              color: "#4F8EF7",
              fontWeight: 600,
              fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            | Claude Code
          </Box>
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
          Building sleek, functional web experiences with MUI, Node.js &amp; Express,
          C# Web API Core (.NET), with DevOps &amp; CI/CD practices.
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
            <EmailIcon sx={{ color: "#202124", fontSize: "1.1rem", opacity: 0.7 }} />
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
            <PhoneIcon sx={{ color: "#202124", fontSize: "1.1rem", opacity: 0.7 }} />
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

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.5, sm: 2 },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            variant="contained"
            component="a"
            href="https://drive.google.com/uc?export=download&id=1vDq6Bp1__bHwYcrfSwFNmwat9_CHzZgi"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              width: { xs: "100%", sm: "auto" },
              borderRadius: "12px",
              textTransform: "none",
              background: "linear-gradient(135deg, #4F8EF7, #3B7AE0)",
              fontWeight: 600,
              boxShadow: "0 8px 20px rgba(79,142,247,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #3B7AE0, #2D69CC)",
              },
            }}
          >
            Download CV
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              py: 1.5,
              px: 4,
              width: { xs: "100%", sm: "auto" },
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              color: "#4F8EF7",
              borderColor: "#4F8EF7",
              borderWidth: 2,
              background: "transparent",
              boxShadow: "none",
              "&:hover": {
                background: "rgba(79,142,247,0.08)",
                borderColor: "#3B7AE0",
                color: "#3B7AE0",
                boxShadow: "0 4px 12px rgba(79,142,247,0.2)",
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
