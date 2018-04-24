$ createdb best-exchange
$ psql best-exchange


$ createdb best-exchange
$ psql best-exchange


CREATE TABLE rando_exchange(
id serial PRIMARY KEY,
btc_usd real NOT NULL,
alt_name VARCHAR (20) NOT NULL,
rate real NOT NULL,
alt_usd real,
date_time TIMESTAMP,
date DATE
);

INSERT INTO rando_exchange (btc_usd, alt_name, rate, alt_usd, date)
VALUES
(8874.33, 'Ethereum', 0.071, 688.34, TIMESTAMP, DEFAULT);

ALTER TABLE rando_exchange ALTER COLUMN date SET DEFAULT CURRENT_DATE


To_char , to_num trim

///CONVERTING DATA

http://www.postgresqltutorial.com/postgresql-to_number/
http://www.postgresqltutorial.com/postgresql-to_char/

SELECT
    id,
    btc_usd,
    TO_CHAR(btc_usd, 'l99999D99') btc_usd_format
FROM
  rando_exchange
WHERE
    id=1;

best-exchange=# select TO_CHAR(btc_usd, 'l99999D99')btc_usd, * from rando_exchange;



  btc_usd   | id | btc_usd | alt_name | rate  | alt_usd | date_time |    date
------------+----+---------+----------+-------+---------+-----------+------------
 $  8874.33 |  1 | 8874.33 | Ethereum | 0.071 |         |           |
 $  8874.33 |  2 | 8874.33 | Ethereum | 0.071 |  688.34 |           |
 $  8874.33 |  3 | 8874.33 | Ethereum | 0.071 |  688.34 |           |
 $  8874.33 |  4 | 8874.33 | Ethereum | 0.071 |  688.34 |           | 2018-04-23


best-exchange=# select TO_CHAR(btc_usd, 'l99999D99')btc_usd from rando_exchange;
  btc_usd
------------
 $  8874.33
 $  8874.33
 $  8874.33
 $  8874.33
(4 rows)



numeric or numeric(p,s) is a real number with p digits with s number after the decimal point. The numeric(p,s) is the exact number.


SQL types int, smallint, real, double precision, char(N), varchar(N), date, time, timestamp, and interval, 
/
DROP TABLE tablename;



INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
    VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');



COPY weather FROM '/home/user/weather.txt';
