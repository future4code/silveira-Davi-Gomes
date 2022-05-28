enum setor {
    MARKETING = 'MARKETING',
    VENDAS = 'VENDAS',
    FINANCEIRO = 'FINANCEIRO'
};

type colaboradores = {
    nome: string,
    salario: number,
    setor: string,
    presencial: boolean
};

const funcionarios: colaboradores[] = [
    { nome: "Marcos", salario: 2500, setor: setor.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: setor.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: setor.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: setor.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: setor.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: setor.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: setor.MARKETING, presencial: true }
];

function buscarSetor(funcionario: colaboradores[]): colaboradores[] {
    return funcionario.filter((item) => {
        return item.setor === setor.MARKETING && item.presencial
    });
};

console.log(buscarSetor(funcionarios)); 