#Create the instructors table
CREATE TABLE instructors (
  ID  INT PRIMARY KEY NOT NULL,
  NAME TEXT NOT NULL,
  EXPERIENCE INT NOT NULL,
  WEBSITE CHAR(50)
);

# Create the 'students' table
CREATE TABLE students (
  ID INT PRIMARY KEY NOT NULL,
  NAME TEXT NOT NULL,
  AGE INT NOT NULL,
  ADDRESS CHAR(50)
);

# Insert one student into the 'students' table
INSERT INTO students 
VALUES (1, 'Jack Sparrow', 28, '50 Main St, New York, NY');

# Show the students table
SELECT * 
FROM students
ORDER BY id asc;

# Delete from a table
DELETE FROM students where id=6;

#Update from a table
UPDATE students set age=99 where id=1;


# Flush the table out?
TRUNCATE TABLE students;

