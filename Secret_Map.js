//By Fasasi Sherif
//Title: Secret Map
/* A program to return the squares of all elements in an array using the map function */


var numbers = [5, 4 , 6 , 7];

/* We declare a function that returns the square */

function myfunc(g){
				return g*g ;
				}
				
//Then we the map method of an array

a = numbers.map(myfunc);
console.log(a)
