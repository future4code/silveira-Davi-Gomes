enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
};

type info = {
    nome: string,
    anoLancamento: string,
    genero: string, 
    pontuacao?: number
};

const filmes: info = {
    nome: 'Duna',
    anoLancamento: '2021',
    genero: GENERO.ACAO 
};

function receberInfo(nome: string, anoLancamento: string, genero: string, pontuacao?: number): info {
return{
    nome: nome,
    anoLancamento: anoLancamento,
    genero: genero,
    pontuacao: pontuacao
}
}

console.log(receberInfo(filmes.nome, filmes.anoLancamento, filmes.genero, filmes.pontuacao));