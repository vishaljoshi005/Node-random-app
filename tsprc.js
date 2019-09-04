var a = /** @class */ (function () {
    function a(a, b) {
        this.a1 = a;
        this.a2 = b;
    }
    ;
    return a;
}());
;
var obj = new a("a string", 500);
var abc = "This is a string " + obj.a1 + " this is the value of a " + obj.a2 + " ";
document.body.innerHTML = abc;
