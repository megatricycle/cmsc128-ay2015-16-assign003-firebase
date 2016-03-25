// Keys
const API_KEY = 'AIzaSyDhlhCf8driLdxhpV5Uu0SoDTWbpYjTWZ4';
const CX = '005884473102728766654:walplzq2xi8';

let recipesStore = new Firebase('https://recipe-master.firebaseio.com/recipes');

// shared store with all components
let store = {
    recipes: [],
    recipeLoading : true,
    addRecipe(recipe) {
        return recipesStore.push(recipe).key();
    }
};

recipesStore.on("value", function(snapshot) {
    let recipeSnapshots = snapshot.val();
    
    store.recipes = [];
    
    let imgCount = 0;

    // convert snapshots into array form    
    for(let key in recipeSnapshots) {
        let temp = recipeSnapshots[key];
        
        temp.id = key;
        
        // fetch an image
        let query = temp.name; 
        let img_url = 'https://www.googleapis.com/customsearch/v1?key=' + API_KEY + '&cx=' + CX + '&q=' + query + '&searchType=image&imgSize=medium&alt=json&num=1';
        
        fetch(img_url, {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((res) => {
            if(res.error) {
                temp.img = 'http://smock_prod.s3.amazonaws.com/4085/pback-solidcolor3_preview_en.jpg';
            }
            else {
                temp.img = res.items[0].link;
            }        
            
            store.recipes.push(temp);
            
            // unflag load if all has img
            imgCount++;
            
            if(imgCount === store.recipes.length) {
                store.recipeLoading = false;
            }
        });
    }
});

export default store;