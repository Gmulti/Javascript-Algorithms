(function(){
    'use strict';

    Array.prototype.shellsort = function() {
        var N = this.length;
        var h = 1;
        while (h < N/3){
            h = (3*h) + 1;
        }
        while(h >= 1 ){
            for (var i = h; i < N; i++) {
                for(var j = i; j >= h && this.less(this[j], this[j-h]) ; j = j-h){
                    this.exch(j, j-h);
                };
            };
            h = Math.round(h/3);
        }
    };

    Array.prototype.insertsort = function() {
        var N = this.length;
        for(var i = 1; i < N; i++){
            for(var j = i; j > 0 && this.less(this[j], this[j-1]); i--){
                this.exch(j, j-1);
            }
        }
    };

    Array.prototype.less = function(comparableA, comparableB) {
        return comparableA < comparableB;
    };
    Array.prototype.exch = function(i, j) {

        var t = this[i];
        this[i] = this[j];
        this[j] = t;
    };

    Array.prototype.show = function() {
        for (var i = 0; i < this.length; i++) {
            console.log(this[i] + " ");
        };
    };

    Array.prototype.isSorted = function() {
        for (var i = 0; i < this.length; i++) {
            if(this.less(this[i], this[i-1])){
                return false;
            }
        };

        return true;
    };


})();