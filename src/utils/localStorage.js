const addToDb = id => {
    let favourites = {};

    // get previous data from local storage

    const storedFavourites = localStorage.getItem('favourites');
    if(storedFavourites){
        favourites = JSON.parse(storedFavourites)
    }
    
    //add quantity
    const quantity = favourites[id]; 

    if(quantity){
        const newQuantity = quantity + 1;
        favourites[id] = newQuantity;
    } 
    else{
        favourites[id] = 1;
    }

    //set data in local storage

    localStorage.setItem('favourites', JSON.stringify(favourites));

}

export {addToDb}