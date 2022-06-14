const arr = [
    {
        id:1,
        name:"Name",
        category:"student",
        img: "img_student/my_pot_students_0.png"
    },
    {
        id:11,
        name:"Year",
        category:"student",
        img: "img_student/my_pot_students_1.png"
    },
    {
        id:12,
        name:"Department",
        category:"student",
        img: "img_student/my_pot_students_2.png"
    },
    {
        id:13,
        name:"Date of Birth",
        category:"student",
        img: "img_student/my_pot_students_3.png"
    },
    {
        id:14,
        name:"Permanent Address",
        category:"student",
        img: "img_student/my_pot_students_4.png"
    },
    {
        id:15,
        name:"Temporary Address",
        category:"student",
        img: "img_student/my_pot_students_5.png"
    },
    {
        id:16,
        name:"In 5 years where do you see yourself in your career ?",
        category:"student",
        img: "img_student/my_pot_students_6.png"
    },
    {
        id:17,
        name:"What is college providing you to accomplish your 5 year's goal ?",
        category:"student",
        img: "img_student/my_pot_students_7.png"
    },
    {
        id:18,
        name:"Would you ever imagine yourself starting your own start-up ?",
        category:"student",
        img: "img_student/my_pot_students_8.png"
    },
    {
        id:19,
        name:"What kind of start-up would you like to start ?",
        category:"student",
        img: "img_student/my_pot_students_9.png"
    },
    {
        id:20,
        name:"After this we are going to start a workshop for people interested in starting up on their own",
        category:"student",
        img: "img_student/my_pot_students_10.png"
    }
]

const allGraph = document.querySelector(".all-graph")
const all = document.querySelector("#all")
// const student = document.querySelector("#student")
// const farmer = document.querySelector("#farmer")
// const local_community= document.querySelector("#local_community")


window.addEventListener("DOMContentLoaded",function(){
    displayItems(arr);
})

function displayItems(arr){
    let display = arr.map(function(item){
        return `<div class="graph">
        <header>
            <div class="name">${item.name}</div>
            <div class="underline-2"></div>
        </header>
        <img class="img1" src="${item.img}" alt="">
    </div> 
`;
    });
    display = display.join("");
    allGraph.innerHTML = display;
}
