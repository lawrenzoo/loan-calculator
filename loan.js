function answer() {
  var amount_input = parseInt(document.getElementById("amount").value);
  var rate_input = parseInt(document.getElementById("rate").value);
  var time_input = parseInt(document.getElementById("time").value);

  //interest calculation
  var interest = (amount_input * rate_input * time_input) / 100;

  //total
  var total = interest + amount_input;

  //output final answer

  document.getElementById("output_1").innerHTML = addCommaToNumber(amount_input);

  document.getElementById("output_2").innerHTML = addCommaToNumber(interest);

  document.getElementById("output_3").innerHTML = addCommaToNumber(total);
}

function addCommaToNumber(number = 0) {
  let numStr = String(number),
    result = [],
    figure = [],
    track = numStr,
    extractNum,
    periodIndex = numStr.indexOf(".");

  if (numStr.includes(".")) {
    extractNum = numStr.slice(0, periodIndex);
  } else {
    extractNum = numStr;
  }

  for (let i = extractNum.length - 1; i >= -1; i--) {
    if (figure.length == 3) {
      result.unshift(figure.join(""));
      if (i != -1) i = i + 1;
      figure = [];
    } else if (track.length == 0) {
      result.unshift(figure.join(""));
    } else {
      figure.unshift(extractNum[i]);
      track = track.slice(0, i);
    }
  }
  if (periodIndex != -1) {
    return result.join(",").concat(numStr.slice(periodIndex));
  } else {
    return result.join(",");
  }
}
