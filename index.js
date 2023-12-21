const hq = 42;
const feetPerBlock = 264;

function distanceFromHqInBlocks(street){
    return Math.abs(street-hq);
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street)*feetPerBlock; //we can call another function inside a function 
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination-start)*feetPerBlock;
}

function calculatesFarePrice(start, destination){
    let dist=distanceTravelledInFeet(start, destination);
    if (dist>=0 && dist<=400){
        return 0;
    }
    else if (dist>=401 && dist<=2000){
        return (dist-400)*0.02;
    }
    else if (dist>=2001 && dist<2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}