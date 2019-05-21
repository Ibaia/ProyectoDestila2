<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="model.factura.*" %>
<%@ page import="model.productoFactura.*" %>
<%@ page import="java.util.ArrayList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>@import url(http://fonts.googleapis.com/css?family=Bree+Serif);
  body, h1, h2, h3, h4, h5, h6{
    font-family: 'Bree Serif', serif;
  }
  </style>
<title>Factura</title>
</head>
 <% 	ArrayList<FacturaClass> factura = (ArrayList<FacturaClass>)request.getAttribute("factura");	 
 		for(int i=0; i<factura.size();i++){
 		%>
<body>
	<div class="container">

		<div class="col-xs-6">
			<h1><a href="view/vIndex.html"><img alt="" src="img/logo.png" /></a></h1>
		</div>
		
		<div class="col-xs-6 text-right">
			<h1>FACTURA	<%=factura.get(i).getFecha_compra() %></h1>
				<h1><small>Factura N� <%=factura.get(i).getId() %></small></h1>
		</div> 
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-3">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4>De: Destila2 S.A</h4>
						</div>
						<div class="panel-body">
							<br>Direccion: 1-503 Whippoorwill 
							<br>Ln Calera, AL 35040
							<br>USA
						</div>
					</div>
				</div>
				<div class="col-3 text-right">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4>Cliente: <%=factura.get(i).getComprador() %></a></h4>
						</div>
						<div class="panel-body">
						<br>Numero de Telefono: <%=factura.get(i).getTelefono() %>
						<br>Direccion: <%=factura.get(i).getDireccion() %>
						</div>
					</div>
				</div>
			</div>
		</div>
<!-- / fin de secci�n de datos del Cliente  -->

		<pre>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th><h4>Producto</h4></th>
						<th><h4>Cantidad</h4></th>
						<th><h4>Precio unidad</h4></th>
						<th><h4>Sub-Total</h4></th>
					</tr>
			</thead>

			<tbody class="datos">
			<% 	double subtotal= (double)request.getAttribute("subtotal");
			ArrayList<ProductoFacturaClass> lineaFactura = (ArrayList<ProductoFacturaClass>)request.getAttribute("lineaFactura");	 
 			for(int j=0; i<factura.size();i++){
 			%>
				<tr>
					<td><%=lineaFactura.get(i).getNombre() %></td>
					<td><%=lineaFactura.get(i).getCantidad() %></td>
					<td class><%=lineaFactura.get(i).getPrecio() %></td>
					<td class=" text-right "><%=subtotal %></td>
				</tr>
			<%}%>
			</tbody>
			</table>
		<div class="row text-right">
			<div class="col-xs-3 col-xs-offset-7"><strong>Total:   $ </strong></div>
		</div>
	</div>
	<%} %>
	
	
<script>
</script>
</body>
</html>