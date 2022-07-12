//1)

// a) Construtor serve para inicializar variáveis. Deve ser declarado com a função constructor(){}.

// export class Cachorro {
//     nome: string;
//     peso: number;
//     constructor(nome: string, peso: number) {
//         this.nome = nome;
//         this.peso = peso;
//     };

// b) Apenas uma vez.

//     class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];

//     constructor(cpf: string, name: string, age: number) {
//         console.log("Chamando o construtor da classe UserAccount")
//         this.cpf = cpf;
//         this.name = name;
//         this.age = age;
//     }

//     public getCpf(): string {
//         return this.cpf
//     }

//     public getName(): string {
//         return this.name
//     }

//     public getAge(): number {
//         return this.age
//     }

//     public getBalance(): number {
//         return this.balance
//     }

//     public getTransactions(): Transaction[] {
//         return this.transactions
//     }
// };

// const user = new UserAccount('42123506800', 'Robervaldo', 28);

// c) Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this).

// 2)

class Transaction {
    private date: string
    private value: number
    private description: string

    constructor(date: string, value: number, description: string) {
        this.date = date
        this.value = value
        this.description = description
    }

    public getDate(): string {
        return this.date
    }

    public getValue(): number {
        return this.value
    }

    public getDescription(): string {
        return this.description
    }
};

class UserAccount {
    private cpf: string
    private name: string
    private age: number
    private balance: number = 0
    private transactions: Transaction[] = []

    constructor(cpf: string, name: string, age: number) {
        this.cpf = cpf
        this.name = name
        this.age = age
    }

    public getCpf(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public getBalance(): number {
        return this.balance
    }

    public getTransactions(): Transaction[] {
        return this.transactions
    }

    public setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }
}

const user = new UserAccount('42123506800', 'juvenal', 28);
const transaction = new Transaction('2022-06-22', 100, 'Compras');

user.setTransactions(transaction)
console.log(user.getTransactions())

// 3) 

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }
    public getAccounts(): UserAccount[] {
        return this.accounts
    }
}