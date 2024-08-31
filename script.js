function suiteConway(givenSequence) {
  let conwayTrad = "";
  let count = 1;
  for (let i = 0; i < givenSequence.length; i++) {
    if (givenSequence[i + 1]) {
      if (givenSequence[i] == givenSequence[i + 1]) {
        count++;
      } else {
        conwayTrad += count + givenSequence[i];
        count = 1;
      }
    } else {
      conwayTrad += count + givenSequence[i];
    }
  }
  return conwayTrad;
}

function suiteConwaySequence(givenSequence, iteration) {
  if (iteration > 0) {
    let conwayTrad = "";
    let count = 1;
    for (let i = 0; i < givenSequence.length; i++) {
      if (givenSequence[i + 1]) {
        if (givenSequence[i] == givenSequence[i + 1]) {
          count++;
        } else {
          conwayTrad += count + givenSequence[i];
          count = 1;
        }
      } else {
        conwayTrad += count + givenSequence[i];
      }
    }
    console.log(conwayTrad);
    suiteConwaySequence(conwayTrad, iteration - 1);
  } else {
    return;
  }
}

suiteConwaySequence("a", 5);


module.exports = { suiteConway, suiteConwaySequence };
