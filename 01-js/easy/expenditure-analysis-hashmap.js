function calculateTotalSpentByCategory(transactions) {
    
    let myMap=new Map()

    for(let i=0;i<transactions.length;i++)
    {
      if(myMap.has(transactions[i]["category"]))
      {
          let previousVal=myMap.get(transactions[i]["category"])
          let updatedVal=previousVal+transactions[i]["price"]
          myMap.set(transactions[i]["category"],updatedVal)
          
      }

      else
      {
        myMap.set(transactions[i]["category"],transactions[i]["price"])
      }

    }
    
  
    return myMap
    
  }


  const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
]

const ans=calculateTotalSpentByCategory(transactions)
console.log(ans)