const Users = require("../models/Users");
const Accounts = require("../models/Accounts");


interface login {
  username: string;
  password: string;
}

interface Account {
    id?: number,
    fornecedor: string,
    descricao: string,
    valor: number,
    vencimento: Date,
    status: string,
    user_id: string,
    recorrente: boolean,
  }

export async function getAccounts(body: login) {
  try {
  const { username } = body;
  const myUser = await Users.findOne({ where: { username } });
  const myAccounts = await Accounts.findAll({ where: { user_id: myUser.id }  })
  return myAccounts;
  }
  catch (e) {
    console.log(e);
    throw e; 
  }
}


export async function createAccount(body: Account) {
  try {
  const { fornecedor, descricao, valor, vencimento, status, user_id, recorrente } = body;
  const user = await Users.findOne({where: {username: user_id}})
  if(user) {
    const newAccount = await Accounts.create(
    { fornecedor, descricao, valor, vencimento, status, user_id: user.id, recorrente },
  );
  return newAccount;
  }}
  catch (e) {
    console.log(e);
    throw e; 
  }
}

export async function editAccount(body: Account) {
  try {
  const { id, fornecedor, descricao, valor, vencimento, status, user_id, recorrente } = body;
  const account = await Accounts.findOne({ where: { id }  })
  const newAccount = await account.update(
    { fornecedor, descricao, valor, vencimento, status, user_id, recorrente },
  );
  return newAccount;
  }
  catch (e) {
    console.log(e);
    throw e; 
  }
}

export async function deleteAccount(body: Account) {
  try {
  const { id } = body;
  const deletedAccount = await Accounts.destroy({ where: { id }  })
  return deletedAccount;
  }
  catch (e) {
    console.log(e);
    throw e; 
  }
}

