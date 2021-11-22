var Semaforo = function(callback, context) {
    this.semaforo = 0;
    this.callback = callback;
    this.context = context || this;
};

Semaforo.prototype.increment = function() {
    this.semaforo = this.semaforo + 1;
};

Semaforo.prototype.execute = function() {
    this.semaforo = this.semaforo -1;

    if(this.semaforo <= 0 && this.callback) {
        this.callback.apply(this.context, arguments);
    }
};

module.exports = Semaforo;