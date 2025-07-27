# TalentTrackr

A modern, responsive talent tracking website built with React, TypeScript, and Tailwind CSS. This single-page application showcases the work of Roots & Radiance Photography, featuring a clean, elegant design that highlights the visual content.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean, minimalist interface with smooth scrolling between sections
- **Image Gallery**: Beautifully displayed portfolio in a responsive grid layout
- **Contact Form**: Easy way for potential clients to get in touch
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Linting**: ESLint with TypeScript support
- **Code Formatting**: Prettier

## 📁 Project Structure

```
TalentTrackr/
├── public/                 # Static files
│   └── images/             # Portfolio images
├── src/
│   ├── assets/             # Static assets (logos, backgrounds)
│   ├── components/         # Reusable React components
│   │   ├── About.tsx       # About section component
│   │   ├── Catalog.tsx     # Portfolio gallery component
│   │   ├── Contacts.tsx    # Contact information and form
│   │   ├── Hero.tsx        # Hero/landing section
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── Partnerships.tsx # Brand partnerships section
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── .eslintrc.cjs           # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bridgitkanini/TalentTrackr.git
   cd TalentTrackr
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

To create a production build:

```bash
pnpm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🌟 Features in Detail

### Hero Section
- Full-screen background image
- Social media links
- Clean, modern navigation

### About Section
- Company introduction
- Mission and vision
- Team information

### Portfolio Gallery
- Responsive image grid
- High-quality image display
- Clean hover effects

### Contact Section
- Contact information
- Social media links
- Easy-to-use contact form

## 🛠️ Development

### Linting

```bash
pnpm run lint
# or
yarn lint
```

### Building

```bash
pnpm run build
# or
yarn build
```

### Previewing Production Build

```bash
pnpm run preview
# or
yarn preview
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For inquiries, please contact [your-email@example.com](mailto:your-email@example.com)
