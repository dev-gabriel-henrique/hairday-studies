import dayjs from "dayjs";

// SELECIONA AS SESSÕES MANHÃ, TARDE E NOITE
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // LIMPA AS LISTAS.
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // RENDERIZA OS AGENDAMENTOS POR PERIODO.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // ADICIONA O ID DO ELEMENTO.
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // CRIA ICONE DE CANCELAR AGENDAMENTO
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // ADICIONA O TEMPO, NOME E ICONE NO ITEM
      item.append(time, name, cancelIcon);

      // OBTÉM SOMENTE A HORA.
      const hour = dayjs(schedule.when).hour();

      //RENDERIZA O AGENDAMENTO NA SESSÃO (MANHÃ, TARDE OU NOITE)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
    console.log(error);
  }
}
