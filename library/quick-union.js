

function QuickUnion(N){
    this.count = N;
    this.parent = new Array(N);
    this.size   = new Array(N);
    for (var i = 0; i < N; i++) {
        this.parent[i] = i;
        this.size[i]   = 1;
    }
};

QuickUnion.prototype.count = function(){
    return this.count;
}

QuickUnion.prototype.find = function(p) {
    this.validate(p);
    while (p != this.parent[p]){
        p = this.parent[p];
    }

    return p;
}

QuickUnion.prototype.validate = function(p) {
    var N = this.parent.length;
    if (p < 0 || p >= N) {
        console.log("index " + p + " is not between 0 and " + N);
    }
}

QuickUnion.prototype.connected = function(p, q) {
    return this.find(p) == this.find(q);
}

QuickUnion.prototype.union = function(p, q) {
    var rootP = this.find(p);
    var rootQ = this.find(q);

    if (rootP == rootQ) return;

    if (this.size[rootP] < this.size[rootQ]) {
        this.parent[rootP] = rootQ;
        this.size[rootQ] += this.size[rootP];
    }
    else {
        this.parent[rootQ] = rootP;
        this.size[rootP] += this.size[rootQ];
    }

    this.count--;
}

