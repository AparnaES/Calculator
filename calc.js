function displayNum(num) {
    result.value+=num
}
function calculate() {
    result.value=eval(result.value)
    // exp=result.value
    // op=eval(exp)
    // result.value=op
}
function allClear() {
    result.value=""
}
function backSpace() {
    result.value=result.value.slice(0,-1)
}
// function bracket(e) {
//     result.innerHTML+=e.innerHTML;
// }
