/*
Assignment 1: Callback Function
Complete the function below to show a delayed result in console.
*/
function delayedResult(n1, n2, delayTime, callback){
  // your code here
  let sum = n1 + n2;
  setTimeout(callback(sum), delayTime);
}

delayedResult(4, 5, 3000, function(result){
  console.log(result);
  // 9 (4+5) will be shown in the console after 3 seconds
});
delayedResult(-5, 10, 2000, function(result){
  window.alert(result);
  // 5 (-5+10) will be shown in an alert dialog after 2 seconds
});


/*
Assignment 2: Callback Function and Advanced HTML DOM
Complete the function below to make AJAX call to an URL by GET method,
 and show the response data in the page. You may render UI just in any simple and human-friendly style.
*/
$(document).ready(function() {

  function ajax(src, callback){
    // your code here
    $.getJSON(src,callback);
  }

  function render(data){
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
    $.each(data,function(i,product) {
      var list = document.createElement("li");
      list.innerHTML = "商品名稱：" + product.name + "<br>價錢：" + product.price + "<br>描述：" + product.description;
      document.getElementById("demo").appendChild(list);
    });
  }

  ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
  });
  // you should get product information in JSON format and render data in the page
});
