(function(){
    'use strict';

    Array.prototype.sortPedantic = function() {
        this.shuffle();
        this.sortPrivatePedantic(0, this.length - 1);
    }

    Array.prototype.sortPrivatePedantic = function(lo, hi) {
        if (hi <= lo){
            return;
        }
        var j = this.partition(lo, hi);
        this.sortPrivatePedantic(lo, j-1);
        this.sortPrivatePedantic(j+1, hi);
    }

    Array.prototype.shuffle = function(){
        for(var j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    }

    Array.prototype.eq = function(v, w) {
        return v === w;
    }

    Array.prototype.select = function(k) {
        if (k < 0 || k >= this.length) {
            console.log("Selected element out of bounds");
        }

        this.shuffle(this);
        var lo = 0, hi = this.length - 1;

        while (hi > lo) {
            var i = this.partition(lo, hi);
            if      (i > k) {
                hi = i - 1;
            }
            else if (i < k) {
                lo = i + 1;
            }
            else{
                return a[i];
            }
        }
        return a[lo];
    }

    Array.prototype.partition = function(lo, hi) {
        var i = lo;
        var j = hi + 1;
        var v = this[lo];

        while (true) {

            while (this.less(this[++i], v)){
                if (i == hi){
                    break;
                }
            }

            while (this.less(v, this[--j])){
                if (j == lo){
                    break;
                }
            }

            if (i >= j){
                break;
            }

            this.exch(i, j);
        }

        this.exch(lo, j);

        return j;
    }

})()