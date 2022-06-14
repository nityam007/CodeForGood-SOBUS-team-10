const arr = [
    {
        id:70,
        name:"Timestamp",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_0.png"
    },
    {
        id:71,
        name:"Name",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_1.png"
    },
    {
        id:72,
        name:"Age",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_2.png"
    },
    {
        id:73,
        name:"Gender",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_3.png"
    },
    {
        id:74,
        name:"Are you a	Name of the Academic Institute/Enterprise",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_4.png"
    },
    {
        id:75,
        name:"Location",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_5.png"
    },
    {
        id:76,
        name:"State",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_6.png"
    },
    {
        id:77,
        name:"Are you interested to apply for",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_7.png"
    },
    {
        id:78,
        name:"How did you hear about this program ?",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_8.png"
    },
    {
        id:79,
        name:"What stage of your entrepreneurial journey are you currently at?",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_9.png"
    },
    {
        id:80,
        name:"Which sector would your idea fall in ?",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_10.png"
    },
    {
        id:81,
        name:"Describe your idea in one sentence",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_11.png"
    },
    {
        id:82,
        name:"Do you already have a team of 2-3 people in mind to apply with for these programs ?",
        category:"entrepreneur",
        img: "img_entre/my_pot_entrepreneurs_12.png"
    }
]

const allGraph = document.querySelector(".all-graph")
const all = document.querySelector("#all")


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