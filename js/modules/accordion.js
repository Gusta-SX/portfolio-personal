export default function initAccordion() {
  const accordion = document.querySelectorAll('.timeline-open')
  const activeClass = 'ativo';

  if(accordion.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
      (this.classList.contains(activeClass) ? this.innerHTML = 'Esconder' : this.innerHTML = 'Mostrar detalhes')
    }

    accordion.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}