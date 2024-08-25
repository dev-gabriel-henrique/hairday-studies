export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // REMOVE A CLASSE HOUR-SELECTED DE TODAS LI NÃO SELECIONADAS.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // ADICIONA A CLASSE NA LI CLICADA.
      selected.target.classList.add("hour-selected");
    });
  });
}
