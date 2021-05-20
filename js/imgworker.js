onmessage = function(e) {
    var contact = e.data;
    var form_sum = 0;
    var form_string = '';

    for (var key in contact) {
        form_string += getString(contact[key]);
        form_sum += sumOfChar(contact[key]);
    }

    postMessage({
        'r': form_sum % 255,
        'g': 255 - (form_sum % 255),
        'b': ((0.5 * (form_sum % 255)) > 125) ? 99 : 199
    });
}

function getString(str) {
    new_str = '';
    for (i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122))
            new_str += str[i];
    }
    return new_str;
}

function sumOfChar(str) {
  var sum = 0;
  var i = 0;
  while (i++ < str.length) {
    var c = str.charCodeAt(i);
    if (c >= 97 && c <= 122)
      sum += c - 96;
    else if (c >= 65 && c <= 90)
      sum += c - 64 + 30;
  }
  return sum;
}