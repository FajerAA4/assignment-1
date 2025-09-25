Technical Documentation – Portfolio Website
---


## 1. Core Technologies
- **HTML5**: Structure and content (About, Projects, Contact)
- **CSS3**: Styling, gradients, Flexbox, media queries, responsive design
- **JavaScript**: Interactivity (theme toggle, greeting message)

---

## 2. Features Implemented
- **Responsive Layout**
    - Flexbox used for project cards
    - Media queries for desktop, tablet, and mobile breakpoints
- **Dark/Light Mode Toggle**
    - Button calls `toggleTheme()` → adds/removes `.dark-mode` class
    - `.dark-mode` overrides colors, backgrounds, and header gradient
- **Greeting Message by Time of Day**
    - Script checks system clock (`new Date().getHours()`)
    - Updates text in `<h2 id="greet-text">` with Morning/Afternoon/Evening
- **Contact Form**
    - Includes Name, Email, and Message fields
    - Validates required inputs

---

## 3. Responsiveness Testing
- **Browser Resizing**: Tested manually by resizing window
- **Chrome DevTools**: Simulated through the iPhone/iPad icon  and desktop views
- **CSS Media Queries**:
    - ≥1024px: desktop layout (large header, two-column projects)
    - 768px–1023px: tablet layout (smaller fonts, two cards per row)
    - ≤767px: mobile layout (stacked nav links and project cards)

---

## 4. Performance
- Lightweight (only plain HTML/CSS/JS, no frameworks)
- Images compressed and stored locally (`/images/`)

---

## 5. AI Integration
- **ChatGPT** assisted with:
    - Generating starter templates (HTML, CSS, JS)
    - Debugging issues (onclick syntax, missing script link)
    - Suggesting responsive design improvements
    - Helped structure and improve the clarity of my project documentation (README and other reports)
---

## 6. Future Improvements
- Add a home page and a menu bar.
- Add a skills Section Show a list of programming skills with progress bars or icons.
- Search or Filter Projects letting users filter projects by tags (e.g., “Web,” “Design,” “School”)
- Enhance form with backend (PHP, Node.js, or Firebase)  
