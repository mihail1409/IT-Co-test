/* Идея заключается в том, что в силу того, что массив 
отсортирован по возрастанию, то можно пройтись по массиву с двух сторон: 
с начала и конца и находить сумму чисел элементов массива с данными индексами
Делать это необходимо до тех пор, пока индексы не станут равны друг другу
Далее 3 исхода: 
1) Если сумма равна то, возвращаем значения этих индексов
2) Если сумма меньше заданного значения, то увеличиваем на 1 
первый индекс
3) Если сумма больше заданного значения, то уменьшаем на 1
последний индекс

*/
function arrSum(arr, value){
    let firstIndex = 0;
    let secondIndex = arr.length - 1;
    while(firstIndex != secondIndex){
        let sum =arr[firstIndex] + arr[secondIndex];
        if (sum < value)
            firstIndex++;
        else if(sum > value)
            secondIndex--;
        else return [firstIndex,secondIndex];
    }
    return [];
}

//  test = arrSum([1,2,3,4,5,6,7,8],5);
//  console.log(test)