let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(a,b){
    for(let i=0; i<b.length; i++) {
        if(a.toLowerCase().includes(b[i].toLowerCase())) {
            return "Matched dog_name"
        }
        else{
            return "No Matches"
        }
    }

}

console.log(findWords(dog_string, dog_names))

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let Output_arr =[]

function replaceEvens(arr){
    for(i in arr){
        if ([i] % 2===0){
            Output_arr.push('even index')
        }
        else{
            Output_arr.push(Given_arr[i])
        }
    }
    return Output_arr

}

console.log(replaceEvens(Given_arr))