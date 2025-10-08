
# Tetris Redux - Learning Sandbox

A classic Tetris game built with React and Redux Toolkit as a learning sandbox for exploring Redux state management concepts.

## 🎯 Purpose

This project serves as a **learning repository** and **sandbox environment** for:
- Understanding Redux state management patterns
- Practicing React component architecture
- Experimenting with game development concepts
- Learning modern Redux Toolkit usage

## 🚀 Features

- Classic Tetris gameplay mechanics
- Redux state management for game logic
- Responsive grid-based layout
- Real-time score tracking
- Next piece preview
- Pause functionality with random motivational messages
- Modern React hooks and functional components

## 🛠️ Tech Stack

- **React** (v19.1.1) - UI framework
- **Redux Toolkit** (v2.9.0) - State management
- **React-Redux** (v9.2.0) - React bindings for Redux
- **Vite** (v7.1.6) - Build tool and dev server
- **CSS3** - Styling with CSS Grid and Flexbox

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Tetris
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🎮 How to Play

- Use arrow keys to move and rotate pieces
- Complete horizontal lines to score points
- Game speed increases as you progress
- Don't let the pieces reach the top!

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Controls/          # Game control buttons
│   ├── GridBoard/         # Main game grid
│   ├── GridSquare/        # Individual grid cell
│   ├── MessagePopup/      # Pause screen with messages
│   ├── NextBlock/         # Next piece preview
│   └── ScoreBoard/        # Score and game stats
├── utils/                 # Game logic and utilities
├── reducers/              # Redux reducers
└── App.jsx                # Main app component
```

## 🧪 Learning Concepts Covered

### Redux Patterns
- **Store Configuration** with Redux Toolkit's `configureStore`
- **State Management** for game state (grid, current piece, score, etc.)
- **Action Dispatching** for game moves and updates
- **Selectors** with `useSelector` hook
- **Provider Pattern** for connecting React to Redux

### React Concepts
- **Functional Components** with hooks
- **Component Composition** and reusability
- **CSS Modules** and component-scoped styling
- **Event Handling** for user input
- **Conditional Rendering** for game states

### Game Development
- **Grid-based Layout** using CSS Grid
- **Game Loop** and state transitions
- **Collision Detection** logic
- **Shape Rotation** algorithms
- **Line Clearing** mechanics

## 🎨 Styling

The project uses CSS custom properties (variables) for:
- Color schemes and themes
- Grid dimensions and sizing
- Border effects for 3D appearance
- Responsive design patterns

## 🚧 Development Notes

This is a **sandbox project** meant for experimentation and learning. Feel free to:
- Modify game mechanics
- Add new features (sound, animations, themes)
- Experiment with different Redux patterns
- Try alternative state management approaches
- Implement additional game modes

## 🤝 Contributing

This is a learning repository! Contributions, suggestions, and improvements are welcome. Great for:
- Redux beginners looking to understand state management
- React developers wanting to practice component design
- Game development enthusiasts
- Anyone interested in clean code practices

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding and have fun learning Redux! 🎮**