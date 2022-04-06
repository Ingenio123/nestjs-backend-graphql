import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Food {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
