function pipeFix(numbers){
    newArr=[]
    for(let i=numbers[0]; i<=numbers[numbers.length-1];i++){
        newArr.push(i)     
    }
    return newArr
}



let arr=[1,2,3,4,5,6,7,8,20]

console.log(pipeFix(arr))

// lastOne=arr[arr.length-1]
// console.log(lastOne)
