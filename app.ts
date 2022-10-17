// 1. Write a TypeScript program to list the properties of a TypeScript object

const students : any [] =[ 
  {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 }];
  const props = Object.keys(students);
  console.log( "the properties are ",  props);

// 2. Write a TypeScript program to delete the rollno property from the following object.
//  Also print the object before or after deleting the property.


const student1:  any [] = [
    {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 }
];
console.log(student1);


student1.forEach(object => {
   delete object['rollno'];
 });
 console.log( student1);

//  3. Write a TypeScript program to get the length of a TypeScript object.   

const student2 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

const objLength = Object.keys(student2).length;
console.log( "object length is " , objLength);

// 4. Write a TypeScript program to display the reading status 
// (i.e. display book name, author name and reading status) of the following books.   

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
 const myObj = Object.values(library);
 console.log(myObj);

//  6. Write a Bubble Sort algorithm in TypeScript.   
//  Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
//  Sample Data: [6,4,0, 3,-2,1]
function bubbleSort(array: number[]): number[] {
  array = array.slice();
  while (true) {
    let swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

const array = [6,4,0, 3,-2,1]

console.log(bubbleSort(array))

;
// 7. Write a TypeScript program which returns a subset of a string.   

String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("dog".sub_String());


// 8. Write a TypeScript program to create a Clock.   


function my_Clock() : number 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
my_Clock.prototype.update = function () 
  {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
my_Clock.prototype.updateTime = function (secs) 
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clock = new my_Clock();
  clock.run();






 













 



















