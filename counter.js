/**
 * Created by alexanderbol on 11/06/2016.
 */
var Counter = function (initValue) {
    this.value = initValue;

    this.increment = function() {
        this.value++;
    };

    this.decrement = function() {
        this.value--;
    };
};