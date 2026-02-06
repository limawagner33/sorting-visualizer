# 📊 Sorting Algorithms Visualizer

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

An interactive web application built to visualize classic sorting algorithms in action. This project demonstrates knowledge of **Algorithms**, **React Hooks**, and **Asynchronous JavaScript**.

## 🚀 Live Demo

👉 **[Click here to test the application online](https://sorting-visualizer-limawagner33.vercel.app/)**

---

## 🛠 Features

- **Multi-Algorithm Support:** Visualize both **Bubble Sort** (O(n²)) and **Quick Sort** (O(n log n)).
- **Real-time Control:** Adjustable sorting speed and array size.
- **Visual Feedback:**
  - 🟦 **Turquoise:** Default state.
  - 🟥 **Red:** Comparing elements.
  - 🟪 **Purple:** Swapping elements.
  - 🟩 **Green:** Sorted elements.
- **Responsive Design:** Clean UI built with modern CSS.

---

## 🧠 Technical Concepts Applied

### 1. Asynchronous Animation Control
Handling animations in React usually requires complex libraries. In this project, I implemented a custom `sleep` function combined with `async/await` inside the sorting loops. This allows the UI to update visually at each step without blocking the JavaScript main thread.

```javascript
// Custom delay function to control animation speed
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));```

```
### 2. State Management & Immutability
Used ```useState``` and ```useRef``` to manage the array state and control the execution flow (preventing the user from breaking the app while sorting is active).

### 3. Algorithm Implementation
Bubble Sort: Implemented with nested loops, visualizing the "bubbling" effect of the largest elements.

Quick Sort: Implemented recursively using a partition logic, demonstrating understanding of "Divide and Conquer" strategies.

---

💻 How to Run Locally
1. Clone the repository

```Bash```
```git clone [https://github.com/limawagner33/sorting-visualizer](https://github.com/your-username/sorting-visualizer.git)```

2. Install dependencies

```Bash```
```cd sorting-visualizer
npm install```

3. Start the development server

```Bash```
```npm run dev```

---

📬 Contact
Project developed by Wagner Lima. Connect with me on LinkedIn.**(https://www.linkedin.com/in/wagner-matos-de-lima/)**
