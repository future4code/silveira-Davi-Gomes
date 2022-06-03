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
        name: "Ariane",
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
        name: "Fernando",
        cpf: "29010783030",
        birthdate: "06/12/1990",
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
        name: "Brisa",
        cpf: "38338147052",
        birthdate: "01/09/2020",
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