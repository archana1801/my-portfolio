# Archana Kumari | Interactive Developer Portfolio

An interactive, high-end cybernetic HUD (Heads-Up Display) developer portfolio built with **React**, **Vite**, and **Vanilla CSS**. Designed to showcase software engineering projects, AI automations, and frontend expertise.

🔗 **Live Link:** [https://archana1801.github.io/my-portfolio/](https://archana1801.github.io/my-portfolio/)

---

## 🚀 Key Features

*   **Cybernetic HUD Aesthetics:** Modern dark-theme dashboard with grid lines, scanline overlays, neon accents, and responsive layout structures.
*   **Web Audio Synth Loop:** A fully synthesized ambient space-chime background music loop generated on-the-fly using the browser's **Web Audio API** (fully mutable with top-bar controls).
*   **Interactive UI Audio Blips:** Custom-synthesized blip/click sound effects played upon hovering over navigation links and branding elements.
*   **Dynamic Scroll Photo Zoom:** Grayscale-to-color avatar portrait card that dynamically scales/zooms inside its frame as the visitor scrolls down the page.
*   **System Diagnostics Widget:** Fixed status HUD displays displaying Delhi (IST) and UTC clocks, simulated network latency (ping), mouse coordinate tracks, and scrolling log files representing active development stacks.
*   **Audio Narrator:** Built-in speaker buttons next to each section header that read summary narratives using the browser's speech synthesis engine.
*   **Contact Console Logs:** Interactive contact form backed by a Formspree endpoint that feeds live terminal log updates to the user.

---

## 🛠️ Tech Stack

*   **Core:** React (Vite template), JavaScript (ES6+)
*   **Styling:** Vanilla CSS (CSS Custom Properties, Glassmorphism, Responsive Grid Systems)
*   **Graphics:** HTML5 Canvas API (connected node background field)
*   **Sound:** Web Audio API (Synthesizers, Gain nodes, LFO modulation, Filters)
*   **Forms:** Formspree API integration
*   **Icons:** Lucide React icons

---

## 💻 Local Development

Follow these steps to run the portfolio locally on your machine:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/archana1801/my-portfolio.git
    cd my-portfolio
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the local development server**:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to `http://localhost:5173`.

---

## 🚢 Production Deployment

To compile the production build and publish updates to GitHub Pages:

```bash
npm run deploy
```
*(This triggers the `predeploy` Vite build compilation and automatically pushes the build files to the `gh-pages` branch).*
