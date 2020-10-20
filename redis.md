# Hozza létre a következő kulcs-érték párokat:
 - ItsaString - Welcome
 - Six - 6
 - MyInt - 32

```127.0.0.1:6379> set ltsaString Welcome
OK
127.0.0.1:6379> set Six 6
OK
127.0.0.1:6379> set MyInt 32
OK```

# Hozzon létre egy üres listát is EmptyList néven.
127.0.0.1:6379> mget ltsaString Six MyInt
1) "Welcome"
2) "6"
3) "32"
127.0.0.1:6379> incr MyInt
(integer) 33
127.0.0.1:6379> keys My*
1) "MyInt"
127.0.0.1:6379> lpush MyList 1 2 3
(integer) 3
127.0.0.1:6379> rpop MyList
"1"
127.0.0.1:6379> flushall
OK
127.0.0.1:6379> keys *
(empty list or set)
127.0.0.1:6379> shutdown
