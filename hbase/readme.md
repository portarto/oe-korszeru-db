# 1. feladat: hbase elindítása a vm-en:
 - `start-dfs.sh`
 - `start-yarn.sh`
 - `./hbase/bin/start-hbase.sh`
 - `hbase shell`
   - `status`

# 2. feladat: Létrehozás feltöltése
<table>
    <thead>
        <tr>
            <th></th>
            <th colspan="2" >customer</th>
            <th colspan="2" >food</th>
        </tr>
        <tr>
            <th>row_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>name</th>
            <th>quantity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Baby</td>
            <td>Yoda</td>
            <td>frog</td>
            <td>4</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Man</td>
            <td>do</td>
            <td>soup</td>
            <td>5</td>
        </tr>
        <tr>
            <td>3</td>
            <td>R2</td>
            <td>D2</td>
            <td>oil</td>
            <td></td>
        </tr>
    </tbody>
</table>

## Tábla létrehozásának szerkezete
## create 'táblanév', 'oszlopcsalád1', 'oszlopcsalád2'
```
create 'orders', 'customer', 'food'
```
## Adat beszúrásának szerkezete
## put 'táblanév', 'rowid', 'oszlopcsalád:oszlop', 'érték'
## put 'orders', '1', 'customer:first_name', 'Baby'
```
put 'orders', '1', 'customer:first_name', 'Baby'
put 'orders', '1', 'customer:last_name', 'Yoda'
put 'orders', '1', 'food:name', 'frog'
put 'orders', '1', 'food:quantity', '4'

put 'orders', '2', 'customer:first_name', 'Man'
put 'orders', '2', 'customer:last_name', 'Do'
put 'orders', '2', 'food:name', 'soup'
put 'orders', '2', 'food:quantity', '5'

put 'orders', '3', 'customer:first_name', 'R2'
put 'orders', '3', 'customer:last_name', 'D2'
put 'orders', '3', 'food:name', 'oil'
```

# 3. feladat: lekérdezések
 - Teljes táblát:
   - `scan 'táblanév'`
   - `scan 'orders'`
 - Teljes tábla fordított sorrendben
   - `scan 'táblanév', { REVERSED=>true }`
 - Teljes tábla első 'n' sor
   - `scan 'táblanév', { LIMIT=>1 }`
 - Teljes tábla első 'n' sor kihagyása
   - `scan 'táblanév', { STARTROW=>'3' }`
 - Csak egy családoszlop
   - `scan 'orders', { COLUMNS=>'customer' }`
   - `scan 'orders', { COLUMNS=>'customer:first_name' }`
   - `scan 'orders', { COLUMNS=>['customer:first_name', 'food:name'] }`
   - `scan 'orders', { COLUMNS=>'customers', LIMIT=>1 }`
 - Teljes tábla
   - `get 'orders', '1'`
   - `get 'orders', '3', { COLUMNS=>'customer:fist_name' }`
 - Update
   - `put 'orders', '2', 'food:name', 'noodle'`
 - Versions
   - `alter 'orders', { NAME=>'food', VERSIONS=>2 }`
 - Delete
   - `delete 'orders', '2', 'customers:first_name'`
   - `delete 'orders', '1', 'food:name'`
   - `put 'orders', '1' 'food:name', 'egg'`
   - `deleteall 'orders', '1', 'food:name'`
   - `deleteall 'orders', '1'`
 - Create
   - `create 'orders', 'food'`

🐹🦉🐧
