const hqStreet = 42

function distanceFromHqInBlocks(pickupStreet) {
    return Math.abs(hqStreet - pickupStreet);
}

function distanceFromHqInFeet(pickupStreet) {
    let blocks = distanceFromHqInBlocks(pickupStreet);
    return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400){
        return 0 ;
    }
    else if (distance > 400 && distance <= 2000){
        let chargedDistance = distance - 400;
        return chargedDistance * .02
    }
    else if (distance > 2000 && distance < 2500){
        return 25
    }
    else if (distance > 2500) {
        return "cannot travel that far"
    }
}