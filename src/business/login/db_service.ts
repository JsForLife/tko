import User from 'entities/user';

const get_user_by_name = async (username:string, password:string) => {
  return User.findOne({
    where: {
      username,
      password,
    },
  });
};

export {
  get_user_by_name,
};