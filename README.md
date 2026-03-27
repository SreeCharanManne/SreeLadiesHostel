# 🏠 Sree PG Ladies Hostel

A modern, responsive website for **Sree PG Ladies Hostel** — a safe, comfortable, and welcoming home away from home designed exclusively for women in Vijayawada.

Website: https://sree-ladies-hostel.vercel.app/

🔗 **Repository:** [SreeLadiesHostel](https://github.com/SreeCharanManne/SreeLadiesHostel)

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

---

## ✨ Features

- **Fully Responsive** — Looks great on mobile, tablet, and desktop
- **Smooth Scroll Animations** — Elements animate into view using Intersection Observer
- **Contact Form with EmailJS** — Visitors can send enquiries directly from the website (no backend needed)
- **Image Gallery** — Showcase of hostel facilities and rooms
- **Room Details** — AC and Non-AC room options with pricing
- **Amenities Section** — Highlights services like homely food, laundry, housekeeping, and hot water
- **Testimonials** — Reviews from residents
- **Back to Top Button** — Quick navigation to the top of the page
- **CTA Banner** — Call-to-action section to drive bookings

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [EmailJS](https://www.emailjs.com/) | Client-side email delivery |
| CSS3 | Styling (no CSS framework — fully custom) |
| Font Awesome | Icons |

---

## 📁 Project Structure

```
SreeLadiesHostel/
├── index.html
├── package.json
├── vite.config.js
├── .env                        # EmailJS credentials (not committed)
├── src/
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   ├── components/
│   │   ├── Navbar.jsx/.css     # Navigation bar
│   │   ├── Hero.jsx/.css       # Hero/landing section
│   │   ├── About.jsx/.css      # About the hostel
│   │   ├── Rooms.jsx/.css      # Room types & pricing
│   │   ├── Amenities.jsx/.css  # Services offered
│   │   ├── Gallery.jsx/.css    # Photo gallery
│   │   ├── Testimonials.jsx/.css # Resident reviews
│   │   ├── CtaBanner.jsx/.css  # Call-to-action banner
│   │   ├── Contact.jsx/.css    # Contact form & info
│   │   ├── Footer.jsx/.css     # Footer section
│   │   └── BackToTop.jsx/.css  # Scroll-to-top button
│   ├── hooks/
│   │   └── useScrollAnimation.js # Custom hook for scroll-based animations
│   └── imgs/                   # Images & logo
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SreeCharanManne/SreeLadiesHostel.git
   cd SreeLadiesHostel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > Sign up at [emailjs.com](https://www.emailjs.com/) to get your credentials.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in your browser**

   Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder. Preview the build locally with:

```bash
npm run preview
```

---

## 📄 License

This project is private and not open for redistribution.

---

Made with ❤️ by [SreeCharanManne](https://github.com/SreeCharanManne)
