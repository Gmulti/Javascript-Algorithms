(function(){
    'use strict';

    Array.prototype.mergeTopDown = function(aux, low, mid, high){

        for (var k = low; k <= high; k++) {
            aux[k] = this[k];
        };

        var i = low
        var j = mid+1;

        for (var k = low; k <= high; k++) {
            if (i > mid) {
                this[k] = aux[j++];
            }
            else if(j > high){
                this[k] = aux[i++];
            }
            else if(this.less(aux[j], aux[i])){
                this[k] = aux[j++];
            }
            else{
                this[k] = aux[i++];
            }
        };
    }

    Array.prototype.sortTopDown = function() {
        var N = this.length;
        var aux = new Array(N);

        for (var n = 1; n < N; n = n+n) {
            for (var i = 0; i < N-n; i += n+n) {
                var lo = i;
                var m  = i+n-1;
                var hi = Math.min(i+n+n-1, N-1);

                this.mergeTopDown(aux, lo, m, hi);
            }
        }
    }

})();