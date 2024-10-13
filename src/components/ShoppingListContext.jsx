import React,{createContext, useState, useContext} from 'react'
const ShoppingListContext = createContext();

 export const useShoppingList = () => useContext(ShoppingListContext);
 export const ShoppingListProvider = ({children})=>{
    const [items, setItems] = useState([]);

    const addItem = (item) =>{
        if(item.trim()!==''){
            setItems((prevItems)=>[...prevItems, item]);
        }
    };

    const removeItem = (item)=>{
        setItems((prevItems)=> prevItems.filter((i)=> i !==item));

    };

    const clearItems = ()=>{
        setItems([]);
    };
 }
  return (
    <ShoppingListContext.Provider value={{items, addItem, removeItem, clearItems}}>
        {children}
    </ShoppingListContext.Provider>
  )


export default ShoppingListContext