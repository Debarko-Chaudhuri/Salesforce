
{//DataTypes
    /*
let x=10
console.log(x)
console.log(typeof x)

var a='a'
console.log(a)
console.log(typeof a)

var bool=true
console.log(bool)
console.log(typeof bool)

var k
console.log(k)
console.log(typeof k)

var obj={}
console.log(obj)
console.log(typeof obj)

var arr=[]
console.log(arr)
console.log(typeof arr)

var sym=Symbol("id")
console.log(sym)
console.log(typeof sym)

var n=null
console.log(n)
console.log(typeof n)

var z
console.log(z)
console.log(typeof z)

var s="hey"
console.log(s)
console.log(typeof s)

var s=new String("hey") 
console.log(s)
console.log(typeof s)*/
}

{//Spread Operator
    /*
    //Expanding String into charArray
let str ='hello world'
let charArray=[...str]
console.log(str)
console.log(charArray)

//Combining String or Array
let arr1=["hello","World"]
let arr2=["Debarko","Here"]
let arr3=[...arr1,...arr2]
console.log(arr3)

//Adding values to array
let arr4=['a','b','c']
let arr5=[...arr4,'d','e']
console.log(arr5)

//Combining Objects
let obj1={Name:"Debarko",Age:'26',daknam:'motuuuu'}
let obj2={Name:"Katha",Age:'24',nickname:'bhondu'}
let obj3={...obj1,...obj2}
console.log(obj3)

//Shallow copy

//normal push:
let arr10=[1,2,3]
let arr11=arr10
arr11.push(4)
console.log(arr10);//prints 1,2,3,4 as in JS it works as a ref
console.log(arr11);

let arr12=[1,2,3]
let arr13=[...arr10]
arr13.push[4]
console.log(arr12);
console.log(arr13);

//Failure of Spread operator Shallow copy in Nesterd loop
var persons=[
    {Name:'Debarko',age:26},
    {Name:'Katha',age:24}
]
var newpersons=[...persons]
newpersons[0].Name='Suman'
console.log(persons);//overwrite debarko as Shallow copy doesnot work in nested
console.log(newpersons);

//How to Solve :
var persons=[
    {Name:'Debarko',age:26},
    {Name:'Katha',age:24}
]
var newpersons=JSON.parse(JSON.stringify(persons))
newpersons[0].Name='Suman'
console.log(persons);
console.log(newpersons);
*/
}
{//Destructuring
    /*
var arr=[1,2,3]
let [num1,num2,num3]=arr
console.log(num1);
console.log(num2);
console.log(num3);

var persons={Name:'Debarko',age:26}
let {Name,age}=persons
console.log(Name);
console.log(age);
*/
}
{//String Interpolation
    /*
    var a=10
    var b=20
    console.log(`The value of adding ${a} and ${b} = ${a+b}`)
*/
}
{//String Methods
    /*
    //include()
    var str='My Name is Debarko'
    console.log(str.includes('deb'));//false
    console.log(str.includes('Deb'));//true

    //indexOf()
    console.log(str.indexOf('N'));//first occurence of the STring 3
    console.log(str.indexOf('is'))//8
    console.log(str.indexOf('xk'))//-1

    //startWith()
    console.log(str.startsWith('m'));//false
    console.log(str.startsWith('M'));//True

    //slice()
    console.log(str.slice(3,8));

    //toLowerCase()
    console.log(str.toLowerCase());

    //toUpperCase
    console.log(str.toUpperCase());

    //trim()
    var str2="   Salesforce    LWC   "
    console.log(str2.trim());//remove space from star and end not middle
    */
}