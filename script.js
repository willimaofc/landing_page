// Ano automático no rodapé
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Menu mobile
function hamburg(){
  const dd = document.getElementById('dropdown');
  if (dd) dd.style.display = 'block';
}
function cancel(){
  const dd = document.getElementById('dropdown');
  if (dd) dd.style.display = 'none';
}

// Typewriter
(function typewriterInit(){
  const el = document.querySelector('.typewriter-text');
  if(!el) return;
  const texts = ["Cybersecurity Enthusiast", "Pentester", "CTF Player", "Developer"];
  let count = 0, index = 0, current = "", letter = "";

  function type(){
    if(count === texts.length) count = 0;
    current = texts[count];
    letter = current.slice(0, ++index);
    el.textContent = letter;

    if(letter.length === current.length){
      count++;
      index = 0;
      setTimeout(type, 1000); // pausa entre frases
    }else{
      setTimeout(type, 90); // velocidade da digitação
    }
  }
  type();
})();
