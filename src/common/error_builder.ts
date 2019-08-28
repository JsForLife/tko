import * as _ from 'lodash';
import {
  ErrorCategory,
  ErrorThrower,
  Errors,
} from 'interfaces/error_builder';

export interface Builder<T extends Errors> {
  (category:ErrorCategory, errors:T) : { [key in keyof T]:ErrorThrower };
}

const error_builder = <T extends Errors>(category:ErrorCategory, errors:T) : { [key in keyof T]:ErrorThrower } => {
  const category_name = category.unique_code;
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

  return error_collectios as any;
};

export default error_builder;