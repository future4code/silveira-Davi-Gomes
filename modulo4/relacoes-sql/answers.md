# 1)

# A)indica que a propriedade em questão é uma chave estrangeira, Liga uma tabela com a outra.

# B) 
```INSERT INTO Rating VALUES(```
 ```"002", "COMENTARIO DO FILME TROPA DE ELITE" ``` 
 ```10, "004");```

# C) Não é possível adicionar ou atualizar uma linha,uma restrição de chave estrangeira falha. 

# D)
```ALTER TABLE Movies ``` 
``` DROP COLUMN Rating;``` 

# E) 1 linha afetada e coluna desconhecida 'Rate' na 'cláusula where' 

# 2)

# A) Tabela MovieCast possui uma coluna movie_id e outra coluna actor_id, ambas VARCHAR(255) e estão relacionadas por FOREIGN KEY. 

# B)
```INSERT INTO MovieCast VALUES(```
``` "001","002"```
```),("002","003"),("003","004");```

# C) Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.

# D) Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.

# 3)

# A) ON: Uma condição pela qual as tabelas serão juntadas.

# B)
```SELECT Movies.id, name, rate FROM Movies ```
```JOIN Rating ON Movies.id = Rating.movie_id;```
