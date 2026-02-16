# Last updated: 16/02/2026, 16:15:25
class Solution(object):
    def twoSum(self, nums, target):
    
        d={}
        for i in range(0,len(nums)):
            value=nums[i]
            diff=target-value
            if value not in d:
                d[diff]=i 
            else:
                ci=i
                pi=d[value]
                return [ci,pi]


        