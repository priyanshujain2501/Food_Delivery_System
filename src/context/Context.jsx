import { createContext, useState } from "react";
import { food_list } from "../assets/assets2";
import { useNavigate } from "react-router-dom";

//create context
export const Context = createContext()

//wrap the context value in provider
function ContextProvider({children}){

    const [cartItems,setCartItems] = useState({});
    const [promo, setPromo] = useState("");
    const [discountedAmt, setDiscountedAmt] = useState(0);
    const [members,setMembers] = useState([]);
    const [isPromoApplied, setIsPromoApplied] = useState(false);

    const navigate = useNavigate();

    const addToCart = (itemId) => {

        // { ...prev } creates a new object containing the existing cart items.
        // [itemId]: 1 adds a new item to the cart with an initial quantity of 1.

        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
    }

    const getCartTotalAmt = () => {

        let totalAmt = 0;

        for(const item in cartItems){

            if(cartItems[item]>0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmt += itemInfo.price * cartItems[item]; 
            }

        }

        return totalAmt;

    }

    const promoCodes = {
        "WELCOME10": 10,  //10% off
        "FOODIE50": 50,   //50% off upto $80
        "SAVE100": 100,    //100% off upto $80
    }

    

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartTotalAmt,
        promoCodes,
        promo,
        setPromo,
        discountedAmt,
        setDiscountedAmt,
        members, 
        setMembers,
        isPromoApplied,
        setIsPromoApplied,
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )

}

export default ContextProvider