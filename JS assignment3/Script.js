function divideArray(nums) {
    let evenNums = [];
    let oddNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenNums.push(nums[i]);
        } else {
            oddNums.push(nums[i]);
        }
    }

    evenNums.sort((a,b)=> a-b);
    oddNums.sort((a,b)=> a-b);
    console.log("Even numbers:", evenNums.length > 0 ? evenNums.join('\n') : 'None');
    console.log("Odd numbers:", oddNums.length > 0 ? oddNums.join('\n') : 'None');
}
let  nums=[1,6, 7, 88, 9];
let result=divideArray(nums);
console.log(result);