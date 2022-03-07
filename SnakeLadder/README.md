## Need

Services
1. Input Taker   - File or Cli 
2. Game Engine
3. Main Service to operate the game


Entities:
1. Snake
2. Ladder
3. Player
4. Dice
5. Board

// Exmaple Input
3  - No of snakes
1 2 - S1
3 5 - s2
4 6 - S3
3 - No of Ladders
1 3 - L1
2 7 - L2
7 8 - L3
2 - No of Players
A - P1
B - P2



1. Board can be of nth cell - Handled by Board Generator
2. Baord will have dice - Handled by Dice Generator
3. There can be nth players - Handled by Game Engine.
4. Decide where player will move based on dice number. - Hadnled by Game Engine
5. Dice can be roll in multiple ways - Handled By Dice
6. Decide who wins the game and when ? - Decied by Game Engine

