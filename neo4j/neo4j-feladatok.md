## 1. Indítsd el a neo4j szolgáltatást, lépj be a Neo4J Browserbe, és töltsd be a movie-graph példaadatokat.
`...`

## 2. Listázzuk az 1950 után született színészek nevét növekvő sorrendben.
```
MATCH (n:Person)
WHERE n.born > 1950
return n.name
ORDER BY n.name
```