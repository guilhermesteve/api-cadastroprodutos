import { Category } from "../../../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: IRequest): Category {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists");
    }

    return this.categoriesRepository.create({ name, description });
  }
  list(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { CreateCategoryUseCase };
