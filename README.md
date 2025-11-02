# 🚀 Portfolio Website - Mohammed Sahl

A modern, animated, and responsive portfolio website showcasing my work as a Software Engineering student. Built with vanilla HTML, CSS, and JavaScript, featuring smooth animations, interactive elements, and a beautiful user interface.



![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-orange) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **🎨 Modern Design**: Clean, elegant interface inspired by Apple, Notion, and Linear design systems
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🎯 Smooth Animations**: Scroll-triggered animations, parallax effects, and interactive elements
- **⚡ Fast Performance**: Optimized assets and code for lightning-fast load times
- **🎭 Interactive Elements**:
  - Typing effect animation
  - Particles.js background animation
  - Scroll progress indicator
  - Smooth scroll navigation
  - Education carousel with auto-play
  - Animated skill bars
  - Timeline animations
- **📧 Contact Form**: Integrated EmailJS for seamless form submission
- **🎨 Color Scheme**: Beautiful orange-themed design with glassmorphism effects
- **♿ Accessibility**: WCAG compliant with keyboard navigation support
- **🌙 Reduced Motion Support**: Respects user's motion preferences

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom design system with animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Particles.js**: Interactive particle background animation
- **Font Awesome**: Icon library
- **Google Fonts**: Inter, Space Grotesk, and Poppins fonts
- **EmailJS**: Contact form handling

## 🌐 Live Demo

Visit the live website: **[https://mohammed-sahl.vercel.app/](https://mohammed-sahl.vercel.app/)**

## 📁 Project Structure

```
my web/
├── public/
│   ├── index.html          # Main HTML file
│   ├── portfolio.css       # Custom styles and design system
│   ├── portfolio.js        # JavaScript functionality
│   ├── cv/
│   │   └── Mohammed_Sahl_CV.pdf  # Resume/CV
│   ├── h1.png              # Logo
│   ├── me.png              # Profile images
│   ├── p1.png - p6.png     # Project images
│   └── README.md           # Public folder documentation
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

No special prerequisites needed! The website uses CDN links for all external libraries.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Navigate to the public directory**
   ```bash
   cd public
   ```

3. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     # Right-click index.html > Open with Live Server
     ```

4. **Access the website**
   - Local: `http://localhost:8000`
   - Or open `index.html` directly in your browser

## 🚀 Deployment

This project is deployed on Vercel. You can visit it at:

**🔗 [https://mohammed-sahl.vercel.app/](https://mohammed-sahl.vercel.app/)**

To deploy your own version:
1. Fork this repository
2. Connect your GitHub account to [Vercel](https://vercel.com/)
3. Import your repository and deploy
4. Your site will be live automatically!

## 🎨 Customization

### Updating Personal Information

1. **Profile Information**: Edit `index.html` and search for:
   - Name, title, and description in the Hero section
   - About section content
   - Contact information

2. **Skills**: Update the skills section with your technologies in `index.html`

3. **Projects**: Modify the projects section with your portfolio projects

4. **Education**: Update education timeline with your academic history

5. **Colors**: Modify CSS variables in `portfolio.css`:
   ```css
   :root {
     --primary-orange: hsl(32 93% 54%);
     /* Change these values to customize colors */
   }
   ```

6. **Contact Form**: Set up EmailJS in `index.html`:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the EmailJS configuration in the contact form section

### Adding Your CV

Replace `public/cv/Mohammed_Sahl_CV.pdf` with your own CV file, keeping the same filename or update the filename in the JavaScript code.

## 📱 Sections

- **🏠 Home**: Hero section with animated typing effect and call-to-action buttons
- **👤 About**: Personal introduction, stats, and background information
- **💻 Skills**: Technical skills and technologies with animated progress bars
- **🎯 Projects**: Portfolio showcase with project cards and descriptions
- **🎓 Education**: Educational timeline with carousel display
- **📧 Contact**: Contact form and social media links

## 🎯 Key Features Explained

### Smooth Animations
- Elements fade in and slide up as you scroll (Intersection Observer API)
- Parallax effects on hero section
- Hover effects on cards and buttons

### Interactive Elements
- Scroll progress indicator at the top
- Back-to-top button
- Mobile-responsive navigation menu
- Education carousel with auto-play and touch support

### Performance Optimizations
- Lazy loading for images
- Optimized animations with `will-change` property
- Reduced motion support for accessibility
- GPU-accelerated transforms

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohammed Sahl**

- Portfolio: [https://mohammed-sahl.vercel.app/](https://mohammed-sahl.vercel.app/)
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
- Email: sahlmohammed330@gmail.com

## 🙏 Acknowledgments

- Design inspiration from Apple, Notion, and Linear
- [Particles.js](https://github.com/VincentGarreau/particles.js) for particle animations
- [Tailwind CSS](https://tailwindcss.com/) for utility classes
- [Font Awesome](https://fontawesome.com/) for icons
- [EmailJS](https://www.emailjs.com/) for contact form functionality
- [Vercel](https://vercel.com/) for hosting and deployment

## 📈 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering and search
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Performance monitoring

---

⭐ If you like this project, please give it a star on GitHub!

🔗 **Live Website**: [https://mohammed-sahl.vercel.app/](https://mohammed-sahl.vercel.app/)
