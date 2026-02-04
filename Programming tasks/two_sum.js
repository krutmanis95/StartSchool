// const nums = [2,7,11,15];
// const target = 9;

const nums = [3,2,4];
const target = 6;

function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {

        for(let j = i + 1; j < nums.length; j++) {

            if (target == nums[i] + nums[j]){
                return `[${i}, ${j}]`;
            }
        }
    }
}

console.log(twoSum(nums, target));