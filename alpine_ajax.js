
<script defer src="/static/js/alpine_ajax.min.js"></script>

<a href="/comentario" x-target="comentario comentario2" >mensaje</a>
x-target --> destino de lo que devuelve el servidor

<div id="mensaje"></div>
<div id="mensaje2"></div>

lo que devuelve el servidor tiene que ser como esto :
<div id="mensaje">
    JOAQUIN
</div>
<div id="mensaje2">
    ADRIANA
</div>

Podemos tambien hacer peticiones ajax 
<div  @click='$ajax("/nombre/56", {method: "get",target:"mensaje mensaje2"})'>
        enviar
</div>
<div  class="cursor-pointer"
          @click='nombre = JSON.stringify(param);$ajax("/nombre2", {method: "post",body:{nombre,apellidos} ,target:"mensaje3 mensaje4"})'>
        enviar2
</div>
