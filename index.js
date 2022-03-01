// homework 1
let arraytoTest = [
        {
            studentsName: "Dazzlercool",
            favouriteVideoGame: "DOTA2",
            rank: "divine",
            randomNumber: 7,
        },
        {
            studentsName: "Mayank",
            favouriteVideoGame: "Sonic",
            rank: "Pro",
            randomNumber: 3,
        },
        {
            studentsName: "Alok",
            favouriteVideoGame: "Mario",
            rank: "Expert",
            randomNumber: 8,
        },
        {
            studentsName: "Satvik",
            favouriteVideoGame: "Ludo",
            rank: "Master",
            randomNumber: 5,
        },
        {
            studentsName: "Deepak",
            favouriteVideoGame: "PUBG",
            rank: "Conquerer",
            randomNumber: 12,
        },
    ];
      arraytoTest.sort(function(a,b){
          return a.randonNumber-b.randomNumber;
      });
    let results = arraytoTest.sort((a, b) => a.randomNumber - b.randomNumber);
    console.log(results);
    console.log(arraytoTest.studentsName);
    for (let a = 0; a < arraytoTest.length; a++) {
        console.log(arraytoTest[a].studentsName + "  " + arraytoTest[a].randomNumber);
    
    }
    /// homework 2
    let user = [
        {
            id: 1,
            name: "Prachi",
            leaves: [{
                id: 1,
                reason: "party",
                dates: ["2022-02-25", "2022-02-24"],
            },
            {
             id:2,
             reason:"movie",
             dates:["2022-20-23", "2022-02-22","2022-02-21"],
    
            },],
        },
        {
            id: 2,
            name: "Sweta",
            leaves: [
              {
                id: 3,
                reason: "Sick",
                dates: ["2022-02-10", "2022-02-12"],
              },
        
              {
                id: 4,
                reason: "Exam",
                dates: ["2022-02-15", "2022-02-08", "2022-02-17"],
              },
            ],
          },
          {
            id: 3,
            name: "lubna",
            leaves: [
              {
                id: 5,
                reason: "Emergency",
                dates: ["2022-02-05", "2022-02-19"],
              },
            ],
          },
        ];

         let start=new Date("2022-02-01");
         let enddate=new Date("2022-02-28");

         var value = new Date();
function leave_Taken(start =new Date(value.getFullYear(),value.getMonth(),1), end=new Date(value.getFullYear(),value.getMonth()+1,0)){
    
    let result = user.map(item=>{
            return {
                id:item.id,
                name:item.name,
                leaves:item.leaves.map((it)=>{
                    let date=it.dates.filter(i=>(new Date(start)<new Date(i))&&(new Date(end)>new Date(i)));
                    if(date.length>0){
                        return {
                            dates:it.dates.filter(i=>new Date(start)<new Date(i)&&new Date(end)>new Date(i)),
                            id:it.id,
                            reason:it.reason
                        };
                    }
                    
                    else{
                        return null;
                    }
                }).filter(x=>!!x)
            };
        }
    );
    return result;
    
}
console.log(leave_Taken("2022-02-24"));
