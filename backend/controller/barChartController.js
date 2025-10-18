import { Router } from "express";
import BarChart, { BarChartQuantity } from "../repository/barChartRepository.js";
import BarChartDate from "../repository/barChartRepository.js";

const endpoint = Router();

endpoint.get("/listar/data", async (req, res) => {
    try {
        const data = await BarChartDate();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar dados de data' });
    }
});

endpoint.get("/listar/quantidade", async (req, res) => {
    try {
        const data = await BarChartQuantity();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar dados de quantidade' });
    }
});

export default endpoint
