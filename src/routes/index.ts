import { Router } from "express";
import * as errorhandler from "express-async-errors";

import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);

router.use("/specification", specificationRoutes);

router.use((err, req, res, next) => {
  res.json({ error: err.message });

  next(err);
});

export { router };
