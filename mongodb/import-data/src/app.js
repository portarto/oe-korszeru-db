// code quality was never a thing
const express = require('express');
const { MongoClient } = require('mongodb');
const fs = require('fs');

const port = process.env.PORT || 8886;
const mongodbUrl = process.env.MONGO_URL || 'localhost';

const app = express();
const router = new express.Router();

const startImport = (schemas, res) => {
  connectToDb
    .then(
      result => {
        const imports = schemas.map(s => insertSchema(result, s));
        Promise
          .all(imports)
          .then(
            values => {
              if (values.every(v => v === true)) {
                res.status(201).send({ imported: true });
              } else {
                res.status(500).send({ result: values });
              }
            }
          )
          .catch(
            error => {
              res.status(500).send({ error });
            }
          )
        ;
      }
    )
    .catch(
      error => {
        res.status(500).send(error);
      }
    )
  ;
}

router.get('/import-data', (req, res) => {
  startImport([ 'departments', 'employees' ], res);
});

router.get('/import-data/:schema', (req, res) => {
  startImport([ req.params.schema ], res);
});


app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const connectionUrl = `mongodb://${mongodbUrl}:27017`;
const databaseName = 'dbs';

console.log(connectionUrl);

const processImportableSchema = (db, schema) => {
  return new Promise(
    (resolve, reject) => {
      try {
        const emps = JSON.parse(fs.readFileSync(`data/${schema}.json`));
        db
          .collection(schema)
          .insertMany(
            emps.items,
            (error, result) => {
              if (error) {
                return reject(error);
              }
              resolve(result);
            }
          )
        ;
      } catch (e) {
        console.log('error', e);
        reject(e);
      }
    }
  );
}

const insertSchema = (db, schema) => {
  return new Promise(
    (resolve, reject) => {
      db
        .collection(schema)
        .find({})
        .toArray(
          (err, res) => {
            if (err) {
              return reject(err);
            }
            if (res && res.length > 0) {
              return resolve(true);
            }
            processImportableSchema(db, schema)
              .then(result => resolve(result))
              .catch(error => reject(error))
            ; 
          }
        )
      ;
    }
  );
};

const connectToDb = new Promise(
  (resolve, reject) => {
    MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
      if (error) {
          return reject(error);
      }
      resolve(client.db(databaseName));
    });
  }
);

