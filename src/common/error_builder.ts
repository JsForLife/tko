import * as _ from 'lodash';

export interface ErrorCategory {
  name:string;
  description:string;
}

export interface Errors {
  [key:string]:{
    status_code:number;
    error_code:number;
    description?:string;
  };
}

export const error_builder = (category:ErrorCategory, errors:Errors) : { [key in keyof Errors]:Function } => {
  const category_name = category.name;
  const error_collectios = {};
  _.map(errors, (error_content, error_name) => {
    const { status_code, error_code, description } = error_content;
    _.assign(error_collectios, {
      [error_name]: () => {
        return {
          status_code,
          error_code: `${category_name})_${error_code}`,
          description,
        };
      },
    });
  });

  return error_collectios;
};