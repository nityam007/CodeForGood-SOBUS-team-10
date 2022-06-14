const arr = [
    {
        id:5,
        name:"Sentiment Analysis",
        category:"local_community",
      img: "img_local/sentiment_analysis.png"
    },   
    {
        id:62,
        name:"Gender",
        category:"local_community",
      img: "img_local/my_pot_occupations_2.png"
    },
    {
        id:63,
        name:"Location",
        category:"local_community",
      img: "img_local/my_pot_occupations_3.png"
    },
    {
        id:64,
        name:"Occupation",
        category:"local_community",
      img: "img_local/my_pot_occupations_4.png"
    },
    {
        id:65,
        name:"What are the problems and challenges that exist in Pandharpur?",
        category:"local_community",
      img: "img_local/my_pot_occupations_5.png"
    },
    {
        id:66,
        name:"What are the opportunities in the area?",
        category:"local_community",
      img: "img_local/my_pot_occupations_6.png"
    },
    {
        id:67,
        name:"Are there any dreams/ideas/projects that you would like to take up?",
        category:"local_community",
      img: "img_local/my_pot_occupations_7.png"
    },
    {
        id:68,
        name:"Feedback	During Event-Discussion",
        category:"local_community",
      img: "img_local/my_pot_occupations_8.png"
    },
    {
        id:90,
        name:"SI",
        category:"local_community",
      img: "img_local/my_pot_occupations_0.png"
    },
    {
        id:91,
        name:"Name",
        category:"local_community",
      img: "img_local/my_pot_occupations_1.png"
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