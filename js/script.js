let products = [
  ["bread", 20],
  ["butter", 99],
  ["beef", 150],
  ["salmon", 250],
  ["wather", 10],
];
let tottalPrice = 0;

for (let i = 0; i < products.length; i++) {
  let name = products[i][0];
  let price = products[i][1];

  console.log(i + 1, name, price);
  tottalPrice += price


  function tottalSumm() {
    if (tottalPrice >= 500) {
      console.log(
        `Great, your total is: ${tottalPrice}$ \nNow delivery is free ;)`
      );
    } else {
      console.log(
        `Great, total is: ${tottalPrice}$ \nTo get free delivery you lack of ${
          500 - tottalPrice
        }$ `
      );
    }
  }
}

tottalSumm();

// 1. ДЗ порахувати і внести сумму товарів
// 2. if > 100 -- :(
// 3. else < 20 -- :)

// let prod1 = ['bread' , 20];
// let prod2 = ['butter' , 70];
// let prod3 = ['beef' , 150];

// products[0] = prod1;
// products[1] = prod2;
// products[2] = prod3;

// let nums = [1, 2, 3, 4, 5, 6];
// let products =[];
// products[0] = 'apple'
// products[1] = 'bread'
// products[products.length] = 'orange'
// products[30] = 'wine'
// products.push('beer' , 'meat')
// console.log(products);

// console.log(" \nList:\n-------------");
// for (let i = 0; i < nums.length; i++) {

//     let num = nums[i];

//     if(num % 2 === 0){
//         console.log('odd' , num);
//     }else{
//         console.log('even' , num);
//     }

// }

// console.table(nums);
// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

// let i = [1 , 2 , 3];
// console.log(typeof i[1] , i[2]);
