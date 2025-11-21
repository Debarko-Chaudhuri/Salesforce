import { LightningElement } from 'lwc';

export default class P2cParent extends LightningElement {
    msg="Data from Parent"
    progressValue=0
    carouselData=[
        {
            src:"https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description."
        },
        {
            src:"https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description."
        },{
            src:"https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description."
        }
    ]
    handleChange(event){
        this.progressValue=event.target.value
    }
    handleClick(){
        this.template.querySelector('c-p2c-slider').resetSlider()
    }
}
                   