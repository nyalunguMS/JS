

let me = {
    items:[{name :"keyboard",price:100},{name:"mouse",price:200}],
    amount:500
}

function display(name){
    total = 0;
    for(item of name.items){
        total += item.price;
    }
    var change = name.amount - total;
    return change;
}

console.log(display(me));