import * as db_service from './db_service';
import login_errors from './error';
import { string } from 'joi';

const check_user_is_existed = async (username:string, password:string) => {
  const user = await db_service.get_user_by_name(username, password);

  if (!user) {
    throw login_errors.user_not_existed();
  }
};

export {
  check_user_is_existed,
};