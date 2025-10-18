import connect from "./connetion.js";

export default async function LineChartDate() {
    const connection = await connect();
    const [rows] = await connection.execute(`
        SELECT DATE(dt_agendamento) as _id, COUNT(*) as totalAgendamentos
        FROM tb_agendamentos
        GROUP BY DATE(dt_agendamento)
        ORDER BY DATE(dt_agendamento);
    `);
    return rows;
}

export async function LineChartPeriod() {
    const connection = await connect();
    const [rows] = await connection.execute('SELECT periodo FROM tb_inscricoes;');
    return rows;
}

export async function LineChartQuantity() {
    const connection = await connect();
    const [rows] = await connection.execute('SELECT totalInscritos FROM tb_inscricoes;');
    return rows;
}
