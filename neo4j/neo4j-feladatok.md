## 1. Indítsd el a neo4j szolgáltatást, lépj be a Neo4J Browserbe, és töltsd be a movie-graph példaadatokat.
`...`

## 2. Listázzuk az 1950 után született színészek nevét növekvő sorrendben.
```
MATCH (n:Person)
WHERE n.born > 1950
return n.name
ORDER BY n.name
```

## 3. Mely filmekben játszott Tom Hanks? Listázzuk a filmek címét és megjelenési évét, rendezzünk cím szerint növekvő sorrendbe.
```
MATCH (p:Person {name: "Tom Hanks"})-[:ACTED_IN]->(m:Movie) 
return m.title, m.released
ORDER BY m.title
```