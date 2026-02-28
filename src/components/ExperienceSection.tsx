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
    honorableMentions: ["React Native Mobile App", "2D Godot Game"]
  },
  {
    role: "First Developer Job",
    company: "Full-time",
    dates: "2024 - Present",
    description: "Building APIs and interfaces with C#, React, and TypeScript.",
  },
];



const TimelineDot = ({ gradient }: { gradient: string }) => (
  <Box
    sx={{
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: gradient,
      flexShrink: 0,
      mt: 0.6,
    }}
  />
);

const TimelineConnector = () => (
  <Box
    sx={{
      width: 2,
      flexGrow: 1,
      background: "rgba(160,180,200,0.2)",
      mx: "auto",
      minHeight: 35,
    }}
  />
);

const ExperienceSection = () => {
  return (
    <Box id="experience" sx={{ py: 8, background: "#fff" }}>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: "#2C3E50" }}>
          Journey
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 6, fontSize: "0.95rem" }}>
          My key technical milestones and first steps.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {experience.map((item, index) => (
            <Box key={index} sx={{ display: "flex", gap: 3 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TimelineDot gradient="#A0B4C8" />
                {index < experience.length - 1 && <TimelineConnector />}
              </Box>
              
              <Box sx={{ pb: 4 }}>
                <Typography variant="subtitle1" sx={{ color: "#2C3E50", fontWeight: 700, lineHeight: 1.2 }}>
                  {item.role}
                </Typography>
                
                <Typography sx={{ color: "text.secondary", fontSize: "0.8rem", mb: 0.5 }}>
                  {item.company} • {item.dates}
                </Typography>

                <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", opacity: 0.8 }}>
                  {item.description}
                </Typography>

                {item.honorableMentions && (
                  <Box sx={{ display: "flex", gap: 1.5, mt: 1 }}>
                    {item.honorableMentions.map((mention, mIdx) => (
                      <Typography key={mIdx} sx={{ fontSize: "0.75rem", color: "#A0B4C8", fontWeight: 600 }}>
                        + {mention}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;