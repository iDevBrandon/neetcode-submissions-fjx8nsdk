class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
    let ans = [];
    const n = nums.length;

    for (let i=0; i<2 *n; i++) {
        ans.push(nums[i % n])
    }

    return ans
  
    }
}
