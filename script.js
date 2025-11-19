
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
let obj3={...obj1,...obj2}//overwrites the Same Property 
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

//Failure of Spread operator Shallow copy in Nested loop
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
{//Object/JSON Operation
    /*
    let obj={
        Name:"Debarko",
        Age:26,
        Profession:"Engineer",
        Alive:true
    }
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(JSON.stringify(obj));
    console.log(JSON.parse(JSON.stringify(obj)));
    */
}
{//Array Medthods
    /*
    //Map transforms and return a new array
    let arr=[1,2,3]
    let newArray=arr.map(function(currentItem,index,array){
        return currentItem*2
    })
    console.log(arr);
    console.log(newArray);

    //filter filters out based on condition
    let filteredValuesArray=arr.filter(function(currentItem,index,array){
        return currentItem>=2
    })
    console.log(filteredValuesArray);

    //every()checks if every item passes the case or not
    let checkArray=arr.every(function(currentItem,index,array){
        return currentItem>0
    })
    console.log(checkArray);

    //Some same a s every but even if 1 passes it is tru
    let checkSomeArray=arr.some(function(currentItem,index,array){
        return currentItem==3
    })
    console.log(checkSomeArray);

    //sort
    let arr2=[10,89,1,100]
    let sortedvalue=arr2.sort(function(a,b){
        return b-a//desc
        //return a-b for asc
    })
    console.log(sortedvalue);

    //reduce it calculates and return a value
    let sum=arr2.reduce(function(total,currentItem){
        return total+currentItem
    },0)
    console.log(sum);
    
    //forEach
    arr2.forEach(function(currentItem,index){
        console.log(`Item at index ${index} is ${currentItem}`);
    })
    */
}
{//Promise
    /*
    function checkIsSuccess(data){
        return new Promise(function(resolve,reject){
            if(data===200){
                return resolve("Successfully Executed")
            }else{
                return reject("Unsuccessfully Executed")
            }
        })
    }
    checkIsSuccess(00).then(function(result){
        console.log(result);
    }).catch(function(error){
        console.error(error);
    })

    fetch('https://github.com/Debarko-Chaudhuri').then(function(result){
        console.log(result)
    }).catch(function(error){
        console.log("Failed");
        console.error(error);
    })*/
}
{   //import/ex
   /* import minus,{pi,add} from './utils.js'//minus is default,1 default per util file
    console.log(pi);
    add(2,3)
    minus(19,10)*/
}
{//queryselector
   /* let element=document.querySelector('button')
    console.log(element);
    let elements=document.querySelectorAll('button')
    console.log(elements);*/
}
{//event
   /* function callClickMe(){
        console.log("Clicked");
    }
    let btn=document.querySelector('#button2');//need to use # when passing id
    btn.addEventListener ("click",callClickMe) 
    document.addEventListener("mousemove",handler)
    function handler(){
        document.querySelector(".demo").innerHTML=Math.random()
    } 
    let btn=document.querySelector('button')
    btn.addEventListener("click",handleOnClick)
    let x=0
    function handleOnClick(){
        if (x%2==0) {
            document.removeEventListener("mousemove",handler)
        } else {
            document.addEventListener("mousemove",handler)
        }
       x=x+1;
       console.log(x);
    }      
    document.addEventListener("hello",function(data){
        let name=data.detail.name
        let age=data.detail.age
        console.log(`Hello my name is ${name} and I am ${age} years old`);
    }
    )
    function callCustomMethod(){
        let event = new CustomEvent("hello",{
            detail:{
                name:'debarko',
                age:26
            }
        });
        document.dispatchEvent(event)
    }*/ 
}
{//Arrow function
   /* //Normal function
    function abc(){
        console.log("Hello")
    }
    //Arrow fn with return
    xyz=()=>{
        console.log("Hi");
    }
    //Arrow fn without return statement
    lkj=()=>"Hola"
    abc()
    xyz()
    console.log(lkj());
    var arr=[1,2,3,4]
    let newarr= arr.map(currentItem=>currentItem*2)
    console.log(newarr);
    let obj={
        name:"Debarko",
        normalName:function (){
            console.log(this.name);
            function normalfullName(){
                console.log("My name is "+this.name+"Chaudhuri");
            }
            normalfullName()
        }
    }
    obj.normalName()
    let obj2={
        name:"Debarko",
        arrowName:function (){
            console.log(this.name)
            arrowfullName=()=>"My Name is "+this.name+" Chaudhuri"
            console.log(arrowfullName());
        }
    }
    obj2.arrowName()*/
}
{//SetTimeOut and SetInterval
    /*
    window.setTimeout(function(){
        console.log("Hello");
    },5000)

    window.setInterval(function(){
        console.log("Hello");
    },2000)
    */
}