# Ravenous 🍽️  
A Yelp-powered restaurant search app built with **React** and **Vite**.

Ravenous allows users to search for restaurants by name and location, sort the results, and display business details such as ratings, reviews, and images.  
This project is based on the Codecademy "Build a Front-End App with React" project.

---

## 🚀 Features

- Search for restaurants using the Yelp Fusion API
- Sort results by:
  - Best Match
  - Highest Rated
  - Most Reviewed
- Responsive UI with reusable React components
- Environment variable support for securely storing API keys
- Vite proxy setup to avoid CORS issues when calling the Yelp API

---

## 🛠️ Technologies Used

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS**
- **Yelp Fusion API**

---

## 📦 Installation & Setup

Clone the repo:

```bash
git clone https://github.com/crox-07/ravenous.git
cd ravenous
```

Create a file named .env in the root of the project, and inside include:
VITE_YELP_API_KEY=your_yelp_api_key_here

Inside vite.config.js, include:
server: {
  proxy: {
    '/api': {
      target: 'https://api.yelp.com/v3',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
}

To run the app, run dev:
```bash
npm run dev
