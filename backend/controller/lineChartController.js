import { Router } from "express";
import LineChartDate, { LineChartQuantity, LineChartPeriod } from "../repository/linechartRepository.js";

const endpoint = Router();

endpoint.get("/listar/data", async (req, res) => {
    try {
        const data = await LineChartDate();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar dados de data' });
    }
});

endpoint.get("/listar/quantidade/line", async (req, res) => {
    try {
        const data = await LineChartQuantity();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar dados de quantidade' });
    }
});

endpoint.get("/listar/periodo", async (req, res) => {
    try {
        const data = await LineChartPeriod();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar dados de periodo' });
    }
});

export default endpoint