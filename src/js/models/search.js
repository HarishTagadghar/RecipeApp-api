import axios from 'axios'; // importing axios library
export default class search { //here class is a keyword with creates a object constructor and search is a name
    constructor(query){ //constructor is a keyword (query is a input ) 
        this.query = query
    }
    async  getRecipe() {  // getRecipe is a constructor method with grabs the api and returns recipes array object
        try{
        const data = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`) //axios is a npm library used to featch the data we can also use featch keyword but its not supported for all browsers
        this.recipes = data.data.recipes
        // console.log(this.result);
        }catch(error){
            alert(error)
        }
    }
}
