type contaCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: contaCliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function negativado(conta: contaCliente[]): contaCliente[] {
    const devedores: contaCliente[] = conta.filter((item) => {
        const debitos = item.debitos.reduce((acumulador, elemento) => acumulador += elemento, 0)
        const saldo = item.saldoTotal - debitos;
        item.saldoTotal = saldo;
        if (saldo < 0) {
            return true
        } else {
            return false
        }
    })
    return devedores
};

console.log(negativado(clientes))