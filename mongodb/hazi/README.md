## Listázza évek szerint csoportosítva az adott év Comedy stílusú filmjeire nézve az átlagos metacritic értéket. A lista legyen év szerint csökkenő sorrendben rendezve.

```
db
  .movieDetails
  .aggregate([
    {
      $match: {
        "genres": "Comedy"
      }
    },
    {
        $group: {
        _id: "$year",
        avgMetacritic: { $avg: "$metacritic" }
      }
    },
    {
      $sort: { _id: -1 }
    }
  ])
;
```
