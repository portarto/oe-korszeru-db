## 1. Töltsd be a loadMovieDetailsDataset.js-t, a további feladatok erre az adathalmazra vonatkoznak. Ha a labor hátralevő részében grafikus felületen szeretnél dolgozni, akkor telepítsd a Robo3T-t. (Segítség a laborjegyzetben.)
`load('/home/itsh/Downloads/loadMovieDetailsDataset.js')`
### ellenőrzés:
`db.movieDetails.find()`

## 2.a. Listázd azon filmeket, amelyeknek a hossza 90 és 130 perc közötti (mindkét határ inkluzív), és a stílusai között megtalálható a Drama.
```
db.movieDetails.find({
  runtime: {
    $gte: 90,
    $lt: 130
  },
  "genres": "Drama"
})
```

## 2.b. Az előző lekérdezést módosítsd úgy, hogy hossz szerinti növekvő sorrendben jelenjenek meg.
```
db.movieDetails.find({
  runtime: {
    $gte: 90,
    $lt: 130
  },
  "genres": "Drama"
}).sort({
  runtime: 1
})
```

## 3. Listázd az első 3 filmnek a címét és stílusait (genres). Az _id mező ne jelenjen meg!
```
db.movieDetails.find({}, {
  title: 1,
  genres: 1,
  _id: 0
}).limit(3)
```
 
## 4. Mennyi ideig tartana megnézni adott évben megjelent összes filmet? Listázd ki évek szerint csoportosítva, év szerinti csökkenő sorrendben a filmek összesített hosszát.
```
db.movieDetails.aggregate([
  {
      $group: {
      _id: "$year",
      runtimeSum: { $sum: "$runtime" }
    }
  },
  {
    $sort: { _id: -1 }
  }
])
```
 
## 4. Az összes 90 perc hosszúságú film hosszát változtasd meg 95 percre. Az eredményt lekérdezéssel ellenőrizd.
```
db.movieDetails.updateMany(
  { runtime: 90 },
  { $set: { runtime: 95 }}
)
```
### ellenőrzés:
`db.movieDetails.find({ runtime: 90 })`

 
## 5. Töröld az első olyan filmet, ahol a metacritic értéke nagyobb, mint 90. Az eredményt lekérdezéssel ellenőrizd.
```
db.movieDetails.remove({
  _id: {
    $in: db.movieDetails.find({
      metacritic: {
        $gte: 90
      }
    }, {
      _id: 1
    }).limit(1).map(m => m._id)
  }
})
```