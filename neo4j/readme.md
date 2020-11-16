## 1. Indítsd el a neo4j szolgáltatást, lépj be a Neo4J Browserbe, és töltsd be a movie-graph példaadatokat.
- `docker-compose up`
- [http://localhost:7474/browser/](http://localhost:7474/browser/)
- nem kell jelszó, csak login
- végül
  - :play movie-graph
  - (lapozás jobbra, kattintás a kódra, futtatás)

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

## 4. Mely filmekben melyik színészekkel játszott együtt Tom Hanks? Listázzuk a filmek címét és a színészek nevét.
```
MATCH (t:Person {name: "Tom Hanks"})-[:ACTED_IN]->(m:Movie)<-[:ACTED_IN]-(x:Person) 
return x.name, m.title
```
 
## 5. Ki és milyen szerepekben játszott a CloudAtlas című filmben?
```
MATCH (p:Person)-[r:ACTED_IN]->(m:Movie {title: "Cloud Atlas"})
return p.name, r.roles
``` 

## 6. Hozz létre egy új Movie node-ot, amelynek a címe "Harry Potter and the Prisoner of Azkaban", megjelenési éve 2004.
```
CREATE (
  m:Movie {
    title: "Harry Potter and the Prisoner of Azkaban",
    released: 2004
  }
) return m;
```
 
## 7. Hozz létre egy új Person node-ot is, amelynek neve „Daniel Radcliffe”, születési éve 1989. A két node között hozz létre „ACTED_IN” kapcsolatot.
```
CREATE (
  p:Person {
    name: "Daniel Radcliffe",
    born: 1989
  }
) return p
```

```
MATCH (p:Person {name: "Daniel Radcliffe"} )
MATCH (m:Movie {title: "Harry Potter and the Prisoner of Azkaban"})
MERGE (p)-[
  r:ACTED_IN {
    roles: ["Harry Potter"]
  }
]->(m) return p, r, m;
```

### ellenőrzés:
```
MERGE (p:Person {name: "Daniel Radcliffe"})-[r:ACTED_IN {roles: ["Harry Potter"]}]->(m:Movie {title: "Harry Potter and the Prisoner of Azkaban"}) return p, r, m;
```