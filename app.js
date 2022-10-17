// 1. Write a TypeScript program to list the properties of a TypeScript object
var students = [
    {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    }
];
var props = Object.keys(students);
console.log("the properties are ", props);
// 2. Write a TypeScript program to delete the rollno property from the following object.
//  Also print the object before or after deleting the property.
var student1 = [
    {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    }
];
console.log(student1);
student1.forEach(function (object) {
    delete object['rollno'];
});
console.log(student1);
//  3. Write a TypeScript program to get the length of a TypeScript object.   
var student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var objLength = Object.keys(student2).length;
console.log("object length is ", objLength);
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
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
var myObj = Object.values(library);
console.log(myObj);

/**
 * Idiomatic bubble sort implementation
 */
function bubbleSort(array) {
    var _a;
    array = array.slice();
    while (true) {
        var swapped = false;
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return array;
}
var array = [6,4,0, 3,-2,1];

console.log(bubbleSort(array));

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


function my_Clock() 
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
  


// 9. Write a TypeScript program to calculate the area and perimeter of a circle.   

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

// 10. Write a TypeScript program to sort an array of TypeScript objects.   

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
 
 var sort_by = function(field_name, reverse, initial){
 
    var key = initial ?
        function(x)
              {
                return initial(x[field_name]);
              } :
        function(x) 
              {
                return x[field_name];
              };
 
    reverse = !reverse ? 1 : -1;
 
    return function (x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
      } ;
 };
 
 
 var newobj = library.sort(sort_by('libraryID', true, parseInt));
 
 console.log(newobj);

//  11. Write a TypeScript function to print all the methods in an TypeScript object.   


 function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));
function all_properties(obj) 
{
 return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));


// 14. Write a TypeScript function to retrieve all the values of an object's properties.   

function all_values(obj) {
  var keys = _keys(obj);
  var length = keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[keys[i]];
  }
  return values;
}
function _keys(obj) 
{
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj)   
{  
  var type = typeof obj;  
  return type === 'function' || type === 'object' && !!obj;  
} 
console.log(all_values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
