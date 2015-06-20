(function(){
    'use strict';

    var array  = [];
    var array2 = [];

    for (var i = 0; i <= 80000; i++) {
        var random = Math.random() * 10;
        array.push(random);
        array2.push(random);
    };

    var start = new Date().getTime();
    array.sort();
    var end = new Date().getTime();
    var time = end - start;
    console.log(time, array);

    var start = new Date().getTime();
    array2.shellsort();
    var end = new Date().getTime();
    var time = end - start;
    console.log(time, array2);


})();