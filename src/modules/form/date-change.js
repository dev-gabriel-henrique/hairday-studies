import { schedulesDay } from "../schedules/load";
// SELECIONA O INPUT DE DATA
const selectDate = document.getElementById("date");

// RECARREGA A LISTA DE HORÁRIOS QUANDO O INPUT DE DATA MUDAR
selectDate.onchange = () => schedulesDay();
