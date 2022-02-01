CREATE DATABASE IF NOT EXISTS Bank;

USE Bank;

CREATE TABLE `Customers` (
  `cpf` VARCHAR(255) PRIMARY KEY,
  `first_name` VARCHAR(255) NOT NULL,
  `middle_name` VARCHAR(255) DEFAULT null,
  `last_name` VARCHAR(255) NOT NULL,
  `city_id` INT,
  `created_at` TIMESTAMP DEFAULT (now())
);

CREATE TABLE `City` (
  `city_id` INT PRIMARY KEY,
  `city` VARCHAR(255) NOT NULL
);

CREATE TABLE `Branch` (
  `branch_id` INT PRIMARY KEY,
  `branch` VARCHAR(255) NOT NULL,
  `city_id` INT
);

CREATE TABLE `Account` (
  `account_number` INT PRIMARY KEY,
  `balance` DECIMAL(5,2) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `status` VARCHAR(255) NOT NULL,
  `cpf` VARCHAR(255),
  `branch_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT (now())
);

CREATE TABLE `Transaction` (
  `id` INT PRIMARY KEY,
  `type` VARCHAR(255) NOT NULL,
  `amount` DECIMAL(5,2) NOT NULL,
  `date` TIMESTAMP DEFAULT (now()),
  `account_payer` INT,
  `account_payee` INT
);

ALTER TABLE `Customers` ADD FOREIGN KEY (`city_id`) REFERENCES `City` (`city_id`);

ALTER TABLE `Branch` ADD FOREIGN KEY (`city_id`) REFERENCES `City` (`city_id`);

ALTER TABLE `Account` ADD FOREIGN KEY (`cpf`) REFERENCES `Customers` (`cpf`);

ALTER TABLE `Account` ADD FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`branch_id`);

ALTER TABLE `Transaction` ADD FOREIGN KEY (`account_payer`) REFERENCES `Account` (`account_number`);

ALTER TABLE `Transaction` ADD FOREIGN KEY (`account_payee`) REFERENCES `Account` (`account_number`);

