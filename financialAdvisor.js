const FinanacialAdvisorInfo = Object.create({}, {
    company: {
      value: "XYZ Financial",
      enumerable: true
    },
    speciality: {
      value: "FinancialAdvisor",
      enumerable: true
  
    },
    name: {
      value: "Robert",
      enumerable: true
    },
    portfolio: {
      value: [
        ["Ecolab", 65, 10],
        ["AGH", 45, 5]
  
      ],
  
  
      enumerable: false
    },
  
    worth: {
      value: function () {
        var total = 0
        for (let i = 0; i < FinanacialAdvisorInfo.portfolio.length; i++) {
          let currentShare = FinanacialAdvisorInfo.portfolio[i]
          let EachShare = currentShare[1] * currentShare[2]
          total += EachShare
        }
        return total
  
  
      }
        
  
      
  
  
    },
  
    purchase: {
      value: function (Sts, quantity, price) {
        // let purchaseAmount = return quantity * price
      }
  
    }
  })
  console.log("worth:" +   FinanacialAdvisorInfo.worth());
  
  