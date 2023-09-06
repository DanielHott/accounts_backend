module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      fornecedor: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      valor: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },

      vencimento: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      recorrente: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'Users',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Accounts');
  },
};