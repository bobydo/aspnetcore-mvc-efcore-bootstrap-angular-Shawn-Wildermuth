# aspnetcore-mvc-efcore-bootstrap-angular-Shawn-Wildermuth
-  Get font awesome <br />
![image](https://user-images.githubusercontent.com/64368109/138809771-dc798386-c5d1-4c44-b896-5fd2d653079d.png)
![image](https://user-images.githubusercontent.com/64368109/138809860-a2c6c4d4-4c3e-4b63-8b67-aa29f783420d.png)
![image](https://user-images.githubusercontent.com/64368109/130649683-c8e59f5a-4a59-41bc-b9c1-a84fa130b2a9.png)
![image](https://user-images.githubusercontent.com/64368109/138809930-093f126e-cb95-48d8-9b03-cbea194e1e67.png)
```
//when the document ready load js and function makes variable is not global
$(document).ready(function () {
  console.log("Hello World");
  var theForm = $("#theForm");//document.getElementById("theForm");
  theForm.hide(); // hidden = true;

  var button = $("#button"); // document.getElementById("buyButton");
  //button.addEventListener("click", function () {
  //  alert("Buying...");
  //});
  button.on("click", function () {
    alert("Buying...");
  })

  var listItems = document.getElementsByClassName("product-info");
  listItems[0].addEventListener("click", function () {
    alert("prodList");
  });

  var popup = $("#login-block .popup-form");
  $("#login-block .toggle-item").on("click", function () {
    popup.slideToggle(250);
  });

});

```


<br />Just choose css and webfont
