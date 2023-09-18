/* Решение изменится только тем, что можно будет из массива
открывающих и закрывающих скобок можно будет убрать набор (,)
*/
function checkSyntax(str) {
    let char = str.split('');
    let stack = [];
    let open = ['{','(','[','<'];
    let close = ['}',')',']','>'];
    let secondIndex,firstIndex = 0;

    for (let i = 0, len = char.length; i < len; i++) {
       firstIndex = open.indexOf(char[i]);
       if (firstIndex !== -1) {
           stack.push(firstIndex);
       }
       secondIndex = close.indexOf(char[i]);
       if (secondIndex !== -1) {
           firstIndex = stack.pop();
           if (secondIndex !== firstIndex) {
               return 1;
           }
       }
    }
    if (stack.length !== 0) {
        return 1;
    }
    return 0;
}

console.log(checkSyntax("---(++++)----")==0);
console.log(checkSyntax("") == 0)
console.log(checkSyntax("before ( middle []) after ") == 0)
console.log(checkSyntax(") (") == 1)
console.log(checkSyntax("} {") == 1)
console.log(checkSyntax("<(   >)") == 1)
console.log(checkSyntax("(  [  <>  ()  ]  <>  )") == 0)
console.log(checkSyntax("   (      [)") == 1)