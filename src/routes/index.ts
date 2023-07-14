import { Router } from "express";
import get_nearby_pharmacies_routes from "./apis/pharmacies.apis.routes";

const routes = Router();

routes.use(
  "/get_nearby_pharmacies",
  get_nearby_pharmacies_routes
);

export default routes;
