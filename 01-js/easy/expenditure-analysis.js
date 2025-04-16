/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

    let output=[]
    for(let i=0;i<transactions.length;i++)
    {
      let found=false

      for(let j=0;j<output.length;j++)
      {
        if(output[j]["category"]==transactions[i]["category"])
        {
          output[j]["totalSpent"]+=transactions[i]["price"]
          found=true
        }
      }

      if(!found)
      {
        output.push({
          category:transactions[i]["category"],
          totalSpent:transactions[i]["price"]
        })
      }
    }

    return output
  
}

module.exports = calculateTotalSpentByCategory;
