/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;                     // Başlangıç değeri init olarak atanır

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);        // Her elemanla sırayla işlem yapılır
    }

    return val;                        // Sonuç döndürülür
};
