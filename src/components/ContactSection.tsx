import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const contactInfo = [
  { icon: <EmailIcon />, label: "Email", value: "alexander.chen@email.com", href: "mailto:alexander.chen@email.com" },
  { icon: <PhoneIcon />, label: "Phone", value: "+1 (415) 555-0192", href: "tel:+14155550192" },
  { icon: <LocationOnIcon />, label: "Location", value: "San Francisco, CA", href: undefined },
];

const socials = [
  { icon: <GitHubIcon />, href: "https://github.com", label: "GitHub" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
];

const ContactSection = () => {
  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.8rem" },
            mb: 1,
            textAlign: "center",
            background: "linear-gradient(135deg, #2C3E50 40%, #A0B4C8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get in Touch
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 6, fontSize: "1.05rem", textAlign: "center" }}>
          Feel free to reach out for collaborations or just a friendly hello.
        </Typography>

        <Box
          sx={{
            background: "rgba(255,255,255,0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(160,180,200,0.15)",
            borderRadius: 4,
            p: { xs: 4, md: 6 },
          }}
        >
          <Grid container spacing={4}>
            {contactInfo.map((item) => (
              <Grid size={{ xs: 12, sm: 4 }} key={item.label}>
                <Box
                  component={item.href ? "a" : "div"}
                  href={item.href}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(160,180,200,0.2), rgba(242,213,217,0.2))",
                      color: "#A0B4C8",
                      mb: 1,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 600, color: "#2C3E50", fontSize: "0.9rem" }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
                    {item.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 5 }}>
            {socials.map((s) => (
              <IconButton
                key={s.label}
                component="a"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                sx={{
                  color: "#2C3E50",
                  border: "1px solid rgba(160,180,200,0.3)",
                  "&:hover": {
                    background: "rgba(160,180,200,0.15)",
                  },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;