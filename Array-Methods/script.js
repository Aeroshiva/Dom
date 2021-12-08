//Filter Method
    // const scores =[10, 30, 15, 25, 50, 40, 5];

    // const filteredScores = scores.filter((score) => {
    //     return score > 20; 
    // });

    // console.log(filteredScores);

    // const users = [
    // {name:'shaun', premium: true},
    // {name:'shiva', premium: false},
    // {name:'yoshi', premium: true},
    // {name:'ramu', premium: false},
    // ];

    // const premiumUsers = users.filter((user) => {
    // return user.premium;
    // });

    // console.log(premiumUsers);

// Map method
   /*const prices = [20, 10, 30, 25, 15, 40, 80, 5];
        //const salePrices = prices.map((price)=>{
            return price/2
        });
        //console.log(salePrices);

    const products = [
        {name:'watch', price:300},
        {name:'belt', price:150},
        {name:'pen', price:50},
        {name:'bag', price:600}
    ];

    const saleProducts = products.map((product) => {
        if (product.price>50){
            return {name: product.name, price:product.price/2};
        } else {
            return product;
        }
    });

    console.log(saleProducts, products)*/

//reduce method
     
   /* const scores = [100, 20, 60, 10, 60, 30];
    //return scores above 50
    const result = scores.reduce((acc,curr) =>{
        if(curr > 50){
            acc++;
        }
        return acc;
    }, 0);

    console.log(result);*/
   /*const scores = [
        {player: 'virat', score:50},
        {player: 'rahul', score:250},
        {player: 'hitman', score:550},
        {player: 'kane', score:750},
        {player: 'virat', score:5000},
        {player: 'rahul', score:250},
        {player: 'hitman', score:550},
        {player: 'kane', score:750},
        {player: 'virat', score:350},
        {player: 'rahul', score:250},
        {player: 'hitman', score:550},
        {player: 'kane', score:750},
        {player: 'virat', score:530},
        {player: 'rahul', score:250},
        {player: 'hitman', score:550},
        {player: 'kane', score:750}
     ];

     const viratTotal = scores.reduce((acc,curr) =>{
         if (curr.player === 'virat'){
             acc += curr.score;
         }
         return acc;
     },0);

     console.log(viratTotal);*/

//Find method
     /*const scores = [12, 33, 44, 56, 2, 94, 19];

     const firstHighscore = scores.find((score) => {
        return score > 70;
     });

     console.log(firstHighscore);*/

// Ex 01- Sorting strings
     
// Ex 02- Sorting numbers

// Ex 03- Sorting objects

// chaining arrays

