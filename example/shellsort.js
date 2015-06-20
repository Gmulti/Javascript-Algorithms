(function(){
    'use strict';

    // var array  = ['C','B','Z','A','B','E'];
    // var array2  = ['C','B','Z','A','B','E'];
    // var array3  = ['C','B','Z','A','B','E'];
    var array  = [];
    var array2 = [];
    var array3 = [];

     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i <= 1000000; i++) {
        var random = possible.charAt(Math.floor(Math.random() * possible.length));
        array.push(random);
        array2.push(random);
        array3.push(random);
    };

    var start = new Date().getTime();
    array.sort();
    var end = new Date().getTime();
    var time = end - start;

    console.log(array);
    var fSort = document.querySelector("#shellshort .native-sort");
    fSort.textContent = time;

    var start = new Date().getTime();
    array2.shellsort();
    var end = new Date().getTime();
    var time = end - start;
    console.log(array2);

    var fSort = document.querySelector("#shellshort .shellsort");
    fSort.textContent = time;

    //   var mid = Math.round(array3.length);
    // start = new Date().getTime();
    // array3.merge(0,  mid , array3.length);
    // array3.shellsort();
    // end = new Date().getTime();
    // var time2 = end - start;
    // console.log(array3);


})();