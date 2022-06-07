# 1)
# A) Altera uma tabela Ator removendo uma coluna salarial.
# B) Altera o ator da tabela mudando o gênero da coluna para o tipo de sexo sendo uma string de no máximo 6 caracteres.
# C) Altera o ator da tabela mudando o gênero da coluna para o tipo de gênero com o mesmo tipo sendo uma string de no máximo 255 caracteres.
# D)
ALTER TABLE Ator CHANGE gênero gênero VARCHAR(100);
# 2)
# A)
UPDATE Ator SET nome = "Fernanda Torres", data_nascimento = "1965-09-15" WHERE id = "003";
# B)
UPDATE Ator SET nome= "JULIANA PAES" WHERE id = "005";
UPDATE Ator SET nome = "Juliana Paes" WHERE id = "005";
# C)
ATUALIZAÇÃO Ator SET nome = "Moacyr Franco", data_nascimento = "2020-02-10", salário = 600000, sexo = "masculino" WHERE id = "005";
# 0 linha(s) de declarações(s) Linhas correspondentes: 0 Alteradas: 0 Avisos: 0.
UPDATE Ator SET nome = "Robervaldo Santos" WHERE id = "008";
# 3
# a)
DELETE FROM Ator WHERE nome = "Fernanda Torres";
# B)
DELETE FROM Actor WHERE sexo = "masculino" e salário >= 100000000;
# 4)
# A)
SELECT MAX(salário) FROM Ator;
# B)
SELECT MIN(salário) FROM Ator WHERE gênero = "feminino";
# C)
SELECT COUNT(*) FROM Ator WHERE sexo = "feminino";
# D)
SELECT SUM(salário) FROM Ator;
# 5)
# A) Somou os gêneros e os separa por tipo.
SELECT COUNT(*), gênero FROM Ator GROUP BY gênero;
# B)
SELECT id, nome FROM Ator ORDER BY nome DESC;
# C)
SELECIONE * DO ATOR ORDEM POR salário ASC;
# B)
SELECIONE * DO ATOR ORDEM POR salário DESC LIMIT 3;
# E)
SELECT AVG(salário), gênero FROM Ator GROUP BY gênero;
# 6)
# A)
ALTER TABLE Filme ADD play_limit_date DATE;
# B)
ALTER TABLE Avaliação da avaliação do filme CHANGE FLOAT NOT NULL;
# C)
UPDATE Movie SET playing_limit_date = "2021-06-07" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2021-07-07" WHERE id = "002";
# 0 linha(s) decisões0(s) Linhas correspondentes: Alteradas: 0 Avisos: 0.
DELETE FROM Movie WHERE id = "001";
UPDATE Movie SET sinopse = "Testando alteração" WHERE id = "001";