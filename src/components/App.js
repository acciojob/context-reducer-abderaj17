import React, {useState} from "react";
import { AuthProvider, useAuth } from "./AuthContext";
import { ShoppingListProvider, useShoppingList } from "./ShoppingListContext";


const AuthButtons = ()=>{
    const {isAuthenticated, user, login , signout} = useAuth();
    return(
        <div>
            <button id="login-btn" onClick={login}>
                Login
            </button>
            <button id="signout" onClick={signout}>
                Signout
            </button>
            <p id="current-user">
                Current user:{user}, isAuthenticated:{isAuthenticated ? 'Yes' : 'No'};
            </p>
        </div>
    )
};
export default AuthButtons;