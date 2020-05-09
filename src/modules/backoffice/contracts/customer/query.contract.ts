import { Contract } from '../contract';
import { Flunt } from 'src/utils/flunt';
import { Injectable } from '@nestjs/common';
import { QueryDto } from '../../dtos/query.dto';

@Injectable()
export class CreateQueryContract implements Contract {
  errors: any[];

  validate(model: QueryDto): boolean {
    const flunt = new Flunt();

    if (!model.query) model.query = {};

    flunt.isGreaterThan(
      model.take,
      1000,
      'A query de pesquisa não pode retornar mais de 1000 registros!',
    );

    this.errors = flunt.errors;
    return flunt.isValid();
  }
}
