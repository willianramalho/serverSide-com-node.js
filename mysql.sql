/*
instale o banco de dados (npm install mysql2)
 */
CREATE DATABASE hipermercado;

USE hipermercado;

CREATE TABLE carnes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(255) NOT NULL,
  preco_ate_5kg DECIMAL(10,2) NOT NULL,
  preco_acima_5kg DECIMAL(10,2) NOT NULL
);

INSERT INTO carnes (tipo, preco_ate_5kg, preco_acima_5kg) VALUES
('file duplo', 24.90, 25.80),
('alcatra', 25.90, 26.80),
('picanha', 36.90, 37.80);
