import barChartEndpoint from "./controller/barChartController.js";
import lineChartEndpoint from "./controller/lineChartController.js";

export default function routes(app) {
    app.use('/bar', barChartEndpoint);
    app.use('/line', lineChartEndpoint);
}
