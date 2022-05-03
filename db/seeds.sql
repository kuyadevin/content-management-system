INSERT INTO departments (id, name)
VALUES (1, "Sales"),
       (2, "Finance"),
       (3, "Engineering"),
       (4, "Human Resources"),
       (5, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2, "Sales Person", 50000, 1),
       (3, "Account Manager", 150000, 2),
       (4, "Accountant", 100000, 2),
       (5, "Senior Engineer", 200000, 3),
       (6, "Junior Engineer", 150000, 3),
       (7, "HR Manager", 100000, 4),
       (8, "Lawyer", 200000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Chris", "Evans", 1, null),
       (2, "Robert", "Downey", 2, 1),
       (3, "Chris", "Hemsworth", 3, null),
       (4, "Mark", "Ruffalo", 4, 3),
       (5, "Scarlett", "Johansson", 5, null),
       (6, "Jeremy", "Renner", 6, 5),
       (7, "Chris", "Pratt", 7, null),
       (8, "Zoe", "Saldana", 8, null);