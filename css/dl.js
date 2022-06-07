// JavaScript Document
var oril = document.getElementById('str7');
var dest = document.getElementById('a_mo7');
function order() {
    var result = oril.value.split(/\n/);
    var len = result.length;
    result.sort(function(a, b) {
        var rand1 = Math.random();
        var rand2 = Math.random();
        if (rand1 > rand2) {
            return 1;
        } else if (rand1 < rand2) {
            return - 1;
        } else {
            return 0;
        }
    });
    dest.value = "";
    for (var i = 0; i < result.length; i++) {
        dest.value += result[i] + "\n";
    }
}

function orderf() {
    var a = oril.value;
    var t = "";
    while (a != "") {
        var b = a.length;
        var c = Math.floor(Math.random() * 99999) % b;
        t += a.substr(c, 1);
		a = a.substr(0, c) + a.substring(c + 1);
    }
    dest.value = t;
}