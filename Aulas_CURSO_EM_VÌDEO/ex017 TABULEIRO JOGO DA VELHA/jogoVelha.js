let m = [] 

let l = 0
let c = 0
while(l < 3 && c < 3){
    m[l][c] = l
    l++
    c++
}

console.log(m[0][2])