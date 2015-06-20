(function(){
    'use strict';

    // var array   = ['M','E','R','G','E','S','O','R','T','E','X','A','M','P','L','E'];
    // var array2  = ['M','E','R','G','E','S','O','R','T','E','X','A','M','P','L','E'];
    // var array3  = ['M','E','R','G','E','S','O','R','T','E','X','A','M','P','L','E'];
    var array  = [];
    var array2 = [];
    var array3 = [];
    var array4 = [];

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i <= 800000; i++) {
        var random = possible.charAt(Math.floor(Math.random() * possible.length)) +
        possible.charAt(Math.floor(Math.random() * possible.length)) +
        possible.charAt(Math.floor(Math.random() * possible.length)) +
        possible.charAt(Math.floor(Math.random() * possible.length));
        array.push(random);
        array2.push(random);
        array3.push(random);
        array4.push(random);
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

    var qu = new QuickUnion(10);


    var a = 4;
    var b = 3;

    if (!qu.connected(a, b)){
        qu.union(a, b);
    }

    var a = 3;
    var b = 8;

    if (!qu.connected(a, b)){
        qu.union(a, b);
    }

    var a = 6;
    var b = 5;

    if (!qu.connected(a, b)){
        qu.union(a, b);
    }

    var start = new Date().getTime();
    array4.sortPedantic();
    var end = new Date().getTime();
    var time = end - start;
    console.log(array4);

    var fSort = document.querySelector("#pedantic .pedantic");
    fSort.textContent = time;

})();