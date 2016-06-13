/**
 * Created by alexanderbol on 11/06/2016.
 */
var CounterView = function(counter) {
    var _this;

    this.model = counter;

    this.render = function() {
        _this = this;

        document.body.innerHTML = "";
        document.body.innerHTML +=
        "<div>" +
            "<h1 id='counter'>" + this.model.value + "</h1>" +
            "<button id='increment'><h3>Increment</h3></button>" +
            "<button id='decrement'><h3>Decrement</h3></button>" +
        "</div>";

        document.getElementById('increment').addEventListener('click', this.increment);
        document.getElementById('decrement').addEventListener('click', this.decrement);
    };

    this.increment = function() {
        _this.model.increment();
        _this.render();
    };

    this.decrement = function() {
        _this.model.decrement();
        _this.render();
    };
};