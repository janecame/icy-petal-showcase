import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

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
            WebkitTextFillColor: "transparent",
          }}
        >
          Alexander Chen
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
          Senior Frontend Engineer
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
            mb: 1,
            opacity: 0.8,
          }}
        >
          San Francisco, CA
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
          Crafting elegant, high-performance web experiences with a focus on
          scalable architecture, design systems, and user-centric interfaces
          that drive measurable business impact.
        </Typography>
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
            View Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() =>
              document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              borderColor: "#F2D5D9",
              color: "#2C3E50",
              "&:hover": {
                borderColor: "#E8C0C5",
                background: "rgba(242,213,217,0.1)",
              },
            }}
          >
            My Experience
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
