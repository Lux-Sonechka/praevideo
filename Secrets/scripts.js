// To obfuscate

document.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      
      var input_password = document.getElementById('password-input')
      if (input_password.value == '1048') {
        
        window.open('https://drive.google.com/file/d/1PbIZ4bwxx8pbnHvREd8wvpWJiynIFMPW/view')
      }
      if (input_password.value == 'cat') {
        document.getElementById('secret-note').style.display = 'block';
        document.body.style.backgroundImage = "url('silly-cat.gif')"
        document.body.style.backgroundSize = '5vw'
        document.body.style.fontFamily = 'Comic Sans MS'
        window.open('https://youtu.be/PkLkiLyySDU?si=ibM1-A1WdqZxdRjg')
      }
      if (input_password.value == 'lux') {
        
        window.alert('LIGHT')
      }
      if (input_password.value == 'sonechka') {
        
        window.open('poem.html')
      }
      if (input_password.value = 'fox') {
        window.open('https://en.m.wikipedia.org/wiki/Kitsune')
      }
    }
  });
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
