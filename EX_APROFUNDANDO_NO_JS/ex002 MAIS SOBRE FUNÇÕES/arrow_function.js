let tf = '117';
let calcularTemp = tf => Math.floor((tf - 32) / 9 * 5);

console.log(calcularTemp(tf));
 
let equação2Grau = (a, b, c) =>{ 
let delta = b**2 - 4 * a * c;
let x1 = (-b + Math.sqrt(delta)) / (2 * a );
let x2 = (-b - Math.sqrt(delta)) / (2 * a );
return `${x1}  ${x2}`
}

console.log(equação2Grau(2,4,3))