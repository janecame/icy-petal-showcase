import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import { experience } from "@/data/portfolio";

const experience = [
  {
    role: 'First "Hello World"',
    company: "STI West Negros University",
    dates: "2017",
    description: "Started with Java programming during Senior High School.",
  },
  {
    role: "First Web Project",
    company: "Thesis Project",
    dates: "2017 - 2018",
    description: "Built an Online Administration system using PHP, jQuery, and SQL.",
  },
  {
    role: "First Commissioned Work",
    company: "Freelance",
    dates: "2018 - 2019",
    description: "Developed a medical monitoring web app for MedTech students.",
  },
  {
    role: "First Deployed System",
    company: "LGU Project",
    dates: "2022",
    description: "Live data monitoring system used for government encoding.",
  },
  {
    role: "First React & Blockchain Project",
    company: "Research",
    dates: "2022 - 2023",
    description: "Permit management using Proof of Authority (PoA) mechanism.",
    honorableMentions: ["React Native Mobile App", "2D Godot Game", "Cemetery Map (Google Maps)"],
  },
  {
    role: "First Developer Job",
    company: "CBytes - Full-time",
    dates: "2024",
    description: "Building APIs and interfaces with C# Web API Core, React, and TypeScript.",
  },
  {
    role: "Full Stack Developer",
    company: "Cbytes",
    dates: "2026 - Present",
    description: "Integrate state management and data flow from backend to frontend.",
    honorableMentions: ["Implement Claude Code Technologies", "CI/CD Pipeline", "Implemented MUI Layout across every project."],
  },
];

const SEGMENT_COLORS = ["#4F8EF7", "#2EC4B6", "#3A6FD8"];

const ExperienceSection = () => {
  return (
    <Box id="experience" sx={{ pt: { xs: 12, md: 12 }, pb: { xs: 8, md: 12 }, background: "#EEF4FF" }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: "#202124" }}>
          Journey
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 6, fontSize: "0.95rem" }}>
          My key technical milestones and first steps.
        </Typography>

        {/* Horizontal scroll wrapper — auto on mobile, hidden on desktop */}
        <Box sx={{ overflowX: { xs: "auto", md: "visible" }, pb: 2 }}>
          <Box
            sx={{
              display: "flex",
              minWidth: { xs: 900, md: "100%" },
              position: "relative",
              // py must be large enough to contain the tallest absolute card:
              // card offset = calc(100% + 95px) = 123 px from bar edge.
              // Tallest card (with honorableMentions) ≈ 160 px.
              // Required py ≥ 95 + 160 = 255 px → use 36 (288 px) for breathing room.
              py: { xs: "288px", md: "288px" },
            }}
          >
            {experience.map((item, index) => {
              const isAbove = index % 2 === 0;
              const color = SEGMENT_COLORS[index % SEGMENT_COLORS.length];
              const year = item.dates.split(/\s|-/)[0];
              const isFirst = index === 0;
              const isLast = index === experience.length - 1;

              return (
                <Box key={index} sx={{ flex: 1, position: "relative", height: 28 }}>

                  {/* ── Timeline bar segment ── */}
                  <Box
                    sx={{
                      height: 28,
                      background: color,
                      borderTopLeftRadius: isFirst ? 14 : 0,
                      borderBottomLeftRadius: isFirst ? 14 : 0,
                      borderTopRightRadius: isLast ? 14 : 0,
                      borderBottomRightRadius: isLast ? 14 : 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 14,
                        height: 14,
                        bgcolor: "#fff",
                        transform: "rotate(45deg)",
                        border: `2px solid ${color}`,
                      }}
                    />
                  </Box>

                  {/* ── Year label ── */}
                  <Typography
                    sx={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      [isAbove ? "bottom" : "top"]: "calc(100% + 8px)",
                      fontWeight: 700,
                      color,
                      fontSize: "1rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {year}
                  </Typography>

                  {/* ── Connector line ── */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      width: "1px",
                      height: 50,
                      bgcolor: "rgba(0,0,0,0.15)",
                      [isAbove ? "bottom" : "top"]: "calc(100% + 40px)",
                    }}
                  />

                  {/* ── Card content ── */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 160,
                      textAlign: "center",
                      [isAbove ? "bottom" : "top"]: "calc(100% + 95px)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#202124",
                        fontSize: "0.85rem",
                        mb: 0.5,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.role}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* honorableMentions — only shown on the React & Blockchain entry */}
                    {item.honorableMentions && (
                      <Box sx={{ mt: 0.75 }}>
                        {item.honorableMentions.map((mention, i) => (
                          <Typography
                            key={i}
                            sx={{
                              color,
                              fontSize: "0.7rem",
                              lineHeight: 1.4,
                              fontStyle: "italic",
                            }}
                          >
                            • {mention}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
