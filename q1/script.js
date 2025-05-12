const transactions = [
  { id: 1, category: "Groceries", amount: 1200 },
  { id: 2, category: "Electronics", amount: 4500 },
  { id: 3, category: "Groceries", amount: 800 },
  { id: 4, category: "Clothing", amount: 2000 },
  { id: 5, category: "Electronics", amount: 3000 }
];

let extract=transactions.map((el)=>({category:el.category,amount:el.amount}))
.reduce((acc,curr)=>{acc[curr.category]=(acc[curr.category]||0)+curr.amount; return acc},{})
let sorted=Object.entries(extract).sort((a,b)=>b[1]-a[1])
console.log(sorted)
