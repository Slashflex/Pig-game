<h1 align="center">Welcome to Pig Game 👋</h1>

<p align="center" markdown="1">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/Slashflex/Pig-game?style=flat-square">
  <img alt="Netlify" src="https://img.shields.io/netlify/99e9ec54-e3aa-4d05-b6b2-c3fc6eeb0088?style=flat-square">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Slashflex/Pig-game?style=flat-square">
</p>

> Game created using Native Javascript, JQuery, SASS(scss synthax), 7-1 pattern and BEM methodology. 

### GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- You can now specify your own winning score, if not set, 100 will be set by default.

## Install

```sh
npm install 
# This will install node-sass locally based on package.json
```

## Usage (If you want to make modifications to SCSS files)

```sh
npm run compile:sass 
# This will run a script from package.json which compiles scss files into css
```

```sh
npm run concat:css
# This will concat the above script
```

```sh
npm run prefix:css
# This will add prefix for browser supports to a new file eg.(css/style.prefix.css)
```

```sh
npm run compress:css
# This will compress css/style.prefix.css into css/style.css
```

```sh
npm run build:css
# This will run all of 4 above scripts to run into a single one 
# (if css files gets deleted, this will regenerate them based on sass folder's files)
```

## Author

👤 **Slashflex (David)**

* Twitter: [@saoud_david](https://twitter.com/saoud_david)
* Github: [@Slashflex](https://github.com/Slashflex)

## Result can be seen here
[Pig Game](https://pig-game-nativejs.netlify.com/)
## Show your support

Give a ⭐️ if you liked this project !

***

