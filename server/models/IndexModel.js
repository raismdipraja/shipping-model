//1. import module sequelize agar bisa create connection ke postgresdb
import Sequelize from 'sequelize';
import config from '../../config/config'

console.log

//2. config database option akan di load dari file .env
const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: 'postgres',
    host: '104.198.212.208'
  },
);

sequelize
	.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.log(err));

// tambahkan object Sequelize Op dan export spy bisa di pake di controller
const Op = Sequelize.Op;

//3. import all model dan store di variable models
const models = {
      orderShipping : sequelize.import('./orderShipping.model'),
      order : sequelize.import('./order.model'),
      address : sequelize.import('./address.model'),
      expedition : sequelize.import('./expedition.model'),
      status : sequelize.import('./status.model')


};

//4. create relation OneToMany | ManyToMany
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

// 5. export sequalize agar bisa di-call di module lain
export { sequelize,Op };
export default models;
