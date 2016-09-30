var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// valid JS is valid typescript
(function () {
    var standardJS = 'can be done in typescript';
    return standardJS;
}());
// ES6 things like Object.assign will pollyfill if targeting below ES6
var someObject = function () {
    var _this = this;
    // Fat Arrow function with string interpolation
    var stringProp = "some string\n        multi line\n    ";
    var fatArrow = function (x) { _this.stringProp = "" + x; };
    return { fatArrow: fatArrow };
};
// Class implementing interface
var Bax = (function () {
    function Bax(bar) {
        this.baz = [];
        this.zoinks = 10; // Compile time checks
        this.bar = bar;
    }
    Bax.prototype.total = function () {
        return this.baz.reduce(function (x, y) { x + y; });
    };
    return Bax;
}());
var ChildOfBax = (function (_super) {
    __extends(ChildOfBax, _super);
    function ChildOfBax() {
        _super.call(this, 'Child of Bax');
        this.bam = 10;
    }
    return ChildOfBax;
}(Bax));
var bax = new Bax('some string');
console.log(bax.zoinks + 10); // Shows warning but compiles
