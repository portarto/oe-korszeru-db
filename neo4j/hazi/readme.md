# 5. házi feladat: Lekérdezés Neo4j-ben az órán használt filmes adathalmazra

## Listázza azon személyek nevét és születési évét, akik Tom Hanks filmjeit rendezték, emellett listázza a filmek címét is.
```
MATCH (t:Person {name: "Tom Hanks"})-[:ACTED_IN]->(m:Movie)<-[:DIRECTED]-(x:Person)
return x.name, x.born
```
## Listázza azon színészeknek a nevét, akik Tom Hanks filmjeinek a rendezői (előző feladat) által rendezett filmekben szerepeltek: nem csak azokban, amelyekben Tom Hanks is szerepelt, hanem az adott rendezőknek az összes filmjében.
```
MATCH (t:Person {name: "Tom Hanks"})-[:ACTED_IN]->(:Movie)<-[:DIRECTED]-(:Person)-[:DIRECTED]->(m:Movie)<-[:ACTED_IN]-(x:Person)
return x.name
```
