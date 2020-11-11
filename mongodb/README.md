# Docker
- you can use `docker-compose up` to bring **mongodb** and the **import-data tool** alive
- once they are alive, you can use the **import-data tool** to import data
  - you can access [http://localhost:8885/import-data](http://localhost:8885/import-data) which will do the import
  - you can use this tool to import custom json as well:
    - place your json into the following folder: "import-data/data" and
    - if your json is named as "**somescheme.json**" then you can access the tool like this:
      - [http://localhost:8885/import-data/somescheme](http://localhost:8885/import-data/somescheme)
    - it will create the "somescheme" collection in mongodb

# Locally
- if you want to use the **import-data tool** this locally just run the following commands under "import-data" folder:
  - `npm i`
  - `npm start` or `npm run dev`
