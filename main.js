let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #6A0DF9  ;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #6A0DF9  ;">Estudiante de Ingeniero Mecánico Administrador.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();