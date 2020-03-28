import axios from 'axios';

export default class Recipe {
    constructor(id){
        this.id = id
    }
    async getRecipe() {
       try{ let res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        this.author = res.data.recipe.publisher;
        this.title = res.data.recipe.title;
        this.img = res.data.recipe.image_url;
        this.url = res.data.recipe.source_url;
        this.ingredients = res.data.recipe.ingredients;
        this.id = res.data.recipe.recipe_id;
        // console.log(res);
    }catch (error) {
        alert('some thing went wrond');
        console.log(error);
        
    }
    }
    getTime(){
        // assume that we need 15 min for each 3 ingredients
        let numing = this.ingredients.length;
        let period = Math.ceil(numing / 3);
        this.time = period * 15
    }
    getserving() {
        this.serving = 4
    }
}