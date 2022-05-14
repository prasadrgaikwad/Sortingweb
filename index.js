/* Creating our 100 lenght array */
var list = [];
for(let i = 0; i < 100; i++){
  list.push(i);
}
list.sort(function() { return 0.5 - Math.random() });

/* Just a HTML rendering function */
function renderArray(elementId, array){
  for(let key in array){
      document.getElementById(elementId).insertAdjacentHTML("afterend",`<li>${array[key]}</li>`)
  }
}

renderArray("defaultArray", list);

/* The real big boy bubble function */
function bubble(list){
  // Getting the array length
    var length = list.length;
    
    // The main loop to iterate over the whole list
    for (var i = length-1; i >= 0; i--){
       // Child loop to make iterate all over and over and compare by pairs
       for(var j = 1; j <= i; j++){
           // If the current item is smaller than the next, they will change positions
           if(list[j-1] > list[j]){
               var aux = list[j-1];
               list[j-1] = list[j];
               list[j] = aux;
            }
       }
    }
    return list;
}

var start = window.performance.now();
list = bubble(list);
var end = window.performance.now();

end = end - start;

document.getElementById("ms").innerHTML = `${end.toFixed(2)} ms`;
console.log("Executed in: "+end, list);

renderArray("sortedArray", list);