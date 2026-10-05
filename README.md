# Atharv Tekurkar — Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-tekurkaa.github.io-1d2c36?style=flat-square&logo=github&logoColor=f4f1e9)](https://tekurkaa.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-9b4b39?style=flat-square)](https://opensource.org/licenses/MIT)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-35505f?style=flat-square)](https://tekurkaa.github.io/)

> **Live Website:** [https://tekurkaa.github.io/](https://tekurkaa.github.io/)

A single-page personal portfolio designed with the aesthetic and rigor of an editorial quantitative research note. It presents Atharv Tekurkar's work across data analytics, analytics engineering, financial modeling, and applied AI for recruiters, engineering managers, and technical collaborators.

---

## Tech Stack

The site is built with a dependency-free, vanilla web stack engineered for fast loading, long-term maintainability, and clean typography:

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic document structure, JSON-LD structured data (`Person` schema), Open Graph and Twitter metadata. |
| **Vanilla CSS3** | Custom properties (CSS variables), modern CSS Grid, Flexbox, fluid `clamp()` typography, and `prefers-reduced-motion` media queries. |
| **Vanilla JavaScript** | Minimal clientside logic using `IntersectionObserver` for section reveal transitions, active navigation scroll-spying, and mobile menu interaction. |
| **Self-Hosted Typography** | [Newsreader](https://fonts.google.com/specimen/Newsreader) (editorial serif) and [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (grotesque sans-serif) served locally in `.woff2` format for zero external font latency. |
| **Data Visualization & Media** | Handcrafted inline SVG bar chart with labeled axes and gridlines; compressed modern WebP imagery with explicit aspect ratios to eliminate layout shift (CLS). |
| **Hosting & Deployment** | Hosted on **GitHub Pages** with `.nojekyll` enabled to prevent unnecessary Jekyll processing. |

---

## Features

- **Editorial Research Note Aesthetic**: Built on a warm paper canvas (`#f4f1e9`), deep navy typography (`#1d2c36`), muted rust accents (`#9b4b39`), and hairline dividers, favoring clarity and typographic restraint over generic landing page cliches.
- **First-Screen Proof Strip**: An anchor-linked quick overview in the hero highlighting key systems—**Terminus**, **SEC Risk Shift Tracker**, and **LIMRA data pipelines**—answering what Atharv builds immediately on screen 1.
- **Evidence-Led Case Studies**: Categorizes work with clear status badges distinguishing interactive full-stack demos, open NLP research pipelines, and empirical machine learning studies.
- **Native SVG Data Visualization**: Renders actual derived filing metrics (Item 1A cosine distance drift) using an accessible SVG chart with accessible markup (`<title>`, `<desc>`) and direct links to public data.
- **Responsive Mobile Navigation Drawer**: Collapsible `<details>` navigation drawer engineered with 44px minimum touch targets, click-outside dismissal, and seamless mobile layout adaptation.
- **Accessibility & Motion Restraint**: Meets WCAG 2.1 AA contrast guidelines, provides a visible skip-to-content link, distinct `:focus-visible` states, and honors user preferences via `prefers-reduced-motion`.
- **Zero Build Tooling Overhead**: Pure static assets—no Node build process, no bundler, no framework dependencies, and zero runtime vulnerabilities.

---

## Project Structure

```
tekurkaa.github.io/
├── .agents/                    # Agent entry points, execution rules, and guidelines
│   ├── AGENTS.md               # Portfolio agent entry point
│   └── rules/                  # Workspace execution and UI design rules
├── assets/
│   ├── favicon.svg             # Vector site favicon
│   ├── fonts/                  # Self-hosted WOFF2 fonts and licenses (OFL)
│   └── images/                 # Optimized WebP project captures and photography
├── .nojekyll                   # Bypasses GitHub Pages Jekyll processing
├── index.html                  # Core semantic markup and content
├── styles.css                  # Design system tokens, typography, and responsive rules
├── script.js                   # IntersectionObserver reveals and navigation logic
└── README.md                   # Repository documentation
```

---

## Getting Started (Local Development)

Because this project relies entirely on native web standards, no compilation or `npm install` is required.

### 1. Clone the repository
```bash
git clone https://github.com/tekurkaa/tekurkaa.github.io.git
cd tekurkaa.github.io
```

### 2. Run a local server

You can serve the folder using any standard static HTTP server:

**Using Python 3:**
```bash
python3 -m http.server 8000
```

**Using Node (`npx`):**
```bash
npx serve .
```

**Using VS Code:**
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and click **Go Live**.

### 3. Open in your browser
Navigate to `http://localhost:8000` (or the port indicated in your terminal).

---

## Content & Verification Notes

- **Professional History**: Roles, dates, and project descriptions are drawn from Atharv's verified résumé and public repositories.
- **Terminus Capture**: The interface preview demonstrates application capabilities in demo mode and connects to its [live deployment](https://portfolio-manager-by-atv.vercel.app/) and [source repository](https://github.com/tekurkaa/terminus).
- **SEC Filing Metrics**: The Item 1A paragraph drift chart illustrates derived figures from the [SEC Risk Shift Tracker repository](https://github.com/tekurkaa/sec-risk-shift-tracker/tree/main/data/metrics).
- **Contact Details**: The portfolio intentionally omits direct phone numbers for privacy; visitors are invited to connect via [Email](mailto:atharvtekurkar@gmail.com), [LinkedIn](https://www.linkedin.com/in/atharv-tekurkar/), or [GitHub](https://github.com/tekurkaa).

---

## License

- The code and structure of this portfolio are licensed under the [MIT License](https://opensource.org/licenses/MIT).
- Included web fonts ([Newsreader](assets/fonts/NEWSREADER-OFL.txt) and [IBM Plex Sans](assets/fonts/IBM-PLEX-SANS-OFL.txt)) are licensed under the [SIL Open Font License 1.1](https://openfontlicense.org/).
- Project imagery, personal photography, and portfolio copy copyright &copy; 2026 Atharv Tekurkar.
