# AGENTS.md — IT_Adis Guidelines & Guidelines for AI Agents

Welcome to **IT_Adis**, the official website repository for the IT Adis Educational Center in Bishkek.
This document outlines core principles, architecture standards, design rules, and development workflows for AI agents and developer tools working on this repository.

---

## 1. Project Vision & Core Principles

**IT_Adis** is a high-performance, modern, and fully responsive website.
All modifications must align with the following principles:

1. **Visual Excellence**: Maintain a modern, clean, and high-end aesthetic. Never downgrade established design references or layouts.
2. **Performance First**: Zero unneeded dependencies or heavy runtime libraries. High load speeds on mobile networks and budget devices.
3. **Mobile-First Responsiveness**: Flawless layout and touch targets across all mobile viewports (**360px, 375px, 390px, 414px, 430px**), tablets, and desktops.
4. **Clean Code & Architecture**: Modular structure, reusable components, clear code organization, and zero dead code.
5. **Preserve Functional Integrity**: Never break existing features, working UI components, internationalization (`RU | KG`), or navigation flows without explicit instruction.

---

## 2. Technology Stack & Evolution

### Current Production Stack
- **Structure**: HTML5 (Semantic elements, proper accessibility tags).
- **Styling**: Vanilla CSS3 (Custom CSS Variables, modern Flexbox/Grid layouts, glassmorphism, HSL/HEX color system).
- **Logic**: Vanilla JavaScript (ES Modules, reactive state management, DOM event handling).
- **Bundler & Tooling**: Vite (`vite.config.js` configured with `base: './'` for VS Code Live Server and Vite dev server compatibility).
- **Version Control**: Git & GitHub (`main` branch tracking `https://github.com/Denisbek1/IT_Adis.git`).

### Planned Stack Migration (Future Roadmap)
When transitioning the application to the new framework stack:
- **Target Tech**: React + TypeScript + Tailwind CSS + Vite.
- **Migration Rules**:
  - Keep the exact visual design system, color palette, and layout proportions intact.
  - Do not mix legacy Vanilla JS logic with React components in an unstructured manner.
  - Migrate cleanly component-by-component while preserving full responsive behavior.

---

## 3. Directory Structure & File Conventions

```
IT_Adis/
├── index.html              # Main HTML entry point
├── package.json            # Project configuration & npm scripts
├── package-lock.json       # Locked dependency tree
├── vite.config.js          # Vite build configuration (base: './')
├── .gitignore              # Git ignore rules (node_modules/, dist/)
├── AGENTS.md               # AI Agent directives and repository rules
├── public/
│   └── assets/             # Static assets (transparent PNGs, graphics)
│       ├── hero_laptop.png
│       ├── grad_cap.png
│       ├── internship_folder.png
│       ├── itadis_logo_transparent.png
│       └── building_photo.png
└── src/
    ├── style.css           # Primary design tokens & CSS system
    └── main.js             # Core JS application logic & i18n
```

### File & Asset Guidelines
- **`public/assets/`**: Store all official graphics and brand assets here.
- **Asset Integrity**: Use exact transparent PNG assets. Do not stretch, distort, or wrap images inside artificial nested border boxes.
- **Relative Paths**: Always reference static assets using relative paths (`./public/assets/...`) to support both Vite dev server and VS Code Live Server (`Go Live`).

---

## 4. Git & Workspace Rules

1. **`node_modules/` and `dist/` Exclusions**:
   - `node_modules/` and `dist/` must **NEVER** be committed to Git.
   - Verify that `.gitignore` strictly includes:
     ```gitignore
     node_modules/
     dist/
     dist-ssr/
     ```
2. **Build Artifact Cleanliness**:
   - Do not generate `dist/` or `node_modules/` automatically after simple source edits.
   - Run `npm install` or `npm run build` only when validating code or upon explicit user request.
3. **Commit Standards**:
   - Maintain clear, concise commit messages (e.g., `Initial stable version`, `Refine hero responsiveness`).

---

## 5. UI Layout & CSS Design Rules

- **Header**:
  - Uses official `itadis_logo_transparent.png` with `width: auto` and `height: 38px` (mobile) / `42px` (desktop), preserving exact aspect ratio (`object-fit: contain`).
- **Hero Section**:
  - Uses `hero_laptop.png` positioned cleanly on the right side without huge empty voids or distracting floating badges.
- **About Section ("О ЦЕНТРЕ")**:
  - Horizontal side-by-side grid (`[ Text ]` on left, `[ Visual ]` on right) on both mobile and desktop.
  - Image cards sit on the same visual line as text, without turning into massive 100% full-width stacked boxes above/below text.
- **Benefits Section ("ПРЕИМУЩЕСТВА")**:
  - 3-column card grid designed cleanly for 360px–430px screens without text truncation or clipping.
- **Internship Banner ("СТАЖИРОВКА")**:
  - Compact rounded banner (`border-radius: 20px`) with gradient (`#5B46F6` -> `#06B6D4` -> `#00C853`).
  - Seamless floating 3D folder (`internship_folder.png`) with clean transparent alpha background.
- **Mobile Navigation**:
  - Fixed bottom bar (`.bottom-nav`) active on screens under 768px, ensuring content padding accounts for bottom bar height (`padding-bottom: calc(var(--bottom-bar-height) + 16px)`).

---

## 6. Development & Verification Workflow

Before declaring any task complete:
1. **Source Integrity Check**: Ensure HTML, CSS, and JS files have zero syntax errors or broken image paths.
2. **Build Verification**: Validate that `npm run build` executes without errors when testing local builds.
3. **Git Cleanliness Check**: Verify `git status` reflects clean working tree without untracked `dist/` or `node_modules/` files.

## Migration Rule

The current project remains HTML + CSS + Vanilla JavaScript + Vite.

Do NOT migrate the project to React, TypeScript, or Tailwind unless the user explicitly requests the migration.

The future React + TypeScript + Tailwind CSS stack is a roadmap, not the current implementation