CREATE TABLE pharmacies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  api_endpoint VARCHAR(255) NOT NULL,
  latitude NUMERIC(9,6) NOT NULL,
  longitude NUMERIC(9,6) NOT NULL
);