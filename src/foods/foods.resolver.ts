import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FoodsService } from './foods.service';
import { CreateFoodInput } from './dto/create-food.input';
import { UpdateFoodInput } from './dto/update-food.input';
import { Food } from './entities/food.entity';

@Resolver('Food')
export class FoodsResolver {
  constructor(private readonly foodsService: FoodsService) {}

  @Mutation('createFood')
  create(@Args('createFoodInput') createFoodInput: CreateFoodInput) {
    return this.foodsService.create(createFoodInput);
  }

  @Query('foods')
  async findAll(): Promise<Food[]> {
    return this.foodsService.findAll();
  }

  @Query('food')
  findOne(@Args('id') id: number) {
    return this.foodsService.findOne(id);
  }

  @Mutation('updateFood')
  update(@Args('updateFoodInput') updateFoodInput: UpdateFoodInput) {
    return this.foodsService.update(updateFoodInput.id, updateFoodInput);
  }

  @Mutation('removeFood')
  remove(@Args('id') id: number) {
    return this.foodsService.remove(id);
  }
}
