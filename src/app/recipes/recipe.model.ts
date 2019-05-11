import { Ingriedient} from '../shared/ingriedient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;
  public ingredients: Ingriedient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingriedient[]) {
    this.name = name;
    this.description = desc;
    this.imgPath = imagePath;
    this.ingredients = ingredients;
  }
}
