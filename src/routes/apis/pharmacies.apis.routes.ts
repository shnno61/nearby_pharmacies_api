import { Router } from "express";
import { find } from "../../handlers/pharmacies.handlers";
const get_nearby_pharmacies_routes = Router();
get_nearby_pharmacies_routes
  .route("/:lat/:long/:name/:number")
  .get(find);
export default get_nearby_pharmacies_routes;
