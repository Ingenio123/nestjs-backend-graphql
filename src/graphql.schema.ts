
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateFoodInput {
    exampleField?: Nullable<number>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export class UpdateFoodInput {
    id: number;
    exampleField?: Nullable<number>;
    name?: Nullable<string>;
}

export class Food {
    exampleField?: Nullable<number>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export abstract class IQuery {
    abstract foods(): Nullable<Food>[] | Promise<Nullable<Food>[]>;

    abstract food(id: number): Nullable<Food> | Promise<Nullable<Food>>;
}

export abstract class IMutation {
    abstract createFood(createFoodInput: CreateFoodInput): Food | Promise<Food>;

    abstract updateFood(updateFoodInput: UpdateFoodInput): Food | Promise<Food>;

    abstract removeFood(id: number): Nullable<Food> | Promise<Nullable<Food>>;
}

type Nullable<T> = T | null;
