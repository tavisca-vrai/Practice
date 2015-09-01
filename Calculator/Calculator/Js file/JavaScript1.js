var AddButton = function () {
    var input1 = parseInt(document.getElementById('InputOne').value);
    var input2 = parseInt(document.getElementById('InputTwo').value);
    document.getElementById('Answer').value = input1 + input2;
}
var SubtractButton = function () {
    var input1 = parseInt(document.getElementById('InputOne').value);
    var input2 = parseInt(document.getElementById('InputTwo').value);
    document.getElementById('Answer').value = input1 - input2;
}
var MultiplyButton = function () {
    var input1 = parseInt(document.getElementById('InputOne').value);
    var input2 = parseInt(document.getElementById('InputTwo').value);
    document.getElementById('Answer').value = input1 * input2;
}
var DivideButton = function () {
    var input1 = parseInt(document.getElementById('InputOne').value);
    var input2 = parseInt(document.getElementById('InputTwo').value);
    document.getElementById('Answer').value = input1 / input2;
}