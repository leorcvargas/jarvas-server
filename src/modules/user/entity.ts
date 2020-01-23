import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class User {
  @Field(() => Int)
  public id: number;

  @Field()
  public email: string;
}
