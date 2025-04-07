# Clock with Time Indicators ⏰🔴🔵

A simple interactive clock with visual time indicators using red and blue circles. The red circle represents minutes and the blue circle represents hours.

## Features ✨

- **Real-time analog clock** display
- **Visual time indicators**:
  - 🔴 Red circle - Minute indicator
  - 🔵 Blue circle - Hour indicator
- **Clean, normal UI**

## How It Works 🛠️

The clock uses JavaScript's `setInterval` to update the indicator positions every second:  

- **12-Point Circle:** The clock face has 12 positions (like hours on a clock).  
- **Red Dot:** Jumps every second (1 full rotation = 12 seconds).  
- **Blue Dot:** Advances every time the red dot completes a cycle (1 full rotation = 12 × 12 = 144 seconds = 2.4 minutes).  

## Technologies Used 💻

- **HTML5** - Basic structure
- **CSS3** - Styling and animations
- **JavaScript** - Time calculations and DOM manipulation

## Getting Started 🚀

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/clock-indicators.git
   ```
2. Open `index.html` in your browser
3. No dependencies or build step required

## 🤝 Contributing  

Want to improve this clock?  
- Fork the repo  
- Submit a **Pull Request**  
