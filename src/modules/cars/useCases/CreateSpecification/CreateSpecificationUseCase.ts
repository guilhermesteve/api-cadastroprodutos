import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationUseCase {
  constructor(private SpecificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest) {
    const specAlreadyExists = this.SpecificationRepository.findByName(name);

    if (specAlreadyExists) {
      throw new Error("Specification Already exists");
    }

    return this.SpecificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
