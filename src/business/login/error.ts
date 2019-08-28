import error_builder from 'common/error_builder';
import * as IEB from 'interfaces/error_builder';

const error_category:IEB.ErrorCategory = {
  unique_code: 'LG',
  description: '登入/登出功能模块',
};

const errors = {
  user_not_existed: {
    status_code: 400,
    error_code: 1,
    description: '用户不存在',
  },
};

const login_errors = error_builder(error_category, errors);

export default login_errors;