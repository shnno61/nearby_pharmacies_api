import { Router } from "express";
import users_routes from "./apis/pharmacies.apis.routes";
 
const routes = Router();
routes.use("/users", users_routes);
routes.use("/products", products_routes);
routes.use("/orders", orders_routes);

export default routes;
