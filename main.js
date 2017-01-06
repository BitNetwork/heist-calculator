function splitWinnings(payout, winners, losers) {
  var numberWinners = typeof winners === "number" ? winners : winners.length;
  var numberLosers = typeof losers === "number" ? losers : losers.length;
  var winnerWinnings = payout / 4;
  var winnerIndividualWinnings = winnerWinnings / numberWinners;
  var loserWinnings = payout / 4 * 3;
  var loserIndividualWinnings = loserWinnings / numberLosers;
  var transferText = "";
  if (typeof winners !== "string") {
    for (var i=0; i<winners.length; i++) {
      transferText += "!bank transfer @" + winners[i] + " " + Math.floor(winnerIndividualWinnings.toString()) + "\n";
    }
    for (var j=0; j<losers.length; j++) {
      transferText += "!bank transfer @" + losers[j] + " " + Math.floor(loserIndividualWinnings.toString()) + "\n";
    }
  }
  transferText = transferText.substring(0, transferText.length - 1);

  return [winnerIndividualWinnings, loserIndividualWinnings, transferText];
}

function inputChanged() {
  // I didn't wanna create additional variables okay?
  var result = splitWinnings(parseInt(document.getElementById("payout").value), document.getElementById("winners").value === "" ? parseInt(document.getElementById("numWinners").value) : document.getElementById("winners").value.split("\n"), document.getElementById("losers").value === "" ? parseInt(document.getElementById("numLosers").value) : document.getElementById("losers").value.split("\n"));
  document.getElementById("output").value = "The winners will get " + result[0] + "$ each.\nThe losers will get " + result[1] + "$ each.\n\n" + result[2];
}
