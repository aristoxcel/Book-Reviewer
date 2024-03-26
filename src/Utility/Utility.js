import { toast } from 'react-toastify';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const saveToLocalStorage = (book)=>{
    const saveData = JSON.parse(localStorage.getItem("books")) || [] ;
        const findData = saveData.find(bk=>bk.id == book.id);
        if(findData){
            toast("This book already has been read !");
        } else {
            saveData.push(book);
            localStorage.setItem("books", JSON.stringify(saveData));
            toast("Saved as Read!");
        }
} 

export const saveWishlist = (book)=>{
    const wishData = JSON.parse(localStorage.getItem("wish")) || [] ;
        const findWishData = wishData.find(w=>w.id == book.id);
        if(findWishData){
            toast("This book has been read !");
        } else {
            wishData.push(book);
            localStorage.setItem("wish", JSON.stringify(wishData))
            toast("This book added in your Wishlist !");
        }
} 