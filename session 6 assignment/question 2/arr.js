const items = [ { "item": "Dal","type": "veg"},
            {"item": "Fish", "type": "non-veg"},
            {
              "item": "Meat", "type": "non-veg" },
            {
              "item": "Rice","type": "veg" } ];
          
          
              
                  
                      const res= items.reduce((val, { item,type }) => {
            if (!val[type]) val[type] = [];
           val[type].push(item);
            return val;
          }, {})
          console.log(res);
         