var imageFieldStack = [];
var isSlideShow = false;
var lastTurn = { roll: 0, newField: 1, isSnake: false, isLadder: false, isReverse: false };
var game = {
    currentFieldIndex: 0,
    isInReverse: false,
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
    rollDice: function() {
      return Math.floor((Math.random() * 6) + 1);
    },
    isOnSnake: function(index, ring) {
      return ring.snakeIndex === index;
    },
    isOnLadder: function(index, ring) {
      return ring.ladderIndex === index;
    },
    isOnReverse: function(index, ring) {
      return ring.reverseIndex.indexOf(index) === -1;
    },
    advance: function(currentField, fieldCount,reverse, ring) {
      for (var i = 0; i < fieldCount; i++) {
        currentField = reverse ? currentField - 1 : currentField + 1;
  
        if (currentField == ring.fieldCount + ring.startIndex) currentField = ring.startIndex;
        if (currentField < ring.startIndex) currentField = ring.fieldCount + ring.startIndex - 1;
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
      }
    
      var result = { roll: 0, newField: 0, isSnake: false, isLadder: false, isReverse: false };
      var roll = game.rollDice();
      var newField = game.advance(game.currentFieldIndex, roll, game.isInReverse, game.currentRing);
    
      if (game.isOnLadder(newField, game.currentRing)) {
        result.isLadder = true;
  
        if (game.currentRing === game.outerRing) {
          newField = game.outerRing.fieldCount + game.outerRing.startIndex + 1;
        } else {
          game.currentRing = game.currentRing === game.innerRing ? game.middleRing : game.outerRing;
          newField = game.currentRing.ladderIndex;
        }
  
      }

      if (game.isOnSnake(newField, game.currentRing)) {
        result.isSnake = true;
  
        if (game.currentRing !== game.innerRing) {
          game.currentRing = game.currentRing == game.middleRing ? game.innerRing: game.outerRing;
          newField = game.currentRing.ladderIndex;
        }
  
      }

      if (game.isOnReverse(newField, game.currentRing)) {
        result.isReverse = true;
        game.isInReverse = !game.isInReverse;
      }
  
      game.currentFieldIndex = newField;
  
      result.roll = roll;
      result.newField = newField + 1;
      console.warn(result);
      lastTurn = result;
      return result;
    }
  };