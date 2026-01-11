import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions=[
        {
            id:"Q1",
            question:"Barcelona was created in which year?",
            answers:{
                a:"1899",
                b:"1898",
                c:"1889"
            },
            correctAnswer:"a"
        },
        {
            id:"Q2",
            question:"How Many UCL does Barca Have?",
            answers:{
                a:"4",
                b:"5",
                c:"6"
            },
            correctAnswer:"b"
        },
        {
            id:"Q3",
            question:"What is Barcelona's Slogan",
            answers:{
                a:"Me Que Club",
                b:"Un Dia De Partit",
                c:"Mes Que Un Club"
            },
            correctAnswer:"c"
        },

    ]
    selected={}//for storing answers
    correctAnswers=0;//to show number of correct answers
    isSubmitted=false;
    get allNotAnswered(){
        /*as selected is a object storing the id:option as k-v pair
        we can return an array of the key after which we fetch the length
        and match with the myQuestions array*/
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    changeHandler(event){
        /*here I am ussing object destructuring
            if basically means:
            const name= event.target.name
            const value= event.target.value
            which we are recieving from the HTML
            Used when we are storing the same named property*/
        const{name,value}=event.target

        /*using spread operator to combine objects
          what happens is suppose for 1st question:
          name=Q1,Value selected is a then selected={[Q1]:a}
          then if you select b as the property name has the 
          same Q1 it will overwrite a and it becomes selected={[Q1]:b*/
        this.selected={...this.selected, [name]:value}
        
    }

    submitHandler(event){
        event.preventDefault()//stops form submit default refresh behaviour 
        let correctAnsArray=this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correctAnsArray.length
        this.isSubmitted=true
    }

    resetHandler(event){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted=false
    }
}