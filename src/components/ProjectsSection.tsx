import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { projects } from "@/data/portfolio";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsSection = () => {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }}}>
      <Container maxWidth="md" >
        <Box sx={{ px: { xs: 2 } }}>
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
            Projects
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 6, fontSize: "1.05rem" }}>
            A selection of recent work I'm proud of.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(160,180,200,0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 60px rgba(160,180,200,0.2)",
                    border: "1px solid rgba(160,180,200,0.35)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 3,
                    mb: 3,
                    background: `linear-gradient(135deg, ${index === 0
                      ? "#A0B4C8, #8CA3B8"
                      : index === 1
                        ? "#F2D5D9, #E8C0C5"
                        : "#A0B4C8, #F2D5D9"
                      })`,
                  }}
                />
                <Typography variant="h5" sx={{ mb: 1.5, color: "#2C3E50" }}>
                  {project.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        background: "rgba(160,180,200,0.15)",
                        color: "#2C3E50",
                        border: "1px solid rgba(160,180,200,0.25)",
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                  {project.liveUrl && (
                    <Button
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener"
                      startIcon={<OpenInNewIcon />}
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: "none",
                        color: "#2C3E50",
                        borderColor: "rgba(160,180,200,0.25)",
                      }}
                    >
                      Live
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl.length > 0 && (
                    <Button
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener"
                      startIcon={<GitHubIcon />}
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: "none",
                        color: "#2C3E50",
                        borderColor: "rgba(160,180,200,0.25)",
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
