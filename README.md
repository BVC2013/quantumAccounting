# Quantum Accounting Advisory - Vite React Website

A modern, responsive accounting firm website built with **Vite** and **React**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
cd vite-website
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
vite-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx       # Navigation with dropdowns
│   │   ├── Footer.jsx       # Site footer
│   │   ├── PageHeader.jsx   # Page title banner
│   │   ├── Sidebar.jsx      # Contact/booking sidebar
│   │   ├── ServiceCard.jsx  # Service display cards
│   │   ├── TrustItem.jsx    # Trust section items
│   │   └── ContactForm.jsx  # Contact form with state
│   ├── pages/           # Page components
│   │   ├── Home.jsx         # Homepage
│   │   ├── About.jsx        # About page
│   │   ├── Services.jsx     # Services overview
│   │   ├── TaxServices.jsx  # Tax services page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── BookMeeting.jsx  # Meeting booking page
│   │   └── GenericPage.jsx  # Reusable page template
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json
└── vite.config.js
```

## ✨ Features

- **React 19** with functional components and hooks
- **React Router v7** for client-side routing
- **Responsive Design** - Works on all devices
- **77+ Pages** covering all accounting services
- **Dropdown Navigation** - Full service menu
- **Contact Forms** with state management
- **Modern CSS** with custom properties
- **Fast Development** with Vite HMR

## 🎨 Styling

The site uses CSS custom properties for theming:

```css
--primary-color: #1a5490
--secondary-color: #2d7bc6
--accent-color: #4a90e2
```

All styles are in `src/index.css`.

## 📄 Pages Included

### Core Pages
- Home, About, Our Values, Contact, Book Meeting

### Services
- Individual Services, Business Services, Tax Services
- Bookkeeping, Payroll, Financial Planning
- Tax Relief, QuickBooks Services

### Industries
- Construction, Healthcare, Dentists
- Hospitality, Law Firms, Manufacturing, Real Estate

### Resources
- Tax Center, Financial Guides, Newsletter
- FAQs, Calculators, Client Portal

## 🔧 Customization

1. **Branding**: Update company name in `Header.jsx` and `Footer.jsx`
2. **Contact Info**: Update in `Sidebar.jsx` and `Contact.jsx`
3. **Colors**: Modify CSS custom properties in `index.css`
4. **Pages**: Add/modify page data in `App.jsx`

## 📦 Dependencies

- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing

## 🚢 Deployment

Build for production:

```bash
npm run build
```

Deploy the `dist/` folder to any static hosting:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static web server

## License

Created for Quantum Accounting Advisory LLC.
