//Write a function that accepts an array of strings and console.logs each element using a for loop.
function names( firstNames){
for ( let i=0; i<firstNames.length; i++){
    console.log(firstNames[i]);
}
}
let namesArray=["Bella","Rayan","Shaturah"];
names(namesArray);

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function product(numbers){
    numbers.forEach(element => {
        console.log(element *2)
    });
}
let numbers=[1,2,3,5,6,78,];
product(numbers)

//Write a function that takes in an array of numbers 
//and consoles the first four items multiplied by 8 and the last two added by 5. 
//Console the array with the new values

function newValues(nums){
  for(let i=0;i<4;i++){
    nums[i]*=8
  }
  for (let i=nums.length-2; i<nums.length;i++){
    nums[i]+=5
  }
  console.log(nums);


    
}
let num=[10,20,30,40,50,60];
newValues(num);

//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function findindex(arr){
    let i=0;
    while(i<arr.length){
        if(i===4){
            break;
        }
        console.log(arr[i]);
        i++;
    }
}
findindex(arrNum);

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index


function continueStatement(fruitz){
    
    for ( let i=0; i<fruitz.length;i++){
        if(i===2){
            continue;
        }
        
        console.log(fruitz[i]); 
    }
    
}
let fruits= ['apple','plum','banana','strawberries','kiwi'];
continueStatement(fruits);
