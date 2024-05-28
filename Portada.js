$(document).ready(function () {
   $("#sectionNavegacion").show();
   $("#sectionAux").show();
   modificarNavegacionSF();
   getFunciones('Funciones IySF', 'funciones');
});


function getFunciones(nameList, idDiv, filter ) {
   console.log("nameList: " + nameList);
   let Url = "";
   let divContenedor = $("#" + idDiv);
 
 
   Url = "https://intranet.trabajo.gob.ar/GestionAdministrativa/DGIIT/DDOyST/IySF" + "/_api/web/lists/GetByTitle('" + nameList + "')/items";
   console.log(Url);
 
 
   $.ajax({
     url: Url,
     method: "GET",
     headers: { "Accept": "application/json; odata=verbose" },
     success: function (data) {
       data = data.d.results;
       if (data.length > 0) {
         $.each(data, function (index, value) {
           console.log(data);

           if(value.Area == "Soporte"){
           var htmlInfo = '<div class="col-12">'
             + '  <div class="panel-body">'
             + '<h3>'+value.Title+'<h3>'
             + '      <p>' + value.Descripcion + '</p>'
             + '  </div> '
             + ' </div>';
           divContenedor.append(htmlInfo);
           }
         
         });
 
       }
       else {
         divContenedor.append('<span class="text-mutted m-1">No existen vínculos en esta vista.</span>');
       }
 
     },
     error: function (data) {
       console.log(data);
     }
   });
 }




