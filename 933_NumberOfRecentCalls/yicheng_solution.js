function RecentCounter() {
    this.queue = [];
};

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);

    while (!(this.queue[this.queue.length - 1] - 3000 <=
    this.queue[0] && this.queue[0] <= this.queue[this.queue.length - 1])){
        this.queue.shift();
    }

    return this.queue.length;
};


var counter = new RecentCounter();
console.log(counter.ping(1));
console.log(counter.ping(100));
console.log(counter.ping(3001));
console.log(counter.ping(3002));
