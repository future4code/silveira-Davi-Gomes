// Herança 
//1)

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    private introduceYourself: string;

    constructor(id: string, email: string, name: string, password: string, introduceYourself: string) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.introduceYourself = introduceYourself
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public getintroduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }

}

const user = new User('01', 'Davi@email.com', 'Davi', 'Dav345', 'Olá, bom dia!');
console.log(user.getId(), user.getEmail(), user.getName(), user.getintroduceYourself());

// a) Não, pois não existe um get de password. 

// b) Apenas uma vez. 

//2)

class Customer extends User {
    public purchaseTotal: number = 0;
    public creditCard: string;

    constructor(id: string, email: string, name: string, password: string, creditCard: string, introduceYourself: string) {
        super(id, email, name, password, introduceYourself);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
        // this.purchaseTotal = purchaseTotal
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
};

const customer = new Customer('01', 'Davi@email.com', 'Davi', 'Dav345', 'CreditCard', 'Olá, bom dia!');
console.log(customer.getCreditCard(), customer.purchaseTotal);

// a) Apenas uma vez.

// b) Duas vezes, porque a classe herdou propriedades e métodos.

//3)

// a) Não, pois não existe um get de password. 

// Polimorfismo 

//1) 

export interface Client {
    name: string;

    registrationNumber: number;

    consumedEnergy: number;

    calculateBill(): number;
};

const client: Client = {
    name: 'Davi',
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2
    }
}

console.log(client, client.calculateBill())


// a) Quando você chama o objeto todo ele imprime também no console a função. 

// {
//   name: 'Robervaldo',
//   registrationNumber: 1,
//   consumedEnergy: 100,
//   calculateBill: [Function: calculateBill]
// } 2

//2)

// a) Cannot create an instance of an abstract class.

// export abstract class Place {
//     constructor(protected cep: string) {}

//     public getCep(): string {
//         return this.cep
//     }
// }

// const place = new Place('68548164')
// console.log(place.getCep())

// b) Abstract: Esconde detalhes de implementação, facilitando o uso e garantindo consistência, mas limitando possibilidades.