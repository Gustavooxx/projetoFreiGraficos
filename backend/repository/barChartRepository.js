import connect from "./connetion.js";

export default async function BarChartDate() {
    const connection = await connect();
    const [rows] = await connection.execute('SELECT dt_agendamento FROM tb_agendamentos;');
    return rows;
}

export async function BarChartQuantity() {
    const connection = await connect();
    const [rows] = await connection.execute(`
        SELECT
            c.nomeCurso as courseName,
            i.periodo as periodName,
            COUNT(i.id) as totalInscritos
        FROM tb_inscricoes i
        JOIN tb_cursos c ON i.idCurso = c.id
        GROUP BY c.nomeCurso, i.periodo
        ORDER BY c.nomeCurso, i.periodo;
    `);
    return rows;
}
