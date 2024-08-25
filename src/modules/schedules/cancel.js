import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// GERA EVENTO DE CLIQUE PARA CADA LISTA (MANHÃ, TARDE E NOITE)
periods.forEach((period) => {
  // CAPTURA EVENTO DE CLIQUE NA LISTA
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //OBTÉM A LI PAI DO ELEMENTO CLICADO
      const item = event.target.closest("li");

      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          // FAZ A REQUISIÇÃO NA API PARA CANCELAR.
          await scheduleCancel({ id });

          // RECARREGA OS AGENDAMENTOS.
          schedulesDay();
        }
      }
    }
  });
});
