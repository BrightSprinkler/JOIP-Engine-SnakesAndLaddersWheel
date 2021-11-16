var punisherVisits = 0;
var imageFieldStack = [];
var isSlideShow = false;
var lastTurn = { roll: 0, newField: 1, isSnake: false, isLadder: false, isReverse: false, isInReverse: false };
var currentTurn = { roll: 0, newField: 1, isSnake: false, isLadder: false, isReverse: false, isInReverse: false };
var game = {
    currentFieldIndex: 0,
    diceSize: 6,
    isInReverse: false,
    turnCounter: 0,
    innerRing: {
        fieldCount: undefined,
        startIndex: undefined,
        ladderIndex: undefined,
        snakeIndex: undefined,
        reverseIndex: undefined,
      },
    middleRing: {
        fieldCount: undefined,
        startIndex: undefined,
        ladderIndex: undefined,
        snakeIndex: undefined,
        reverseIndex: undefined,
      },
    outerRing: {
        fieldCount: undefined,
        startIndex: undefined,
        ladderIndex: undefined,
        snakeIndex: undefined,
        reverseIndex: undefined,
      },
    currentRing: null,
    lastRing: null,
    rollDice: function() {
      return Math.floor((Math.random() * game.diceSize) + 1);
    },
    isOnSnake: function(index, ring) {
      return ring.snakeIndex === index;
    },
    isOnLadder: function(index, ring) {
      return ring.ladderIndex === index;
    },
    isOnReverse: function(index, ring) {
      return ring.reverseIndex.indexOf(index) !== -1;
    },
    advance: function(currentField, fieldCount, reverse, ring) {
      console.warn("game", "advance parameter", currentField, fieldCount, reverse, ring)

      for (var i = 0; i < fieldCount; i++) {
        currentField = reverse ? currentField - 1 : currentField + 1;
        if (currentField == ring.fieldCount + ring.startIndex) currentField = ring.startIndex;
        if (currentField < ring.startIndex) currentField = ring.fieldCount + ring.startIndex - 1;

        console.warn("game", "advancing to " + currentField);
      }
  
      return currentField;
    },
    getRing: function(startindex ,fieldCount ,ladderFieldIndex, snakeFieldIndex , reverseFieldIndex) {
      var reverseFields = [];
      for (var i = 0; i < reverseFieldIndex.length; i++) {
        reverseFields.push(reverseFieldIndex[i] + startindex);
      }

      return {
        fieldCount: fieldCount,
        startIndex: startindex,
        ladderIndex: ladderFieldIndex + startindex,
        snakeIndex: snakeFieldIndex + startindex,
        reverseIndex: reverseFields
      }
    },
    playTurn: function() {
      if(!game.currentRing) {
        game.innerRing = game.getRing(0, 8, 0, 4, [2, 6]);
        game.middleRing = game.getRing(8, 16, 0, 8, [4, 12])
        game.outerRing = game.getRing(24, 24, 0 ,12, [6, 18])
        game.currentRing = game.innerRing;
        game.lastRing = game.innerRing;
      }

      game.turnCounter++;
      console.warn("game", "turn", game.turnCounter);

      lastTurn = currentTurn;

      if(lastTurn.isSnake) {
        game.currentFieldIndex = game.currentRing.snakeIndex;
      }

      var result = { roll: 0, newField: 0, isSnake: false, isLadder: false, isReverse: false, isInReverse: game.isInReverse };
      var roll = game.rollDice();
      console.warn("game", "dice roll", roll);
      var newField = game.advance(game.currentFieldIndex, roll, game.isInReverse, game.currentRing);
    
      console.warn("game", "newField", newField);

      if (game.isOnLadder(newField, game.currentRing)) {
        result.isLadder = true;
        console.warn("game", "isLadder");
        if (game.currentRing === game.outerRing) {
          console.warn("game", "isOnLastRing");
          game.lastRing = game.outerRing;
          game.currentRing = game.outerRing;
          newField = game.outerRing.fieldCount + game.outerRing.startIndex;
        } else {
          console.warn("game", "isNotOnLastRing");
          game.lastRing = game.currentRing;
          game.currentRing = game.currentRing === game.innerRing ? game.middleRing : game.outerRing;
          console.warn("game", "lastRing", game.lastRing);
          console.warn("game", "currentRing", game.currentRing);
          newField = game.currentRing.ladderIndex;
        }
  
      }

      if (game.isOnSnake(newField, game.currentRing)) {
        result.isSnake = true;
        console.warn("game", "isSnake");
        if (game.currentRing !== game.innerRing) {
          console.warn("game", "isNotInnerRing");
          game.lastRing = game.currentRing;
          game.currentRing = game.currentRing == game.middleRing ? game.innerRing: game.middleRing;
          console.warn("game", "lastRing", game.lastRing);
          console.warn("game", "currentRing", game.currentRing);
          newField = game.lastRing.snakeIndex;
        }
      }

      if (game.isOnReverse(newField, game.currentRing)) {
        console.warn("game", "isReverse");
        result.isReverse = true;
        game.isInReverse = !game.isInReverse;
      }
  
      game.currentFieldIndex = newField;
  
      result.roll = roll;
      result.newField = newField + 1;
      currentTurn = result;

      console.warn("game", "result",result);

      return result;
    }
  };