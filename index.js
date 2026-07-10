function generateRandomContributionStats(){
    const contributions=[];
    const levels=[0,0,0,3,5,10];

    //for each week of the year
    for(let i=0;i<52;i++){
        const week=[];

    //make 7 square and randomly 
    for(let i=0;i<7;i++){
             week.push(levels[Math.floor(Math.random()*levels.length)]);
        }
        contributions.push(week);
    }
    return contributions;
}

function makeGraph(){
    const graph=document.querySelector(".graph");
    const contributions = generateRandomContributionStats();

    contributions.forEach((week, index) => {

        const graphWeek = document.createElement("ul");
        graphWeek.classList.add(`week-${index + 1}`);

        week.forEach(level => {

            const square = document.createElement("li");
            square.classList.add("square");
            square.dataset.value = level;

            graphWeek.appendChild(square);
        });

        graph.appendChild(graphWeek);
    });
}
makeGraph();