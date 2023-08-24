// // index.js
function isPalindrome(string) {
    // O(n)
    // Put a pointer at each extreme of the word and iterate "inwards"
    // At each iteration, check if the pointers represent equal values
    // If this condition isn't accomplished, the word isn't a palindrome
    let left = 0
    let right = string.length-1
  
    while (left < right) {
        if (string[left] === string[right]) {
            left += 1
            right -= 1
        }
        else return false
    }
  
    return true
}

// index.js
function twoSum(nums, target) {
    // O(n)
    // Iterate the array once
    // At each iteration, calculate the value needed to get to the target, which is target - currentValue
    // If the neededValue exists in the array, return [currentValue, neededValue], else continue iteration
	for (let i = 0; i < nums.length; i++) {
		const neededNum = target - nums[i]
		if (nums.indexOf(neededNum) !== -1 && nums.indexOf(neededNum) !== i) return [nums[i], nums[nums.indexOf(neededNum)]]
	}
    return false
}

module.exports = { isPalindrome, twoSum }