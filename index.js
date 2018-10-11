// add solution here
function theBeatlesPlay(musicians, instruments) {

 var musicianInstruments = [];

 for(var i = 0; i < musicians.length; i++) {
  var string = musicians[i] + " plays " +  instruments[i];
  musicianInstruments.push(string);
  }

return musicianInstruments;
}
