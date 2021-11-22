var Semaforo = require("./semaforo");

var sem1 = new Semaforo(function(i){
    console.log("Ultimo callback... estuvo en la iteración #" +i);
});  // i es el indice del proceso que se ejcuta

for(var i =0, l = 100; i < l; i++) {
    sem1.increment();
    var timeout = Math.floor(Math.random() * 1001);

    setTimeout((function(_i){
        return function() {
            sem1.execute(_i)
        };
    })(i), timeout);
}