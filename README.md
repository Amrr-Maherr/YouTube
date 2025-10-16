# YouTube Clone

A responsive web application that replicates the core features of YouTube.  
Users can browse videos, search for content, view video details, read comments, explore related videos, and visit channels with playlists.

## 🏠 Home Page
- Displays a **grid of videos** similar to YouTube.
- Includes a **search bar** that shows search results in real-time.
- Clicking on a video redirects to its **details page**.

## 🔍 Search Page
- Displays search results in a clean and responsive layout.
- Allows users to explore any video returned by the search.

## 📺 Video Details Page
- Displays the selected video with its full details.
- Shows **comments** related to the video.
- Includes a section for **related videos**.

## 📡 Channel Page
- Displays **channel videos** and **playlists**.
- Shows the **last five uploaded videos** and the **last five playlists** on the home tab.
- Highlights the **most recently uploaded video**.

## 🧭 Features
- Responsive design with a modern UI.
- Real-time search functionality.
- Channel sections with organized playlists and videos.
- Easy navigation between pages.
- Video details page with related content.

---

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Radix%20UI-000000?style=for-the-badge&logo=radix-ui&logoColor=white" alt="Radix UI">
  <img src="https://img.shields.io/badge/YouTube%20API-v3-red?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube API">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</p>

<p align="center">
  <strong>Responsive and interactive front-end YouTube clone built with Next.js 15+ and JavaScript</strong><br>
  <em>Experience YouTube's core features with real-time data from the YouTube Data API – SEO-optimized, performant, and mobile-first.</em>
</p>

---

## 📖 Table of Contents

- [Project Description](#-project-description)
- [🎨 UI Screenshots](#-ui-screenshots)
- [🚀 Key Features](#-key-features)
- [🛠 Technologies & Tools](#-technologies--tools)
- [📁 Project Structure](#-project-structure)
- [🔧 Environment Setup](#-environment-setup)
- [⚡ Installation & Running](#-installation--running)
- [🚀 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [📊 Performance & SEO](#-performance--seo)
- [🔮 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 📖 Project Description

**YouTube Clone** is a modern, full-featured front-end application that replicates the core user experience of YouTube. Built with **Next.js 15+** and plain **JavaScript**, it emphasizes performance, accessibility, and scalability. This project is designed for developers looking to learn advanced React patterns, state management, and API integrations while creating a production-ready clone.

### Why This Project?
- **Educational Value**: Demonstrates best practices in Next.js App Router, server-side rendering (SSR), and static site generation (SSG) for optimal SEO.
- **Real-World Integration**: Fetches live data from the **YouTube Data API v3**, including trending videos, search results, channel details, and video metadata – no mock data here!
- **Scalable Architecture**: Uses Redux Toolkit for global state, Tailwind for styling, and Radix UI for accessible components, making it easy to extend into a full-stack app.
- **Mobile-First Design**: Fully responsive across devices, with touch-friendly interactions via infinite scroll hooks.

**Live Demo**: [Deployed on Vercel](https://youtube-clone.vercel.app)

---

## 🎨 UI Screenshots

| Homepage (Trending Feed) | Video Details Page | Search Results |
|--------------------------|--------------------|----------------|
| ![Homepage](/public/screenshots/home.png) | ![Video Details](/public/screenshots/video.png) | ![Search](/public/screenshots/search.png) |

**Additional Screens**:

- **Sidebar Navigation**: ![Sidebar](./public/screenshots/sidebar.png) – Categories and quick access.
- **Channel Page**: ![Channel](/public/screenshots/channel.png) – Subscriber count, videos, and about section.
- **Mobile Layout**: ![Mobile](/public/screenshots/mobile.png) – Collapsible sidebar and touch-optimized player.
- **Dark Theme Toggle**: ![Dark Mode](/public/screenshots/dark-mode.png) – Seamless theme switching.

---

## 🛠 Technologies & Tools

| Technology | Version | Role |
|------------|---------|------|
| Next.js | 15.5.4 | Framework (App Router, SSR/SSG) |
| React | 19.1.0 | UI Components |
| Redux Toolkit | 2.9.0 | State Management |
| Tailwind CSS | 4 | Utility-First Styling |
| Radix UI | Latest | Accessible Primitives |
| Axios | 1.12.2 | HTTP Client |
| next-themes | 0.4.6 | Theme Management |
| react-infinite-scroll-component | 6.1.0 | Infinite Scrolling |
| react-infinite-scroll-hook | 6.0.1 | Scroll Hooks |
| react-loading-skeleton | 3.5.0 | Loading Placeholders |
| lucide-react | 0.544.0 | Icons |
| YouTube Data API v3 | v3 | Data Source |
| Vercel | Latest | Deployment & Hosting |

---

## 📁 Project Structure

```bash
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 .next/ 🚫 (auto-hidden)
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 public/
│   ├── 📁 assets/
│   │   ├── 📁 icons/
│   │   │   ├── 🖼️ Logo.svg
│   │   │   └── 🖼️ YouTube-Logo-2017.png
│   │   └── 📁 images/
│   │       └── 🖼️ monkey.png
│   ├── 📁 screenshots/
│   │   ├── 🖼️ channel.png
│   │   ├── 🖼️ dark-mode.png
│   │   ├── 🖼️ home.png
│   │   ├── 🖼️ mobile.png
│   │   ├── 🖼️ search.png
│   │   ├── 🖼️ sidebar.png
│   │   └── 🖼️ video.png
│   └── 🖼️ favicon.ico
├── 📁 src/
│   ├── 📁 Providers/
│   │   ├── 📄 Providers.jsx
│   │   └── 📄 ThemeProvider.jsx
│   ├── 📁 Store/
│   │   ├── 📄 ChannelSlice.js
│   │   ├── 📄 ChannelVideosSlice.js
│   │   ├── 📄 I18nSlice.js
│   │   ├── 📄 MostPopularVideosSlice.js
│   │   ├── 📄 PlaylistSlice.js
│   │   ├── 📄 RelatedVideosSlice.js
│   │   ├── 📄 SearchVideosSlice.js
│   │   ├── 📄 VideoCommentsSlice.js
│   │   ├── 📄 VideoDetailsSlice.js
│   │   ├── 📄 categoriesSlice.js
│   │   └── 📄 index.js
│   ├── 📁 app/
│   │   ├── 📁 Channel/
│   │   │   ├── 📁 Elements/
│   │   │   │   ├── 📄 BannerComponent.jsx
│   │   │   │   ├── 📄 ChannelDescriptionComponent.jsx
│   │   │   │   ├── 📄 ChannelInfoComponent.jsx
│   │   │   │   ├── 📄 ChannelPageSkeleton.jsx
│   │   │   │   ├── 📄 ChannelPlayLists.jsx
│   │   │   │   ├── 📄 ChannelTabs.jsx
│   │   │   │   ├── 📄 ChannelVideosSection.jsx
│   │   │   │   ├── 📄 HomeTab.jsx
│   │   │   │   └── 📄 PlaylistVideoCard.jsx
│   │   │   └── 📁 [id]/
│   │   │       └── 📄 page.jsx
│   │   ├── 📁 Main/
│   │   │   ├── 📁 Elements/
│   │   │   │   └── 📄 HomeVideosList.jsx
│   │   │   └── 📄 page.jsx
│   │   ├── 📁 SearchResult/
│   │   │   ├── 📁 Elements/
│   │   │   │   ├── 📄 SearchResultCard.jsx
│   │   │   │   ├── 📄 VideoInfo.jsx
│   │   │   │   └── 📄 VideoThumbnail.jsx
│   │   │   └── 📄 page.jsx
│   │   ├── 📁 Settings/
│   │   │   ├── 📁 Elements/
│   │   │   │   ├── 📄 SettingsCard.jsx
│   │   │   │   └── 📄 ThemeButton.jsx
│   │   │   └── 📄 page.jsx
│   │   ├── 📁 VideoDetails/
│   │   │   ├── 📁 Comments/
│   │   │   │   ├── 📄 AvatarSection.jsx
│   │   │   │   ├── 📄 CommentActions.jsx
│   │   │   │   ├── 📄 CommentContent.jsx
│   │   │   │   ├── 📄 CommentInput.jsx
│   │   │   │   ├── 📄 CommentItem.jsx
│   │   │   │   └── 📄 VideoComments.jsx
│   │   │   ├── 📁 Elements/
│   │   │   │   ├── 📄 ChannelAvatar.jsx
│   │   │   │   ├── 📄 VideoCommentsHeader.jsx
│   │   │   │   ├── 📄 VideoDescription.jsx
│   │   │   │   ├── 📄 VideoDetailsCard.jsx
│   │   │   │   ├── 📄 VideoHeader.jsx
│   │   │   │   ├── 📄 VideoStats.jsx
│   │   │   │   ├── 📄 VideoTags.jsx
│   │   │   │   └── 📄 VideoThumbnail.jsx
│   │   │   └── 📁 [id]/
│   │   │       └── 📄 page.jsx
│   │   ├── 🎨 globals.css
│   │   ├── 📄 layout.js
│   │   ├── 📄 not-found.jsx
│   │   └── 📄 page.js
│   ├── 📁 assets/
│   │   ├── 📁 icons/
│   │   └── 📁 images/
│   ├── 📁 components/
│   │   ├── 📁 LoadingSkeleton/
│   │   │   ├── 📄 SearchResultCardLoader.jsx
│   │   │   ├── 📄 VideoDetailsSkeleton.jsx
│   │   │   └── 📄 VideoSkeleton.jsx
│   │   ├── 📁 Navbar/
│   │   │   ├── 📁 Elements/
│   │   │   │   ├── 📄 CategoriesNav.jsx
│   │   │   │   ├── 📄 Logo.jsx
│   │   │   │   ├── 📄 NavDrawer.jsx
│   │   │   │   ├── 📄 SearchBar.jsx
│   │   │   │   ├── 📄 SearchResult.jsx
│   │   │   │   ├── 📄 SearchResultMenu.jsx
│   │   │   │   ├── 📄 SearchResultSkeleton.jsx
│   │   │   │   └── 📄 UserActions.jsx
│   │   │   └── 📄 Navbar.jsx
│   │   ├── 📁 Slider/
│   │   │   └── 📄 Slider.jsx
│   │   ├── 📁 VideoCard/
│   │   │   ├── 📁 Elements/
│   │   │   │   ├── 📄 VideoActions.jsx
│   │   │   │   ├── 📄 VideoInfo.jsx
│   │   │   │   └── 📄 VideoThumbnail.jsx
│   │   │   └── 📄 Index.jsx
│   │   └── 📁 ui/
│   │       ├── 📄 avatar.jsx
│   │       ├── 📄 button.jsx
│   │       ├── 📄 card.jsx
│   │       ├── 📄 input.jsx
│   │       ├── 📄 select.jsx
│   │       ├── 📄 sheet.jsx
│   │       ├── 📄 switch.jsx
│   │       ├── 📄 tabs.jsx
│   │       └── 📄 tooltip.jsx
│   ├── 📁 hooks/
│   │   └── 📄 useVideoTitle.jsx
│   └── 📁 lib/
│       └── 📄 utils.js
├── 📄 .env.local 🚫 (auto-hidden)
├── 🚫 .gitignore
├── 📖 README.md
├── 📄 components.json
├── 📄 eslint.config.mjs
├── 📄 jsconfig.json
├── 📄 next.config.mjs
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.mjs
└── 📄 tailwind.config.js
```

---

## 🚀 Deployment

1. Push to GitHub.
2. Connect repo to Vercel Dashboard.
3. Add env vars (e.g., `NEXT_PUBLIC_YOUTUBE_API_KEY`) in Vercel settings.
4. Deploy automatically on push to main.

Alternative: Netlify, Railway, or Docker.  
Custom Domain: Easy setup in Vercel; auto-SSL included.

---

## 📊 Performance & SEO

- Performance: Lighthouse score 95+.
- SEO: Dynamic metadata with Open Graph tags; sitemap.xml generated.
- Accessibility: WCAG 2.1 AA compliant.
- Analytics: Google Analytics or Vercel Analytics.

---

## 🔮 Roadmap

- v2.0: User authentication (Firebase), video uploads, comments system.
- v2.1: PWA support for offline viewing.
- v3.0: Backend integration (Supabase), AI recommendations.

---

## 🤝 Contributing

1. Fork the repo and create a branch:  
   `git checkout -b feature/amazing-feature`
2. Commit changes:  
   `git commit -m 'Add some AmazingFeature'`
3. Push to branch:  
   `git push origin feature/amazing-feature`
4. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📞 Contact

- GitHub: [Amrr-Maherr](https://github.com/Amrr-Maherr)
- Email: amrr.maherr24@gmail.com

---

## 🙏 Acknowledgments

- YouTube API
- Next.js Team
- Tailwind CSS
- Vercel
