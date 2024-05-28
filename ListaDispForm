$(document).ready(function () {
    // Función para reordenar y ocultar elementos en el formulario
    reOrdenar('h3');
     $('td.ms-formbody input[id="Direcci_x00f3_n_x0020_URL_be0f59fa-e4f9-4bd8-b3d4-25c3563e363e_$TextField"]').after('<br><a href="javascript:void(0);" onclick="GoToAttachFile()" class="btn btn-primary mt-3">Adjuntar</a>');
  
});

function reOrdenar(tag) {
    $(tag + ":contains('Centro de Costo')").hide();
    $(tag).filter(function() {
        return $(this).text().trim() === 'WI';
    }).closest('tr').hide();
        
    $(tag + ":contains('Tipo de contenido')").closest('tr').hide();
    $(tag + ":contains('Id# de instancia de flujo de trabajo')").closest('tr').hide();
    $(tag + ":contains('Tipo de archivo')").closest('tr').hide();
    // $(tag + ":contains('Dirección URL')").hide();
    $(tag + ":contains('Ruta')").closest('tr').hide();
    $(tag + ":contains('Dirección URL absoluta codificada')").closest('tr').hide();
    $(tag + ":contains('_OldID')").closest('tr').hide();
    $(tag + ":contains('AnioCreado')").closest('tr').hide();
    $(tag + ":contains('MesCreado')").closest('tr').hide();
    $(tag + ":contains('Semana')").closest('tr').hide();
    $(tag + ":contains('OLD Usuario Solicitante')").closest('tr').hide();
    $(tag + ":contains('OLD Sistema de Gestion')").closest('tr').hide();
    $(tag + ":contains('Tipo de elemento')").closest('tr').hide();

    $('td.ms-formbody input[id="Centro_x0020_de_x0020_Costo_e1069455-7b17-4b8c-83b7-537694184473_$TextField"]').closest('tr').hide();
    $('td.ms-formbody input[id="Tipo_x0020_de_x0020_contenido_741abf2f-e8ec-4abb-aeac-610f8ee3b7b2_$TextField"]').closest('tr').hide();
    // $('td.ms-formbody input[id="Direcci_x00f3_n_x0020_URL_be0f59fa-e4f9-4bd8-b3d4-25c3563e363e_$TextField"]').hide();
    $('td.ms-formbody input[id="Tipo_x0020_de_x0020_archivo_032f947a-faf1-4763-83e7-65b7b4bcc1db_$TextField"]').closest('tr').hide();
    $('td.ms-formbody input[id="Usuario_x0020_Solicitante_75fbfc7d-8bfd-4ebd-a577-d33491291f91_$TextField"]').closest('tr').hide();
    $('td.ms-formbody input[id="Id_x0023__x0020_de_x0020_instanc_c6523113-f4ae-4d6e-b4d3-4930b3edf8ba_$TextField"]').closest('tr').hide();
    $('td.ms-formbody input[id="Ruta_2ecc54c0-0a41-4afc-91b7-e4b9eff2c416_$TextField"]').closest('tr').hide();
    $('td.ms-formbody input[id="Tipo_x0020_de_x0020_elemento_b9b11f48-5339-48d8-b380-446a04812800_$TextField"]').closest('tr').hide();
    $('td.ms-formbody input[id="Direcci_x00f3_n_x0020_URL_x0020__2b506f70-7017-455d-8a3f-0559a15ee1f6_$TextField"]').hide();
    $('td.ms-formbody input[id="_OldID_36b1b46d-2682-48da-8fbb-d3d1f857bbe4_$NumberField"]').closest('tr').hide();
    $('td.ms-formbody input[id="AnioCreado_a8cb654d-d016-4fab-862b-d7e06343eed9_$NumberField"]').closest('tr').hide();
    $('td.ms-formbody input[id="MesCreado_332980c8-ec16-44cd-9b7f-087b15740ce6_$NumberField"]').closest('tr').hide();
    $('td.ms-formbody input[id="Semana_c777e2f2-0513-4b64-8554-d16004294ad5_$NumberField"]').hide();
    $('td.ms-formbody input[id="Sistema_x0020_de_x0020_Gestion_d20f81e2-c163-42c4-99b6-16b51d0cc001_$TextField"]').closest('tr').hide();
    $('td.ms-formbody select[id="WI_ed8d33b1-b8b5-4126-b0d4-97527376e845_$DropDownChoice"]').closest('tr').hide();
}



function GoToAttachFile() {
    // Busca el botón por su ID
    var attachFileButton = document.getElementById("Ribbon.ListForm.Edit.Actions.AttachFile-Large");
  
    // Si el botón existe, simula un clic en él
    if (attachFileButton) {
      attachFileButton.click();
    }
  }
