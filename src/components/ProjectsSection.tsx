import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "@/data/portfolio";

const ProjectsSection = () => {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 3, sm: 6, md: 0 } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.8rem" },
            mb: 1,
            background: "linear-gradient(135deg, #202124 40%, #4F8EF7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Projects
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 6, fontSize: "1.05rem" }}>
          A selection of recent work I'm proud of.
        </Typography>

        {/* Carousel viewport — same width as Container so first card aligns with heading */}
        <Box sx={{ position: "relative" }}>
          {/* Right fade mask */}
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(to right, transparent, #F9F6EF)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              overflowX: "auto",
              overflowY: "visible",
              pt: 3,
              pb: 4,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Box sx={{ display: "flex", ml: 3, gap: 3, width: "max-content" }}>
              {projects.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: { xs: 220, sm: 255 },
                    height: { xs: 380, sm: 440 },
                    borderRadius: 4,
                    overflow: "hidden",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Background image or gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "image" in project && project.image
                          ? `url(${project.image})`
                          : "gradient" in project && project.gradient
                            ? project.gradient
                            : "linear-gradient(135deg, #4F8EF7, #3B7AE0)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Static content overlay — always visible */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.1) 100%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 3,
                    }}
                  >
                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.25,
                      }}
                    >
                      {project.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: "0.82rem",
                        color: "rgba(255,255,255,0.8)",
                        mb: 1.5,
                        lineHeight: 1.5,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Tech stack chips — max 5 visible */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.75,
                        mb: 2,
                      }}
                    >
                      {project.techStack.slice(0, 5).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: "rgba(255,255,255,0.15)",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.25)",
                            fontSize: "0.7rem",
                            height: 22,
                          }}
                        />
                      ))}
                      {project.techStack.length > 5 && (
                        <Chip
                          label={`+${project.techStack.length - 5}`}
                          size="small"
                          sx={{
                            background: "rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.6)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            fontSize: "0.7rem",
                            height: 22,
                          }}
                        />
                      )}
                    </Box>

                    {/* Links */}
                    <Box sx={{ display: "flex", gap: 1 }}>
                      {project.liveUrl && (
                        <Button
                          component="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener"
                          startIcon={<OpenInNewIcon sx={{ fontSize: "0.9rem !important" }} />}
                          variant="outlined"
                          size="small"
                          sx={{
                            color: "#fff",
                            borderColor: "rgba(255,255,255,0.5)",
                            textTransform: "none",
                            fontSize: "0.78rem",
                            py: 0.5,
                            px: 1.5,
                            borderRadius: 2,
                            "&:hover": {
                              borderColor: "#fff",
                              background: "rgba(255,255,255,0.1)",
                            },
                          }}
                        >
                          Live
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          component="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener"
                          startIcon={<GitHubIcon sx={{ fontSize: "0.9rem !important" }} />}
                          variant="outlined"
                          size="small"
                          sx={{
                            color: "#fff",
                            borderColor: "rgba(255,255,255,0.5)",
                            textTransform: "none",
                            fontSize: "0.78rem",
                            py: 0.5,
                            px: 1.5,
                            borderRadius: 2,
                            "&:hover": {
                              borderColor: "#fff",
                              background: "rgba(255,255,255,0.1)",
                            },
                          }}
                        >
                          GitHub
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
