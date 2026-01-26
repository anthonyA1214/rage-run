# Rage Run

## Abstract

"Rage Run" is a level-based reflex and timing challenge game inspired by CS50's Ivy's Hardest Game. The player must navigate through a series of increasingly difficult stages filled with moving obstacles, enemy patterns, and carefully designed pathways. The goal is to reach the end of each level without touching any hazards. This project aims to enhance the player's precision, timing, spatial awareness, and strategic problem-solving through engaging and progressively challenging gameplay.

## Game Objective

1. Reach the goal in each stage without colliding with obstacles or enemies.
2. Collect required items to unlock exits or complete objectives.
3. Complete all levels following increasing difficulty and complexity.
4. Develop mastery of timing and movement precision throughout the game progression.

## Game Mechanics

### Player Movement
- Move in four directions (up, down, left, right) using keyboard input.
- Movement must be precise to avoid hitting hazards.

### Obstacles / Enemies
- Moving hazards follow fixed or looping paths.
- Touching any obstacle results in an instant reset of the level.
- Later levels may introduce:
  - Faster enemies
  - Multiple movement patterns
  - Tighter spaces

### Collectibles
- Keys, tokens, or orbs that the player must gather before reaching the exit.
- Adds strategy and route planning to each level.

### Levels
Each level has:
- Unique layout
- New enemy patterns
- Specific difficulty focus

Difficulty increases by introducing:
- Faster enemy speeds
- Complex patterns
- Limited safe zones

### Difficulty Scaling
- Early levels teach basic movement and avoidance.
- Mid-game levels combine multiple mechanics.
- Final levels require advanced timing and precise navigation.

### Scoring System
Tracks:
- Current level
- Number of deaths and total time
- Completion statistics

## Project Structure

```
rage-run/
├── index.html          # Main HTML file
├── css/
│   ├── styles.css      # Custom styles
│   └── bootstrap.min.css
├── js/
│   ├── bootstrap.bundle.min.js
│   ├── p5.min.js       # p5.js library
│   └── game/
│       └── sketch.js   # Game logic
└── assets/             # Game assets (sprites, images)
```

## Getting Started

1. Open `index.html` in a web browser.
2. Use arrow keys or WASD to move the character.
3. Avoid obstacles and reach the goal to advance to the next level.

## Technologies Used

- **p5.js** - Creative coding library for graphics and interaction
- **Bootstrap** - CSS framework for responsive design
- **HTML5 / CSS3 / JavaScript** - Core web technologies