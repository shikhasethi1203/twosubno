
 var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
        temp = nums[i]+nums[j];
        if(temp == target){
            return [nums[i],nums[j]]
        }
      }
    }
    
};
console.log(twoSum([15, 7, 11, 2],9))
console.log(twoSum([3, 2, 4],6))
console.log(twoSum([3,3],6))

