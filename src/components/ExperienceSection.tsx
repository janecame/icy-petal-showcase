import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { experience, education } from "@/data/portfolio";

const TimelineDot = ({ gradient }: { gradient: string }) => (
  <Box
    sx={{
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: gradient,
      flexShrink: 0,
      mt: 0.5,
      boxShadow: "0 0 0 4px rgba(160,180,200,0.15)",
    }}
  />
);

const TimelineConnector = () => (
  <Box
    sx={{
      width: 2,
      flexGrow: 1,
      background: "linear-gradient(180deg, rgba(160,180,200,0.3), rgba(242,213,217,0.3))",
      mx: "auto",
      minHeight: 40,
    }}
  />
);

const ExperienceSection = () => {
  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, background: "rgba(160,180,200,0.04)" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                mb: 1,
                background: "linear-gradient(135deg, #2C3E50 40%, #A0B4C8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experience
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 5, fontSize: "1.05rem" }}>
              My professional journey so far.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {experience.map((item, index) => (
                <Box key={index} sx={{ display: "flex", gap: 3, mb: index < experience.length - 1 ? 0 : 0 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <TimelineDot gradient="linear-gradient(135deg, #A0B4C8, #8CA3B8)" />
                    {index < experience.length - 1 && <TimelineConnector />}
                  </Box>
                  <Box sx={{ pb: 4 }}>
                    <Typography variant="h6" sx={{ color: "#2C3E50", fontSize: "1.1rem" }}>
                      {item.role}
                    </Typography>
                    <Typography sx={{ color: "#A0B4C8", fontWeight: 600, fontSize: "0.9rem", mb: 0.5 }}>
                      {item.company}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.85rem", mb: 1, opacity: 0.7 }}>
                      {item.dates}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} id="education">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                mb: 1,
                background: "linear-gradient(135deg, #2C3E50 40%, #F2D5D9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 5, fontSize: "1.05rem" }}>
              Academic background & credentials.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {education.map((item, index) => (
                <Box key={index} sx={{ display: "flex", gap: 3 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <TimelineDot gradient="linear-gradient(135deg, #F2D5D9, #E8C0C5)" />
                    {index < education.length - 1 && <TimelineConnector />}
                  </Box>
                  <Box sx={{ pb: 4 }}>
                    <Typography variant="h6" sx={{ color: "#2C3E50", fontSize: "1.1rem" }}>
                      {item.degree}
                    </Typography>
                    <Typography sx={{ color: "#F2D5D9", fontWeight: 600, fontSize: "0.9rem", mb: 0.5 }}>
                      {item.school}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.85rem", opacity: 0.7 }}>
                      {item.dates}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
