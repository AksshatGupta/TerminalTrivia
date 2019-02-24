const say = require('say');

// say.setPlatform(say.platforms.WIN32)

// Use default system voice and speed
// say.speak('Hello!')

// Stop the text currently being spoken
// say.stop()

//say.getInstalledVoices(console.log);

const { fetchUrl } = require('fetch');

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl('http://jservice.io/api/random', (error, meta, body) => {
  const triviaObject = JSON.parse(body)[0];
  // say.speak(triviaObject.question, function() {
  //   say.speak(triviaObject.answer);
  // });
  console.log(triviaObject.question);
  say.speak(triviaObject.question, 'Microsoft David Desktop', 1.0, (err) => {
    if (err) {
      return say.speak("Something is not right");
    }

    say.speak(triviaObject.answer);
    console.log(triviaObject.answer);
  });
});
