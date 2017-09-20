var yourInput = document.getElementById("yaInput").value;
if(sha512(yourInput) == "c8f8d4946030cf26ab5cb0f69736b33761020c8a05df4256f35f79b6fa58834c07884ad986621f44aa2bd399d3a84d4684aabcd998a90161cdd567b7c46e8438"){
  alert("Noice you got past the first level lol.");
  alert("The link to the second level is encrypted in Blowfish");
  alert("Use the link I'm about to give you to decrypt. The key is the password you just typed in");
  document.write("http://sladex.org/blowfish.js/");
  document.write("LvnfXG7dlgqy/4jXe/abEsUGm15DewJjYj8Y6P/uR83yIXUT1T6dbjVJrnjvK0mp");
}
