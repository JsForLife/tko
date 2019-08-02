import User from 'entities/user';

const get_user_by_name = async (username:string) => {
  return User.findOne({
    where: {
      username,
    },
  });
};

export {
  get_user_by_name,
};