USE instagram;
SELECT * FROM user;

INSERT INTO USER
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@gmail.com", 400, 145),
(6, 16, "farah", "farah@gmail.com", 10000, 1000);


SELECT * FROM user WHERE followers >= 200;
SELECT name, followers FROM user WHERE followers >= 200;
SELECT * FROM user WHERE age < 16;
SELECT name, age FROM user WHERE age < 16;
SELECT name, age FROM user WHERE age + 1 = 18;

SELECT name, age, followers FROM user WHERE age > 15 AND followers > 200;
SELECT name, age, followers FROM user WHERE age > 15 OR followers > 200;

SELECT name, age, followers FROM user WHERE age BETWEEN 15 AND 17;

SELECT name, email, followers FROM user WHERE email IN("adam@gmail.com", "bob@gmail.com", "abc123@gmail.com");

SELECT name, age, followers FROM user WHERE age IN (14, 16);
SELECT name, age, followers FROM user WHERE age NOT IN (14, 16);

SELECT name, age, followers FROM user WHERE age > 15;
SELECT name, age, followers FROM user WHERE age > 15 LIMIT 2;

SELECT name, age, email FROM user LIMIT 3;

SELECT name, age, followers FROM USER ORDER BY followers ASC;
SELECT name, age, followers FROM USER ORDER BY followers DESC;
SELECT name, age, followers FROM USER ORDER BY followers;

SELECT max(followers)
FROM user;

SELECT max(age)
FROM user;

SELECT count(age)
FROM user
WHERE age=14;

SELECT min(age)
FROM user;

SELECT avg(age)
FROM user;

SELECT sum(followers)
FROM user;

SELECT age, count(id) FROM user GROUP BY age;
SELECT age FROM user GROUP BY age;

SELECT age, max(followers) FROM user GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;

SET SQL_SAFE_UPDATES = 0;

UPDATE user SET followers = 600 WHERE age = 16;

SELECT * FROM user;

DELETE FROM user WHERE age = 14;

ALTER TABLE user ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";
ALTER TABLE user DROP COLUMN age;

SELECT * FROM user;

ALTER TABLE user RENAME to insta_user;

SELECT * FROM insta_user;

ALTER TABLE insta_user RENAME to user;

SELECT * FROM user;

ALTER TABLE user CHANGE COLUMN followers subs INT DEFAULT 0;

SELECT * FROM user;

ALTER TABLE user MODIFY subs INT DEFAULT 5;

INSERT INTO user
(id, name, email, following)
VALUES
(7, "gemini", "gemini@mail.com", 120);

SELECT * FROM user;

DROP TABLE post;

TRUNCATE TABLE user; 

SELECT * FROM user;

DROP TABLE user;

SELECT * FROM user;

