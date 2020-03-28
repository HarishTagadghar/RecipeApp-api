import axios from 'axios';
// import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`); //https://forkify-api.herokuapp.com/api/get?rId=${this.id}
            this.recipes = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
