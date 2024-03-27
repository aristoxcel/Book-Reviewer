import { toast } from 'react-toastify';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const saveWishlist = (book)=>{
    const wishData = JSON.parse(localStorage.getItem("wish")|| '[] ') ;
    const readData = JSON.parse(localStorage.getItem("books")|| '[] ') ;
        const findWishData = wishData.find(w=>w.id == book.id);
        const findReadData = readData.find(r=>r.id ==book.id)
        if(findReadData){
            toast("This book has been read !");
        } else {
        if(findWishData){
            toast("This book already added in your wishlist !");
        } else {
            wishData.push(book);
            localStorage.setItem("wish", JSON.stringify(wishData))
            toast("This book saved in Wishlist !");
        }
} 
}
export const descendingData = ()=>{
    const getData = JSON.parse(localStorage.getItem("books") || '[]') ;
  let desRating = [...getData]
  desRating.sort((a,b)=>a.rating-b.rating).reverse();
  return desRating
}