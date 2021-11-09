## :bird: JS Drag & Drop Sortable List Tutorial 

🌎  Brad Traversy Tutorial:  https://www.youtube.com/watch?v=wv7pvH1O5Ho


Hey you: In case you wondering about the many comments and why I explain the functions. Thats for me to practice explaining what I am doing, as I would like to get better at it :-)


###### what I want the createList function should do

 i want the names to be displayed in a different order on each page load. I use map to make an array of Objects the sort value will keeps changing through the Math Random method. I want to use this sort value to sort the listitems behind the scene in ascending order.

Next I want to loop through the copy of the RichestPeople array and create a list element for each item. Add them a new Attribute thats value is the current index.

Then I want outputs each li element to the ul class = Draggable that I created in the HTML file. Push each item into a new array listitems and append the li element into the ul to display it.


Steps:

###### copy array with spreadOperator
###### map through the array to transform each element and return an array of objects.
example: { sort: math.random number / value: Mill.name }
This show me always a different order of the list elements everytime i reload the page.
###### sort
--> I want that the elements will sorting ascending there sort value and display. /this is why the elements shows in dirrefernt otder.  Be aware that sort converting the elements into strings and sorting them then. (1, 110, 2). Sort has a default compareFunction that takes two paramters (firstElement in my case a & secondElement b) that I will use.

Example:

const numbers= [1,3,110,40,302];
console.log(numbers.sort(function(a,b){
  return a - b
}));

###### map back into an array of strings.

###### loop with forEach through the copy of richestPeople Array
Add an attribute to the element that will track the index of each element.


###### create list element
Store each person in the listItem variable. For each person (arr.Elemt) a li- html element is added to the DOM

###### setAttribute to track the sort of each item
adding a attribute to element , that will track the sort of each items.
setAttribute(name , value);

###### inserts the element (person) into the ul class= draggable

###### push every element into new Array listItems

###### append the li into the ul to display it :-)



## 2. now lets add eventListeners and create drag and drop functions

I want to looping with forEach through each element that has the class draggable and add a event and a function to it.
The same applies for dragListitems.

###### dragStart
Each time the dragStart function is executed, the index of the selected element is updated in drafStartIndex. 

###### dragOver
DragOver prevent the default behavior 

###### dragDrop
This function gets the current index position (with getAttribute) every time the user drops the mouse and passes this value along with the dragStartIndex to the swapItems function. 
It also deletes the class over, so that the gray background color 
disappears. 


## 3. SwapItems Function swaps the index number of the items in the DOM to swap the place of the items.  

This function makes it possible that the items swap their position.  The start and end position is stored in a new variable to assign the class .draggable.

In the next step it exchanges the index numbers of the respective elements and updates the DOM with appendChild. 


example: 
const itemOne = listiTems[10].querySelektor(.class)
const itemTwo = listiTems[5].querySelektor(.class)

listITems[10].appendSchild(itemtwo)
const itemTwo = listiTems[5].querySelektor(.class)

listITems[5].appendSchild(itemtwo)
const itemTwo = listiTems[10].querySelektor(.class)


## 4 checkOrder function

Here I want to loop through the each listItem  and compare it with the richestPeople array. If they are not the same tha the function will add the class wrong to the listItem. If not it will remove the class wrong and add the class right :-) 


Done! 
