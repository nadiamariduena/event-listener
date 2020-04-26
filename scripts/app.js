const addToList = () => {
  let userInput = document.querySelector("#userText").value;

  //("#userText").value;
  //the dot value correspond to the information the user will add inside the comillas

  // now i am going to check if the user filled the empty value field, if its empty,then i will launch an alert.

  // so if the user value is extrem equal to nothing '', then i will say:write something
  if (userInput == "") {
    //   if user write nothing or is empty ,show alert
    // the comillas are there, for the data, the user will introduce.
    return alert("write something");
  }
  //
  //
  //

  //

  //
  //
  //                          CREATE LI
  //
  //
  //
  //NOW CREATE AN ELEMENT. DIV ,P, LI, SPAN ETC**************
  //_1_
  let newLi = document.createElement("li");
  newLi.style.listStyle = "none";
  newLi.style.width = "50%";

  //_2_ now convert the user text into node text
  let textNode = document.createTextNode(userInput);
  //_3_ now i want to inject this text Node into my list ITEMS
  newLi.appendChild(textNode);
  //_4_ now i want to inject this LIST ITEMS 'newLi' to my unordered list 'ol' in the html.
  //_5_  but first i must to SELECT IT.
  // -------------
  // this was before robert limitation of tries and is step_5
  // document.querySelector(".result").appendChild(newLi);
  // -------------
  let ol = document.querySelector(".result");

  if (ol.children.length >= 3) {
    alert("too many tries");
    return;
  }
  ol.appendChild(newLi);
  //_6_  this step will give the option to the user to have a clean input area everytime he finish to add a item, so that he can fill it again.
  document.querySelector("#userText").value = "";
  //
  //------------------------------------------------------------
  //
  //
  //
  // STYLING with nth child to the list we just build7
  //
  //_1_  I will select the LIST i just created and i will assign it a new variable, but its the same thing.
  let list = document.querySelectorAll("li:nth-child(odd)");

  list.forEach(({ style: item }) => {
    item.backgroundColor = colorFunkyRandom();
  });
  //
  //
  //
  //
  //
  //
  //
  //
  //                        CREATE A DYNAMIC SPAN

  // repeat the same steps we did like in the creation of the LI
  //
  //
  let span = document.createElement("span");
  // span.style.width = "20px";

  let text = document.createTextNode("x");
  span.appendChild(text);
  //NOTE: you will create a class here and then manipulate it in the css file
  span.className = "close";
  // Now add css styles to this span created here is JS
  // IF YOU NOTICED THE SPAN DONT SHOW,that is because you have to add it to the list like i did with the LI.
  //
  //
  //
  span.appendChild(text);
  let listAll = document.querySelectorAll("li");
  //
  //
  //
  //  EXTRA info from Robert
  span.addEventListener("click", function (i) {
    // alert("hello");
    newLi.remove(); //this will delete the li
    //  span.remove(); will remove the red box of the X
  });
  // ----------------

  //
  //
  listAll.forEach((item) => {
    item.appendChild(span);
  });
  //------------------------------------------------------------
  //
  //
};
//
//
//
//
//
//
//
//
//
//                                COLORS
//
function colorFunkyRandom() {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  //
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  return result;
}
