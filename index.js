function shout(string) {
    return string.toUpperCase();
}

shout("Hello");

function whisper(string) {
    return string.toLowerCase()
}

whisper("HELLO");

function logShout(string) {
    console.log(string.toUpperCase())
}

const spy = logShout("hello")
  
spy;

function logWhisper(string) {
    console.log(string.toLowerCase())
}

const shh = logWhisper("HELLO")
  
shh;

function sayHiToHeadphonedRoommate (string) {
    let whisperHi = "I can't hear you!";
    let shoutHi = "YES INDEED!";
    let normalHi = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return whisperHi;
    }
    else if (string.toUpperCase(string) === string) {
      return shoutHi;
    }
    else if ("Let's have dinner together!" === string) {
      return normalHi;
    }
  }
