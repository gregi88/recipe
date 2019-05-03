export class Recipe {
    public recipeName: string;
    public description: string;
    public imagePath: string;

    constructor(recipeNeme: string, desc: string, imagePath: string) {
        this.recipeName = recipeNeme;
        this.description = desc;
        this.imagePath = imagePath;
    }
}