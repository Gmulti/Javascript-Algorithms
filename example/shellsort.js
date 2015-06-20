(function(){
    'use strict';

    // var array   = ['M','E','R','G','E','S','O','R','T','E','X','A','M','P','L','E'];
    // var array2  = ['M','E','R','G','E','S','O','R','T','E','X','A','M','P','L','E'];
    // var array3  = ['M','E','R','G','E','S','O','R','T','E','X','A','M','P','L','E'];
    var array  = [];
    var array2 = [];
    var array3 = [];

     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i <= 800000; i++) {
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
    var fSort = document.querySelector("#native-sort");
    fSort.textContent = time;

    var start = new Date().getTime();
    array2.shellsort();
    var end = new Date().getTime();
    var time = end - start;
    console.log(array2);

    var fSort = document.querySelector("#shellshort .shellsort");
    fSort.textContent = time;

    var start = new Date().getTime();
    array3.sortTopDown();
    var end = new Date().getTime();
    var time = end - start;
    console.log(array3);

    var fSort = document.querySelector("#top-down .topdown");
    fSort.textContent = time;


})();