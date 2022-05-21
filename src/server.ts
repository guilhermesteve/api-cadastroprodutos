import express from "express";
import * as errorhandler from "express-async-errors";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.use("/specification", specificationRoutes);

app.use((err, req, res, next) => {
  res.json({ error: err.message });

  next(err);
});

app.listen(3333);
