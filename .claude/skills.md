# Design & Styling Skill — icy-petal-showcase

> A focused skill reference for applying the correct design language, color tokens,
> typography rules, and component styling patterns in this portfolio project.

---

## 🎨 Color Palette

All colors follow a **Google Gemini-inspired** cool blue-white aesthetic.  
No warm, cream, or pink tones. Every value below is the single source of truth.

### Named Tokens

| Name | Hex | When to use |
|---|---|---|
| `primary` | `#4F8EF7` | Buttons, active icons, accent text, timeline dots |
| `primary-hover` | `#3B7AE0` | Button hover state (depth 1) |
| `primary-deep` | `#2D69CC` | Button hover state (depth 2) |
| `secondary` | `#E8F0FE` | Surface tints, chip backgrounds, light fills |
| `background` | `#EEF4FF` | Page background, section backgrounds |
| `paper` | `rgba(255,255,255,0.85)` | Glassmorphism card surface |
| `text-primary` | `#202124` | Headings, bold labels (Google near-black) |
| `text-secondary` | `#5F6368` | Body copy, sublabels (Google muted gray) |
| `primary-rgba` | `rgba(79,142,247, α)` | Borders, shadows, hover fills — keep original `α` |
| `light-rgba` | `rgba(168,196,248, α)` | Gradient blobs, icon circle fills — keep original `α` |

### Banned Values (old palette — never reintroduce)
`#A0B4C8` · `#8CA3B8` · `#7A93A8` · `#F2D5D9` · `#E8C0C5` · `#F9F6EF` · `#2C3E50` · `#5A6C7E`  
`rgba(160,180,200,*)` · `rgba(242,213,217,*)`

---

## 🔤 Typography

| Property | Value |
|---|---|
| Font family | `'Plus Jakarta Sans', 'Segoe UI', sans-serif` |
| Import | Google Fonts — loaded in `index.html` |
| Weights | 300 · 400 · 500 · 600 · 700 · 800 |
| Letter spacing h1 | `-0.02em` |
| Letter spacing h2 | `-0.01em` |

### Weight Usage Guide

```
800 → Hero name, major section headings (h1)
700 → Section titles, sub-section headings (h2, h4)
600 → Component titles, buttons, h5/h6
500 → Chips, tags, small labels
400 → Body text, descriptions
300 → Fine print, captions
```

---

## 🧱 Component Patterns

### Glassmorphism Card
Used on: Project cards, Contact card
```tsx
sx={{
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(79,142,247,0.2)",
  borderRadius: 3,
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 20px 60px rgba(79,142,247,0.2)",
    border: "1px solid rgba(79,142,247,0.35)",
  },
}}
```

### Section Heading Gradient Text
Used on: Projects "Projects", Contact "Get in Touch"
```tsx
sx={{
  background: "linear-gradient(135deg, #202124 40%, #4F8EF7 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}}
```

### Primary Button
Used on: "Download CV", "My Projects"
```tsx
sx={{
  background: "linear-gradient(135deg, #4F8EF7, #3B7AE0)",
  boxShadow: "0 8px 20px rgba(79,142,247,0.3)",
  borderRadius: "12px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    background: "linear-gradient(135deg, #3B7AE0, #2D69CC)",
  },
}}
```

### Outlined Button / Icon Button
Used on: Project "Live", "GitHub", Contact socials
```tsx
sx={{
  color: "#202124",
  borderColor: "rgba(79,142,247,0.25)",       // outlined buttons
  border: "1px solid rgba(79,142,247,0.3)",   // icon buttons
  "&:hover": {
    background: "rgba(79,142,247,0.1)",
  },
}}
```

### Tech Chip
Used on: Project tech stack tags
```tsx
sx={{
  background: "rgba(79,142,247,0.1)",
  color: "#202124",
  border: "1px solid rgba(79,142,247,0.2)",
  fontWeight: 500,
  borderRadius: 8,
}}
```

### Icon Circle
Used on: Contact info icons
```tsx
sx={{
  width: 52,
  height: 52,
  borderRadius: "50%",
  background: "linear-gradient(135deg, rgba(79,142,247,0.15), rgba(168,196,248,0.15))",
  color: "#4F8EF7",
}}
```

### Background Gradient Blobs
Used on: HeroSection ambient blobs via `::before` / `::after`
```tsx
// Top-right blob
background: "radial-gradient(circle, rgba(79,142,247,0.25) 0%, transparent 70%)"

// Bottom-left blob
background: "radial-gradient(circle, rgba(168,196,248,0.35) 0%, transparent 70%)"
```

### Navbar Bar (sticky top)
```tsx
sx={{
  background: "rgba(238,244,255,0.75)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(79,142,247,0.15)",
}}
```

### Navbar Logo Gradient
```tsx
sx={{
  background: "linear-gradient(135deg, #4F8EF7, #A8C4F8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 800,
}}
```

### Mobile Drawer (Sidebar)
```tsx
// PaperProps sx
background: "rgba(238,244,255,0.25)",
backdropFilter: "blur(15px) saturate(180%)",
borderRight: "1px solid rgba(79,142,247,0.2)",
```

### Timeline Dot
```tsx
sx={{
  width: 12,
  height: 12,
  borderRadius: "50%",
  background: "#4F8EF7",
}}
```

### Timeline Connector
```tsx
sx={{
  width: 2,
  background: "rgba(79,142,247,0.2)",
}}
```

---

## 📐 Spacing & Shape

| Property | Value | Source |
|---|---|---|
| Global border radius | `16px` | `theme.shape.borderRadius` |
| Card border radius | `borderRadius: 3` (= 24px via MUI) | Cards, sections |
| Button border radius | `12px` | Overridden in theme |
| Chip border radius | `8px` | Overridden in theme |
| Icon circle radius | `"50%"` | Components inline |

### Responsive Padding Scale
```tsx
px: { xs: 3, sm: 6, md: 0 }     // container inner padding
py: { xs: 8, md: 12 }           // section vertical spacing
fontSize: { xs: "2rem", md: "2.8rem" }
```

---

## 📋 Quick Checklist — When Changing Any Color

- [ ] Is the hex in the **Named Tokens** table above?
- [ ] No banned values (`#A0B4C8`, `#F2D5D9`, etc.) introduced
- [ ] `rgba` alpha values preserved from original when swapping color channel
- [ ] Both `src/theme.ts` (MUI) **and** `src/index.css` (Tailwind) updated if it's a palette-level change
- [ ] Hardcoded hex values in component files updated (grep for old hex first)

---

## 🔗 Key Files

| File | What it controls |
|---|---|
| [`src/theme.ts`](../src/theme.ts) | MUI palette, font family, border radius, button/chip overrides |
| [`src/index.css`](../src/index.css) | Tailwind CSS HSL variables (`:root` block) |
| [`index.html`](../index.html) | Google Fonts `<link>` import |
| [`src/pages/Index.tsx`](../src/pages/Index.tsx) | Root page background color |
| [`src/components/HeroSection.tsx`](../src/components/HeroSection.tsx) | Blobs, overline, buttons |
| [`src/components/ProjectsSection.tsx`](../src/components/ProjectsSection.tsx) | Cards, chips, icon gradients |
| [`src/components/ExperienceSection.tsx`](../src/components/ExperienceSection.tsx) | Timeline, section background |
| [`src/components/ContactSection.tsx`](../src/components/ContactSection.tsx) | Icon circles, social buttons |
| [`src/components/Navbar.tsx`](../src/components/Navbar.tsx) | AppBar glass, logo gradient |
| [`src/components/Sidebar.tsx`](../src/components/Sidebar.tsx) | Mobile drawer glass, active icon color |
