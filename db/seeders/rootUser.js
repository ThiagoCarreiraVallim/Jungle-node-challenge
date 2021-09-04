
exports.seed = async (knex) => {
  
  await knex('users').insert([
    {
      id: 1,
      name: 'root',
      email: 'root@email.com',
      password: 'rootuser123',
      role: 'admin',
    }
  ]);
};
