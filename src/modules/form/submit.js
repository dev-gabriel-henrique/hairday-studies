import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectDate = document.getElementById("date");
const clientName = document.getElementById("client");

// DATA ATUAL PARA FORMATAÇÃO DO INPUT.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// CARREGANDO A DATA ATUAL E DEFINE A DATA MINIMA COMO A ATUAL.
selectDate.value = inputToday;
selectDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // RECUPERANDO O NOME DO CLIENTE.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // RECUPERA O HORÁRIO SELECIONADO.
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    // RECUPERA SOMENTE A HORA.
    const [hour] = hourSelected.innerHTML.split(":");

    // GERA UM ID.
    const id = new Date().getTime().toString()

    // INSERE A HORA NA DATA
    const when = dayjs(selectDate.value).add(hour, "hour");

    // FAZ O AGENDAMENTO
    await scheduleNew({ id, name, when });

    // RECARREGA OS AGENDAMENTOS.
    await schedulesDay();

    // LIMPA O INPUT DE NOME DO CLIENTE
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
  }
};
