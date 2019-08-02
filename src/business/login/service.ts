import * as db_service from './db_service';

const check_user_is_existed = async (username:string) => {
  const user = await db_service.get_user_by_name(username);

  if (!user) {

  }
};

export {
  check_user_is_existed,
};