/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];             // Yeni bir dizi oluşturuyoruz, filtrelenen öğeleri burada tutacağız.

    for (let i = 0; i < arr.length; i++) {   // Tüm diziyi döngü ile geziyoruz.
        if (fn(arr[i], i)) {                // fn fonksiyonu hem öğeyi hem de indeksini alabilir.
            filteredArr.push(arr[i]);       // Fonksiyon sonucu "truthy" ise o öğeyi yeni diziye ekliyoruz.
        }
    }

    return filteredArr;                 // Filtrelenmiş diziyi döndürüyoruz.
};
    