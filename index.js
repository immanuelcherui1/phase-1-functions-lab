// Code your solution in this file!

const scuberHquarter = 42;
const manhattanBlockFeet = 264;

// distanceFromHqInBlocks function
function distanceFromHqInBlocks(sumTotal){
     let blocks;
     if(sumTotal > scuberHquarter){
        blocks = sumTotal - scuberHquarter;
     } else{
        blocks = scuberHquarter - sumTotal;
     }
     
     return blocks;

}

// distance from hq in feet function
function distanceFromHqInFeet(sumTotal) {
  let blocks = distanceFromHqInBlocks(sumTotal);
  return blocks * manhattanBlockFeet;

}

// distance travelled in feet function
function distanceTravelledInFeet(start, destination) {
    let travellDistance;
      if (start > destination) {
        travellDistance = (start - destination) * manhattanBlockFeet;
      } else {
        travellDistance = (destination - start) * manhattanBlockFeet;
      }
      return travellDistance;

}

// calculates fare price function
function calculatesFarePrice(start, destination) {
  let travellDistance = distanceTravelledInFeet(start, destination);
  let fare;

  if (travellDistance> 0 && travellDistance <= 400) {
    return 0;
  } else if (travellDistance > 400 && travellDistance <= 2000) {
    fare = (travellDistance - 400) * 0.02;
  } else if (travellDistance > 2000 && travellDistance <= 2500) {
    fare = 25;
  } else {
    return "cannot travel that far"
  }
  return fare;
}