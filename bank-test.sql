DROP DATABASE IF EXISTS Bank;

CREATE DATABASE IF NOT EXISTS Bank;

USE Bank;

CREATE TABLE `Customers` (
  `customer_id` INT PRIMARY KEY AUTO_INCREMENT,
  `cpf` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `middle_name` VARCHAR(255) DEFAULT null,
  `last_name` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT (now())
);


CREATE TABLE `Branches` (
  `branch_id` INT PRIMARY KEY AUTO_INCREMENT,
  `branch` VARCHAR(255) NOT NULL
);

CREATE TABLE `Accounts` (
  `account_id` INT PRIMARY KEY AUTO_INCREMENT,
  `account_number` VARCHAR(255) NOT NULL,
  `balance` DECIMAL(10,2) NOT NULL,
  `type_id` INT NOT NULL,
  `status_id` INT NOT NULL,
  `customer_id` INT NOT NULL,
  `branch_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT (now())
);

CREATE TABLE `Transactions` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `type_id` INT NOT NULL,
  `amount` DECIMAL(10, 2) NOT NULL,
  `date` TIMESTAMP DEFAULT (now()),
  `account_payer` INT NOT NULL,
  `account_payee` INT NOT NULL
);

CREATE TABLE `Account_Types` (
  `type_id` INT PRIMARY KEY AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL
);

CREATE TABLE `Account_Status` (
  `status_id` INT PRIMARY KEY AUTO_INCREMENT,
  `status` VARCHAR(255) NOT NULL
);

CREATE TABLE `Transaction_Types` (
  `type_id` INT PRIMARY KEY AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL
);

ALTER TABLE `Accounts` ADD FOREIGN KEY (`customer_id`) REFERENCES `Customers` (`customer_id`);

ALTER TABLE `Accounts` ADD FOREIGN KEY (`branch_id`) REFERENCES `Branches` (`branch_id`);

ALTER TABLE `Accounts` ADD FOREIGN KEY (`type_id`) REFERENCES `Account_Types` (`type_id`);

ALTER TABLE `Accounts` ADD FOREIGN KEY (`status_id`) REFERENCES `Account_Status` (`status_id`);

ALTER TABLE `Transactions` ADD FOREIGN KEY (`type_id`) REFERENCES `Transaction_Types` (`type_id`);

ALTER TABLE `Transactions` ADD FOREIGN KEY (`account_payer`) REFERENCES `Accounts` (`account_id`);

ALTER TABLE `Transactions` ADD FOREIGN KEY (`account_payee`) REFERENCES `Accounts` (`account_id`);

INSERT INTO Account_Status (status)
VALUES
('Inativo'),
('Ativo');

INSERT INTO Transaction_Types (type)
VALUES
('Transferência'),
('Depósito');

INSERT INTO Account_Types (type)
VALUES 
('Conta corrente'),
('Conta salário');

INSERT INTO Customers (cpf, first_name, middle_name, last_name)
VALUES
('273.976.317-46', 'Tício', null, 'Ticiano'),
('551.260.186-55', 'Mévio', 'Meio', 'Meviano'),
('527.856.522-58', 'Fulano', null, 'Silva'),
('712.545.792-49', 'Ciclano', 'de', 'Souza'),
('990.073.979-58', 'Beltrano', 'Belo', 'Oliveira');


INSERT INTO Branches (branch)
VALUES
('Digital'),
('Agência 01');


INSERT INTO Accounts (account_number, balance, type_id, status_id, customer_id, branch_id)
VALUES
('318-82-6264', 1500.00, 1, 1, 1, 1),
('408-92-3605', 700.00, 2, 1, 2, 1),
('232-37-2069', 20000.00, 1, 1, 3, 2),
('224-95-7443', 3400.00, 2, 1, 5, 2);
