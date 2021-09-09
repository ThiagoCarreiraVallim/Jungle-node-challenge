exports.seed = async (knex) => knex('users').insert([
    {
      id: 1,
      name: 'root',
      email: 'root@email.com',
      password: '7b6ab438bb978d28f3cd1aba2af90baaeb93639c1cceab1be16b7b3edbff494f',
      role: 'admin',
    },
  ]);
