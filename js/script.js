const listaSpesa = [["latte", 2], ["pane", 5], ["uova", 12], ["pomodori", 3], ["lattuga", 1]];

console.log("Lista della spesa (for)");
for(let i=0; i<listaSpesa.length; i++){
  console.log("- " + listaSpesa[i][0] + " x " + listaSpesa[i][1]);
}

console.log("-----------------------------------------------------");

console.log("Lista della spesa (while)");
let c = 0;
while(c<listaSpesa.length){
  console.log("- " + listaSpesa[c][0] + " x " + listaSpesa[c][1]);
  c++;
}

