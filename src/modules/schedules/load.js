import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectDate = document.getElementById("date");

export async function schedulesDay() {
  // OBTÉM A DATA DO INPUT
  const date = selectDate.value;

  // BUSCA NA API OS AGENDAMENTOS.
  const dailySchedules = await scheduleFetchByDay({ date });

  // EXIBE OS AGENDAMENTOS.
  schedulesShow({ dailySchedules });

  // RENDERIZA AS HORAS DISPONÍVEIS.
  hoursLoad({ date, dailySchedules });
}
