/*
Assignment 1: Callback Function
Complete the function below to show a delayed result in console.
*/
function delayedResult(n1, n2, delayTime, callback){
  // your code here
  let sum = n1 + n2;
  window.setTimeout(function(){callback(sum);}, delayTime);
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

  function ajax(src, callback){
    // your code here
    var xhr = new XMLHttpRequest();
    xhr.open('GET', src);
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        render(data);
      }
    };
    xhr.send();
  }

  function render(data){
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
    for (let i=0; i<data.length; i += 1) {
      let list = document.createElement("li");
      list.innerHTML = "商品名稱：" + data[i].name + "<br>價錢：" + data[i].price + "<br>描述：" + data[i].description;
      document.getElementById("demo").appendChild(list);
    }
  }

  ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
  });
  // you should get product information in JSON format and render data in the page
