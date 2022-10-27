const shoppingList = [`lievito`,`acqua`,`pomodoro`,`lievito`,`farina`,`coca-cola`];

let i = 0;
let list = document.getElementById('list');
let item;
while(i < shoppingList.length){
    item = shoppingList[i];
    list.innerHTML+= `<li>${item}</li>`
    console.log(item)
    i++;
}
