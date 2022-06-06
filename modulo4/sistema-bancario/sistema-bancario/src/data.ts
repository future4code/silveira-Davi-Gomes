export type Extract = { value: number, date: string | number, description: string };

export type Account = {
    name: string, 
    cpf: string,
    birthdate: string | number,
    balance: number,
    extract: Extract[]
}

export let users: Account[] = [
    {
        name: "Robervaldo",
        cpf: "89580134006",
        birthdate: "21/07/1993",
        balance: 0,
        extract: [
            {
                value: 3200,
                date: "03/06/2022",
                description: "Fatura atual."
            }
        ]
    },
    {
        name: "Paula",
        cpf: "29010783030",
        birthdate: "02/12/1991",
        balance: 0,
        extract: [
            {
                value: 10000,
                date: "03/06/2022",
                description: "Fatura atual."
            }
        ]
    },
    {
        name: "Jorge",
        cpf: "38338147052",
        birthdate: "03/08/2020",
        balance: 0,
        extract: [
            {
                value: 20000,
                date: "03/06/2022",
                description: "Fatura atual."
            }
        ]
    }
]