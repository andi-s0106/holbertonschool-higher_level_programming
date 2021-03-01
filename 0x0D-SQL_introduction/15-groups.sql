-- lists the number of records with the same score in the table second_table
SELECT COUNT(score) AS number GROUP BY score ORDER BY number DESC;
