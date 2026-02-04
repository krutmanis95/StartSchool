const flowerbed = [1,0,0,0,0,0,0,1]
const n = 2

function canPlaceFlowers(flowerbed, n) {
    let canPlant = 0;
    for(let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0 && flowerbed[i] == 0) {
            
            canPlant ++;
            console.log(canPlant);

            if (n == canPlant) {
                return true;
            }

            i += 2;
            if (i > flowerbed.length) {
                return false;
            }
    
        }
    
    }
    return false; 
}


console.log(canPlaceFlowers(flowerbed, n));