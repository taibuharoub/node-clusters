const express = require("express");
const jphRoutes = require("./jph-routes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use("/jph",jphRoutes);
app.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`));