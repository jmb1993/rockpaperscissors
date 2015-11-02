#1
SELECT name FROM teams;
#2
SELECT stadium,  head_coach FROM teams  WHERE conference LIKE '%NFC%';
#3
SELECT head_coach FROM teams WHERE conference LIKE '%AFC' AND division LIKE "%SOUTH";
#4
SELECT COUNT (*) FROM players;
 #5
 SELECT name, head_coach FROM teams WHERE conference, LIKE '%NFC%' AND division LIKE '%NORTH%'
 OR conference LIKE '%AFC%' AND division LIKE '%EAST%';
 #6
 SELECT name FROM players WHERE COUNT (salary) <= 50;
#7
SELECT AVG (salary) FROM players;
#8
SELECT name FROM players GROUP BY name HAVING min (salary) = 10000000;
#9
SELECT TOP 1 (salary) FROM players;
#10
SELECT name, position FROM PLAYERS salary(asc) COUNT <= (100);
#11
SELECT AVG (salary) FROM players LIKE '%DE%';
