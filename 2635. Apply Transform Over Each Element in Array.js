/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let sonuc=[];
    for (let i =0 ; i <arr.length;arr++){
        sonuc.push(fn(arr[i],i));
    }
    return sonuc;
};