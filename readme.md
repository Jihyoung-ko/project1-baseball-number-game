# Project's name

Baseball Number Game

# Description

It's not a real baseball game, it's a three digit number guessing game. You have 10 attempts and every attempt you'll have a hint. If the number and the position is correct, you get Strike. If the answer has that number but the position is not correct, you get Ball. If there is no number you guessed in the answer, you get Out. 

Example. 

The answer number: 178

1st attempt: 825 -> 1 Ball 2 Out(you got one ball for 8)
2nd attempt: 784 -> 2Ball 1 Out(you got two balls for 7 and 8)
3rd attempt: 148 -> 2 Strike 1 Out (you got two strikes for 1 and 8)


# MVP 

- Splash screen with the instruction
- The player picks three numbers and click
- The player can see the hint with amount of strikes and balls
- The player can see a new line for the next try
- The player can see the win-game screen 
- The player can see the lose-game screen aftet 10 attempts
- The player can see and click the 'play again' button



# Backlog

- The player must guess a three digit number
- The player can guess 10 times
- Show the result of every attempt (comparison between the answer  and the guessed number)
- Let players know the correct answer if they lose
- Let player choose to play agian 
- Screen style
- Sound effects

# Data structure

- Random number generate function
- Answer and guessed number comparison function (split and array.map)
- Function to check the attempts


# States and States transitions

- Splash screen: Instruction and start button
- Game screen: Number input and feedback on the result
- Win the game screen with play again button
- Game over screen with play again button

# Links

# Git

https://github.com/Jihyoung-ko/project1-baseball-number-game

# Slides


