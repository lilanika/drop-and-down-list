/* Hey you: In case you wondering about the many comments: they are for me to practice explaining what I am doing, as I would like to get better at it :-)  */

const draggable_list = document.getElementById("draggable-list");
const ckeck = document.getElementById("check");

// Something that is sortible z.b an Array
const richestPeople = [
  "Elon Musk  ",
  "Jeff Bezos",
  "Bernard Arnault",
  "Bill Gates",
  "Mark Zuckerberg",
  "Larry Ellison",
  "Larry Page",
  "Sergey Brin",
  "Mukesh Ambani",
];

// init. a empty Array to store listItems
const listItems = [];

//  to track the index to be able to move items
let dragStartIndex;


createList();

//this function will be responsible for generating listItems
function createList() {
  // copy array with spreadOp.
  [...richestPeople]

    //  map through the array to transform each element ( i call it a) and return an array of objects. { sort: math.random number / value: Mill.name } display:object
    .map((a) => ({ value: a, sort: Math.random() }))
    //   sort ascending by sort value with default compare Function & converting into string :display the mathrandom
    .sort((a, b) => a.sort - b.sort)
    // map back into array of strings (mill. name) display:mill.name
    .map((a) => a.value)

    // loop with forEach through the copy of richestPeople Array
    .forEach((person, index) => {
      console.log(person);

      //create list element
      const listItem = document.createElement("li");

      //listItem.classList.add('over')

      // add attribute to every element
      listItem.setAttribute("data-index", index);

      // inserts the element (person) into the ul class= draggable
      listItem.innerHTML = `
    <span class="number"> ${index +1 } </span>
    <div class="draggable" draggable ="true">
    <p class="person-name"> ${person}</p>
    <i class ="fas fa-grip-lines"></i>
    </div>
     `;
      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}

//invoke function
addEventListeners();

// create functions
function dragStart() {
  //  console.log('Event:', 'dragstart');
  //look at the dom at closest li  + convert string into number
   dragStartIndex = +this.closest("li ").getAttribute("data-index");
  //alert(typeof ( dragStartIndex)); to check if its a number
  console.log(dragStartIndex, "index order");
}

// I use dragOver to prevent the default action

function dragOver(e) {
  // console.log('Event:', 'dragover');
  e.preventDefault();
}
function dragDrop() {
  // console.log('Event:', 'dragdrop');
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}

//create Function  swap list Items that are drag and drop
function swapItems(fromIndex, toIndex) {
  // getting the items from the DOM 
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");
  console.log(itemOne, itemTwo)

  //swap the in the DOM
  listItems[fromIndex].appendChild(itemTwo);
 listItems[toIndex].appendChild(itemOne);

  //
}
function dragEnter() {
  // console.log('Event:', 'dragenter');
  this.classList.add("over");
}
function dragLeave() {
  //console.log('Event:', 'dragleave');
  this.classList.remove("over");
}


// check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

check.addEventListener("click", checkOrder);
