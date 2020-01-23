import { Field, Int, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  public email: string;
}
