# Hozza létre a következő kulcs-érték párokat:
 - ItsaString - Welcome
 - Six - 6
 - MyInt - 32

```
127.0.0.1:6379> set ltsaString Welcome
OK
127.0.0.1:6379> set Six 6
OK
127.0.0.1:6379> set MyInt 32
OK
```
# Hozzon létre egy üres listát is EmptyList néven.
## Skipped
# Kérdezze le az összes kulcshoz tartozó értékeket.
```
127.0.0.1:6379> mget ltsaString Six MyInt
1) "Welcome"
2) "6"
3) "32"
```
# Inkrementálja a MyInt-et.
```
127.0.0.1:6379> incr MyInt
(integer) 33
```
# Kérdezze le csak azokat a kulcsokat, amelyek „my”-al kezdődnek.
```
127.0.0.1:6379> keys My*
1) "MyInt"
```
# A MyList listához adja hozzá az 1, 2, 3 értékeket, majd vegye ki őket úgy, hogy a lista FIFO (queue) módon viselkedjen.
```
127.0.0.1:6379> lpush MyList 1 2 3
(integer) 3
127.0.0.1:6379> rpop MyList
"1"
```
# Állítsa le a szervert úgy, hogy az ne mentse el a memóriából az adatokat a diszkre.
```
127.0.0.1:6379> flushall
OK
127.0.0.1:6379> keys *
(empty list or set)
127.0.0.1:6379> shutdown
```
