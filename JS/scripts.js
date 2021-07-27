var count = document.getElementById("count");

function onAdd() {
    var num = count.value;
    num++;
    count.value = num;
 }
 function onRemove() {
    var num = count.value;
    num--;
    count.value = num;
 }