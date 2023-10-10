const storedItems = () =>{
    const storedItems = localStorage.getItem('donated')
    if(storedItems){
       return JSON.parse(storedItems)
    }
    return []
   }
   
   const storeDonatedItems = (items) =>{
       const storedItems = storedItems()
       const ifExists = storedItems.find(item => item.id === items.id)
       if(!ifExists){
           storedItems.push(items)
           localStorage.setItem('donated', JSON.stringify(storedItems))
           return true
       }
       return false
   }
   
   export {storedItems , storeDonatedItems}