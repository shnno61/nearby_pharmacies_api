CREATE TABLE pharmacies (
  id SERIAL PRIMARY KEY,
  api_endpoint VARCHAR(255) NOT NULL,
  location POINT NOT NULL
);