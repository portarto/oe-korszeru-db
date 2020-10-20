```console
itsh@ubuntu:~$ redis-cli
127.0.0.1:6379> set WelcomeText Welcome
OK
127.0.0.1:6379> get WelcomeText
"Welcome"
127.0.0.1:6379> get WelcomeText
"Welcome"
127.0.0.1:6379> cls
(error) ERR unknown command `cls`, with args beginning with: 
127.0.0.1:6379> set WelcomeText Welcome!
OK
127.0.0.1:6379> get WelcomeTe
(nil)
127.0.0.1:6379> get WelcomeText
"Welcome!"
127.0.0.1:6379> set Asd ""
OK
127.0.0.1:6379> get Asd
""
127.0.0.1:6379> set TwoWords "Welcome home"
OK
127.0.0.1:6379> get TwoWords
"Welcome home"
127.0.0.1:6379> del Asd
(integer) 1
127.0.0.1:6379> get Asd
(nil)
127.0.0.1:6379> get AAA
(nil)
127.0.0.1:6379> set Asd
(error) ERR wrong number of arguments for 'set' command
127.0.0.1:6379> set Asd 23
OK
127.0.0.1:6379> get Asd
"23"
127.0.0.1:6379> del Asd
(integer) 1
127.0.0.1:6379> set WelcomeText Welcome
OK
127.0.0.1:6379> append WelcomeText Home
(integer) 11
127.0.0.1:6379> get WelcomeText
"WelcomeHome"
127.0.0.1:6379> set Match 11
OK
127.0.0.1:6379> incr Match
(integer) 12
127.0.0.1:6379> incryby Match 11
(error) ERR unknown command `incryby`, with args beginning with: `Match`, `11`, 
127.0.0.1:6379> incrby Match 11
(integer) 23
127.0.0.1:6379> append Welcome 10
(integer) 2
127.0.0.1:6379> get Match
"23"
127.0.0.1:6379> append Match 10
(integer) 4
127.0.0.1:6379> get Welcome
"10"
127.0.0.1:6379> get Match
"2310"
127.0.0.1:6379> del Match
(integer) 1
127.0.0.1:6379> set Math 2310
OK
127.0.0.1:6379> keys *
1) "WelcomeText"
2) "Math"
3) "Welcome"
4) "TwoWords"
127.0.0.1:6379> keys *W*
1) "WelcomeText"
2) "Welcome"
3) "TwoWords"
127.0.0.1:6379> keys ?ath
1) "Math"
127.0.0.1:6379> mget WelcomeText Math TwoWords
1) "WelcomeHome"
2) "2310"
3) "Welcome home"
127.0.0.1:6379> mset a1 1 b1
(error) ERR wrong number of arguments for MSET
127.0.0.1:6379> mset a1 1 b2 2 c3 3
OK
127.0.0.1:6379> mget a1 b2 c3
1) "1"
2) "2"
3) "3"
127.0.0.1:6379> del a1 b2 c3
(integer) 3
127.0.0.1:6379> select 1
OK
127.0.0.1:6379[1]> keys *
(empty list or set)
127.0.0.1:6379[1]> set WelcomeText "Get out"
OK
127.0.0.1:6379[1]> select 0
OK
127.0.0.1:6379> get WelcomeText
"WelcomeHome"
127.0.0.1:6379> lpush MyList elem1
(integer) 1
127.0.0.1:6379> lpush MyList elem2
(integer) 2
127.0.0.1:6379> lpush MyList elem3
(integer) 3
127.0.0.1:6379> get MyList
(error) WRONGTYPE Operation against a key holding the wrong kind of value
127.0.0.1:6379> llen MyList
(integer) 3
127.0.0.1:6379> lrange MyList 0 2
1) "elem3"
2) "elem2"
3) "elem1"
127.0.0.1:6379> lrange MyList 0 1
1) "elem3"
2) "elem2"
127.0.0.1:6379> lrange MyList 0 0
1) "elem3"
127.0.0.1:6379> lrange MyList 0 stop
(error) ERR value is not an integer or out of range
127.0.0.1:6379> lrange MyList start
(error) ERR wrong number of arguments for 'lrange' command
127.0.0.1:6379> lrange MyList start stop
(error) ERR value is not an integer or out of range
127.0.0.1:6379> lrange MyList 0 -1
1) "elem3"
2) "elem2"
3) "elem1"
127.0.0.1:6379> lindex MyList 1
"elem2"
127.0.0.1:6379> linsert MyList before elem3 elem2.5
(integer) 4
127.0.0.1:6379> lrange MyList
(error) ERR wrong number of arguments for 'lrange' command
127.0.0.1:6379> lrange MyList 0 -1
1) "elem2.5"
2) "elem3"
3) "elem2"
4) "elem1"
127.0.0.1:6379> linstert MyList before elem2 elem2.5
(error) ERR unknown command `linstert`, with args beginning with: `MyList`, `before`, `elem2`, `elem2.5`, 
127.0.0.1:6379> linsert MyList before elem2 elem2.5
(integer) 5
127.0.0.1:6379> lrange MyList 0 -1
1) "elem2.5"
2) "elem3"
3) "elem2.5"
4) "elem2"
5) "elem1"
127.0.0.1:6379> lpop MyLis
(nil)
127.0.0.1:6379> lpop MyList
"elem2.5"
127.0.0.1:6379> rpush MyList elem0
(integer) 5
127.0.0.1:6379> lrange MyList 0 -1
1) "elem3"
2) "elem2.5"
3) "elem2"
4) "elem1"
5) "elem0"
127.0.0.1:6379> rpop MyList
"elem0"
127.0.0.1:6379> lrange MyList 0 -1
1) "elem3"
2) "elem2.5"
3) "elem2"
4) "elem1"
127.0.0.1:6379> rpoplpush MyList MyList
"elem1"
127.0.0.1:6379> lrange MyList 0 -1
1) "elem1"
2) "elem3"
3) "elem2.5"
4) "elem2"
127.0.0.1:6379> lrange MyListFirst 0 -1
(empty list or set)
127.0.0.1:6379> lpushx MyListFirst elem10
(integer) 0
127.0.0.1:6379> sadd MySet 1
(integer) 1
127.0.0.1:6379> sadd MySet 2
(integer) 1
127.0.0.1:6379> sadd MySet 3 4 5
(integer) 3
127.0.0.1:6379> smembers MySet
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
127.0.0.1:6379> srem MySet 4
(integer) 1
127.0.0.1:6379> smembers MySet
1) "1"
2) "2"
3) "3"
4) "5"
127.0.0.1:6379> sadd MySet2 1 3 2 5 6
(integer) 5
127.0.0.1:6379> smembers MySet2
1) "1"
2) "2"
3) "3"
4) "5"
5) "6"
127.0.0.1:6379> sunion MySet MySet2
1) "1"
2) "2"
3) "3"
4) "5"
5) "6"
127.0.0.1:6379> sinter MySet MySet2
1) "1"
2) "2"
3) "3"
4) "5"
127.0.0.1:6379> zadd MyZ 1 egy
(integer) 1
127.0.0.1:6379> zadd MyZ 2 ketto 3 harom 4 negy
(integer) 3
127.0.0.1:6379> zcard MyZ
(integer) 4
127.0.0.1:6379> zscore MyZ ketto
"2"
127.0.0.1:6379> zrank MyZ ketto
(integer) 1
127.0.0.1:6379> zrange MyZ 0 -1
1) "egy"
2) "ketto"
3) "harom"
4) "negy"
127.0.0.1:6379> zrevrange MyZ 0 -1
1) "negy"
2) "harom"
3) "ketto"
4) "egy"
127.0.0.1:6379> zreverange MyZ 0 -1 withscores
(error) ERR unknown command `zreverange`, with args beginning with: `MyZ`, `0`, `-1`, `withscores`, 
127.0.0.1:6379> zrevrange MyZ 0 -1 withscores
1) "negy"
2) "4"
3) "harom"
4) "3"
5) "ketto"
6) "2"
7) "egy"
8) "1"
127.0.0.1:6379> zrangebyscore MyZ 0 -1
(empty list or set)
127.0.0.1:6379> zrangebyscore MyZ 0 3
1) "egy"
2) "ketto"
3) "harom"
127.0.0.1:6379> zrangebyscore MyZ 0 4
1) "egy"
2) "ketto"
3) "harom"
4) "negy"
127.0.0.1:6379> zrank MyZ
(error) ERR wrong number of arguments for 'zrank' command
127.0.0.1:6379> zcard MyZ
(integer) 4
127.0.0.1:6379> zrangebyscore MyZ 0 (zcard MyZ)
(error) ERR min or max is not a float
127.0.0.1:6379> zrangebyscore MyZ 2 5
1) "ketto"
2) "harom"
3) "negy"
127.0.0.1:6379> zrangebyscore MyZ 0 5
1) "egy"
2) "ketto"
3) "harom"
4) "negy"
127.0.0.1:6379> zrem MyZ negy
(integer) 1
127.0.0.1:6379> zrangebyscore MyZ 0 5
1) "egy"
2) "ketto"
3) "harom"
127.0.0.1:6379> clear

127.0.0.1:6379> hset MyHash egy 100
(integer) 1
127.0.0.1:6379> hset MyHash ketto 2 harom 3 negy 4
(integer) 3
127.0.0.1:6379> hgetall MyHash
1) "egy"
2) "100"
3) "ketto"
4) "2"
5) "harom"
6) "3"
7) "negy"
8) "4"
127.0.0.1:6379> hset MyHash egy 1
(integer) 0
127.0.0.1:6379> hgetall MyHash
1) "egy"
2) "1"
3) "ketto"
4) "2"
5) "harom"
6) "3"
7) "negy"
8) "4"
127.0.0.1:6379> hsetnx MyHash egy 103
(integer) 0
127.0.0.1:6379> hgetall MyHash
1) "egy"
2) "1"
3) "ketto"
4) "2"
5) "harom"
6) "3"
7) "negy"
8) "4"
127.0.0.1:6379> hkeys MyHash
1) "egy"
2) "ketto"
3) "harom"
4) "negy"
127.0.0.1:6379> hvals MyHash
1) "1"
2) "2"
3) "3"
4) "4"
127.0.0.1:6379> hlen MyHash
(integer) 4
127.0.0.1:6379> hget MyHash egy
"1"
127.0.0.1:6379> hmget MyHash egy ketto harom negy
1) "1"
2) "2"
3) "3"
4) "4"
127.0.0.1:6379> hexists MyHash
(error) ERR wrong number of arguments for 'hexists' command
127.0.0.1:6379> hexists MyHash egy
(integer) 1
127.0.0.1:6379> hincrby MyHash egy 10
(integer) 11
127.0.0.1:6379> hmget MyHash egy ketto harom negy
1) "11"
2) "2"
3) "3"
4) "4"
127.0.0.1:6379> hdel MyHash negy
(integer) 1
127.0.0.1:6379> hmget MyHash egy ketto harom
1) "11"
2) "2"
3) "3"
127.0.0.1:6379> hmget MyHash egy ketto harom negy
1) "11"
2) "2"
3) "3"
4) (nil)
127.0.0.1:6379> multi
OK
127.0.0.1:6379> lpush MyListTemp ezer alma zold
QUEUED
127.0.0.1:6379> discard
OK
127.0.0.1:6379> multi
OK
127.0.0.1:6379> lpush MyListTemp ezer alma zold
QUEUED
127.0.0.1:6379> exec
1) (integer) 3
127.0.0.1:6379> multi
OK
127.0.0.1:6379> lpush TenoKust 1 2 3 4
QUEUED
127.0.0.1:6379> range TenoKust
(error) ERR unknown command `range`, with args beginning with: `TenoKust`, 
127.0.0.1:6379> range TenoKust 0 -1
(error) ERR unknown command `range`, with args beginning with: `TenoKust`, `0`, `-1`, 
127.0.0.1:6379> lrange TenoKust 0 -1
QUEUED
127.0.0.1:6379> exec
(error) EXECABORT Transaction discarded because of previous errors.
127.0.0.1:6379> multi
OK
127.0.0.1:6379> lpush TempList 1 2 3 4
QUEUED
127.0.0.1:6379> lrange TempList 0 -1
QUEUED
127.0.0.1:6379> exec
1) (integer) 4
2) 1) "4"
   2) "3"
   3) "2"
   4) "1"
127.0.0.1:6379> publish MyChannel "hali"
(integer) 1
127.0.0.1:6379> publish MyChannel isjdiajsadjsadj
(integer) 1
127.0.0.1:6379> flushdb
OK
127.0.0.1:6379> keys *
(empty list or set)
127.0.0.1:6379> select 1
OK
127.0.0.1:6379[1]> keys *
1) "WelcomeText"
127.0.0.1:6379[1]> flushall
OK
127.0.0.1:6379[1]> keys *
(empty list or set)
127.0.0.1:6379[1]> select 0
OK
127.0.0.1:6379> keys *
(empty list or set)
127.0.0.1:6379> publish MyChannel szevasztavasz
(integer) 1
127.0.0.1:6379> #sss
(error) ERR unknown command `#sss`, with args beginning with: 
127.0.0.1:6379> //f
(error) ERR unknown command `//f`, with args beginning with: 
127.0.0.1:6379> set ltsaString Welcome
OK
127.0.0.1:6379> set Six 6
OK
127.0.0.1:6379> set MyInt 32
OK
127.0.0.1:6379> mget ltsaString Six MyInt
1) "Welcome"
2) "6"
3) "32"
127.0.0.1:6379> 
itsh@ubuntu:~$ redis-cli
127.0.0.1:6379> incr MyInt
(integer) 33
127.0.0.1:6379> keys My*
1) "MyInt"
127.0.0.1:6379> lpush MyList 1 2 3
(integer) 3
127.0.0.1:6379> rpop MyList
"1"
127.0.0.1:6379> 
itsh@ubuntu:~$ redis-cli
127.0.0.1:6379> flushall
OK
127.0.0.1:6379> keys *
(empty list or set)
127.0.0.1:6379> shutdown
not connected> cc
Could not connect to Redis at 127.0.0.1:6379: Connection refused
not connected> 
itsh@ubuntu:~$ ^C
itsh@ubuntu:~$ 
```