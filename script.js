function suiteConway(givenSequence) {
  let conwayTrad = "";
  let count = 1;
  for (let i = 0; i < givenSequence.length; i++) {
    if (givenSequence[i + 1] && givenSequence[i] == givenSequence[i + 1]) {
      count++;
    } else {
      conwayTrad += count + givenSequence[i];
      count = 1;
    }
  }
  return conwayTrad;
}

function conwaySuiteRegEx(string) {
  const pattern = /(.)\1*/g;
  const matches = string.match(pattern);
  let result = "";
  for (let i = 0; i < matches.length; i++) {
    result += matches[i].length + matches[i][0];
  }
  return result;
}

function suiteConwaySequence(givenSequence, iteration) {
  if (iteration > 0) {
    const conwayTrad = suiteConway(givenSequence);
    return conwayTrad + "\n" + suiteConwaySequence(conwayTrad, iteration - 1);
  } else {
    return "";
  }
}

console.log(suiteConwaySequence("152", 5));

module.exports = { suiteConway, suiteConwaySequence };
