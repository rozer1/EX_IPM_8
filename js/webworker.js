onmessage = function (e) {
  var contact = e.data;

  for(var key in contact){
    contact[key] = reverseText(contact[key]);
  }
  postMessage(contact);
};

function reverseText(text) {
  var output = '';
  for (var i = 0; i < text.length; i++) {
    var character = text[i];
    if (character == character.toLowerCase()) { 
      output += character.toUpperCase();
    } else output += character.toLowerCase();
  }
  return output;
}