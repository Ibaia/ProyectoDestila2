$(document).ready(function () {

  $.getJSON("http://localhost:8080/Proyecto_destila2/CProductos"
  ).done(function (response) {
    console.log(response);
    var productos = response;

    var html = "";




    for (let index = 0; index < productos.length; index++) {
      const producto = productos[index];
      html += '<div class="col s6 m3 l3">'
      html += '<a href="#modalProducto" class="modal-trigger cardProducto" data-id="' + producto.id + '">'
      html += '<div class="container">'
      html += '<div class="row">'
      html += '<div class="teal lighten-2 card-producto z-depth-1">'
      html += '<img class="responsive-img circle" src="../' + producto.img + '"/>'
      html += '<p class="center-align"><b>' + producto.nombre + '</b></p>'
      html += '</div>'
      html += '</div>'
      html += '</div>'
      html += '</a>'
      html += '</div>'





    }

    $('.cuerpoProductos').html(html);
    
    añadirEventoClickModalProducto();
    

    $.getJSON("http://localhost:8080/Proyecto_destila2/CCategoria"
    ).done(function (response) {
      console.log(response);
      var categorias = response;
  
      var html = "";
      for (let index = 0; index < categorias.length; index++) {
        const categoria = categorias[index];
        html += '<div class="row">'
        html += '<a class="waves-effect waves-teal btn-flat categorias col s12 center-align" href="#' + categoria.nombre + '" data-id="' + categoria.id + '">' + categoria.nombre + '</a>'
        html += '</div>'
      }
  
      $('.rellenarCategorias').html(html);
  
      $(".categorias").on("click", function () {
        var categoria_id = $(this).data('id');
        var html_categoria = "";
  
  
        //carga productgos de una categoria
        for (let cat = 0; cat < productos.length; cat++) {
          const producto = productos[cat];
  
          if (categoria_id == producto.id_categoria) {
  
            html_categoria += '<div class="col s6 m3 l3 cardProducto">'
            html_categoria += '<a href="#modalProducto" class="modal-trigger cardProducto" data-id="' + producto.id + '">'
            html_categoria += '<div class="container">'
            html_categoria += '<div class="row">'
            html_categoria += '<div class="teal lighten-2 cardProducto z-depth-1">'
            html_categoria += '<img class="responsive-img circle" src="../' + producto.img + '"/>'
            html_categoria += '<p class="center-align"><b>' + producto.nombre + '</b></p>'
            html_categoria += '</div>'
            html_categoria += '</div>'
            html_categoria += '</div>'
            html_categoria += '</a>'
            html_categoria += '</div>'
  
            $('.cuerpoProductos').html(html_categoria);

            añadirEventoClickModalProducto();

          }
  
        }
  
  
      });
  
    });
    
    //Añade productos al carrito
    $(".botonAddCarrito").on("click", function () {
  	  var idProd = $(".imgModalProducto").data('id');
  	  var cantidadProd = $("#cantidadProducto").val();
  	  var precioTot = 0;
  	  
      $.getJSON("http://localhost:8080/Proyecto_destila2/CProductos"
      ).done(function (response) {
        var productos = response;
        
        var html_carrito = "";
      for (let modal = 0; modal < productos.length; modal++) {
        const producto = productos[modal];
        if (producto.id == idProd) {
        	
        	var precioMult=producto.precio*cantidadProd;
        	
        	html_carrito += '<tr>'
        	html_carrito += '<td>'+cantidadProd+'</td>'
        	html_carrito += '<td>'+producto.nombre+'</td>'
        	html_carrito += '<td>'+precioMult+'</td>'
        	html_carrito += '<td><a href="#" data-precio='+precioMult+' class="borrarItemCarrito"><i class="material-icons">clear</i></a></td>'
        	html_carrito += '</tr>'
        		
        		precioTot = precioTot + precioMult+'$'
         
        	$('.tablaCarrito').append(html_carrito);
        	$('.precioTotalCarrito').html(precioTot);
        } 
      }  
    });  
   });

   //Borrar items del carrito
    $(document).on('click','.borrarItemCarrito',function(e){
    	var precioTotalActual = $(".precioTotalCarrito").text();
    	var precioItem = $(this).data('precio');
    	$(this).parent().parent().remove();
    	
    	precioTot = precioTotalActual - precioItem+'$'
    	
    	$('.precioTotalCarrito').html(precioTot);
    	
    });
    

  });
  
  
  
  function añadirEventoClickModalProducto(){
    $(".cardProducto").on("click", function () {
      var producto_id = 0;
      producto_id = $(this).data('id');
      var img = "";
      var boton = "";
      var cantidad ="";

      $.getJSON("http://localhost:8080/Proyecto_destila2/CProductos"
      ).done(function (response) {
  
        var productos = response;
      for (let modal = 0; modal < productos.length; modal++) {
        const producto = productos[modal];
        if (producto.id == producto_id) {
          $('.productoTitulo').html(producto.nombre);
  
          $('.productoDescripcion').html(producto.descripcion);
  
          $('.productoPrecio').html(producto.precio);
  
          img += '<img class="responsive-img imgModalProducto" data-id="' + producto.id + '" src="../' + producto.img + '"/>'
  
          $('.productoImg').html(img);
          
          cantidad += '<input value="1" id="cantidadProducto" type="number" class="validate" min="1">'
          cantidad += '<label class="active" for="cantidadProducto">Cantidad</label>'
        	  
          $('.cantidadProducto').html(cantidad);
         
        }
  
      }
  
  
    });
  });
  };
  
  
});

