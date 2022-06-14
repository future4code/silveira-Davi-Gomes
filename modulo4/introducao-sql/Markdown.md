CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
# A)
# VARCHAR(n) - strings de no máximo n caracteres,
# DATE - representa uma data (YYYY-MM-DD).

# B)
# um mostra o banco de dados presente e o outro mostra a tebela presente no banco de dados.
SHOW DATABASES;
SHOW TABLES;

# C)
#retorna a descrição da tabela.
 DESCRIBE Actor;
# A) 
 INSERT INTO Actor (id,name,salary,birth_date,gender)
 VALUE(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
 );
 # B) id duplicado 
 
 INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# C) faltam (birth_date,gender) como parametro

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
# D) esta faltando o name como parametro 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
# E) data de aniversario sem as aspas
 
# F)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, name from Actor WHERE gender = "male";
# A)
SELECT * from Actor WHERE gender = "female";

# B) 
SELECT  id ,salary FROM Actor WHERE name = "tony Ramos";
# C)
SELECT * FROM Actor WHERE gender = "invalid";
# da NULL pois não existe nenhum genero com resultado invalid

SELECT id, name, salary FROM Actor WHERE salary < 500000;

# E)

SELECT id, nome FROM Actor WHERE id = "002";
# nome n e usado como parametro e sim name

# 4)
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

# A) ele procura o nome Com as iniciais A e J e com o salario maior q 300.000
# B)
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000; 

# C) 
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");

# D)
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

# 5)
# A)
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date_of DATE NOT NULL,
    evaluation VARCHAR(2) NOT NULL
);
# B)
INSERT INTO Movie VALUES("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);
# C) 
INSERT INTO Movie VALUES ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);
# D)
INSERT INTO Movie VALUES ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);
# E) 
INSERT INTO Movie VALUES ("004", "Lisbela e o Prisioneiro", "A jovem Lisbela adora ir ao cinema e vive sonhando com os galãs de Hollywood dos filmes que assiste. Leléu é um malandro conquistador, que em meio a uma de suas muitas aventuras chega à cidade da moça. Após se conhecerem eles logo se apaixonam, mas Lisbela está de casamento marcado. Em meio às dúvidas e aos problemas familiares que a nova paixão desperta, há ainda a presença de um matador que está atrás de Leléu, devido a ele ter se envolvido com sua esposa no passado.", "2003-08-22", 7);
# 6) 
# A) 
SELECT id, title, evaluation FROM Movie WHERE id = "004";
# B)
SELECT title FROM Movie WHERE title = "Lisbela e o Prisioneiro";
# C)
SELECT id, title, synopsis FROM Movie WHERE evaluation >= 7;
# 7)
# A) 
SELECT * FROM Movie WHERE title LIKE "%vida%";
# B) 
SELECT * FROM Movie WHERE title LIKE "%você%" OR synopsis LIKE "%anos%";
# C) 
SELECT * FROM Movie WHERE release_date_of < "2022-06-06";
# D) 
SELECT * FROM Movie WHERE release_date_of < "2022-06-06" and (title LIKE "%você" OR synopsis LIKE "%anos%") and evaluation > 7;