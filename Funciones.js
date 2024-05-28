function modificarNavegacionSF() {

    let selectorNav = $("#sectionNavegacion");
    let urlNav = "xx" + "/_api/web/lists/GetByTitle('navSF')/items?$select=ID,Title,Vinculo,Icono,Posicion&$orderby=Posicion asc";
    let htmlSelector = "";
    let htmlUl = "";
    $.ajax({
        url: urlNav,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            data = data.d.results;
            htmlUl = '<ul class="nav nav-icons todasLasNav">'

                + '</ul>';
            selectorNav.append(htmlUl);


            $.each(data, function (index, value) {

                let selectorIconos = $(".todasLasNav");

                htmlSelector = '<li class="botonera">'
                    + '<a href="' + value.Vinculo + '"><i class="' + value.Icono + '"></i><span>' + value.Title + '</span></a>'
                    + '</li>';

                selectorIconos.append(htmlSelector);

            });
        },
        error: function (data) {
            console.log(data);
        }
    });
}


function getList(nameList, idDiv, filter) {
    console.log("nameList: " + nameList);
    let Url = "";
    let divContenedor = $("#" + idDiv);
    if (filter == "") {
        Url = "xx" + "/_api/web/lists/GetByTitle('" + nameList + "')/items?orderby=Modified desc";
    }
    else {
        Url = "xx" + "/_api/web/lists/GetByTitle('" + nameList + "')/items?orderby=Modified desc&$filter=" + filter;
    }



    $.ajax({
        url: Url,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            data = data.d.results;
            if (data.length > 0) {
                $.each(data, function (index, value) {
                    getDocumentID(divContenedor, nameList, value.ID, value.Title);
                });
            }
            else {
                divContenedor.append('<span class="text-mutted m-1">No existe documentación para esta vista.</span>');
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}


function getDocumentID(divContenedor, nameList, id, title) {
    let Url = "";
    // let divContenedor = $("#" + idDiv);
    let htmlInfo = "";
    Url = "xx" + "/_api/web/lists/GetByTitle('" + nameList + "')/items(" + id + ")/File";
    $.ajax({
        url: Url,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            data = data.d;
            var titulo = (data.Title != null || data.Title == "" ? data.Title : data.Name);
            htmlInfo = '<div class="col-12 col-sm-12 col-md-4">'
                + ' <a class="panel panel-default" href="' + data.ServerRelativeUrl + '" target="_blank">'
                + '  <div class="panel-body">'
                + '      <h3>' + titulo + '</h3>'
                + '  </div> '
                + ' </a>'
                + ' </div>'
            divContenedor.append(htmlInfo);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function getCurrentUserInGroup(nameGroup) {
    var userId;
    console.log("algo");
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/CurrentUser",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            console.log("algo 1");
            userId = data.d.Id;
            getCurrentUserGroup(userId, nameGroup);
        },
        error: function (data) {
            failure(data);
        }
    });
}




function newFile(nameList, source, idDivNew, tipo, urlNameList) {
    let urlNewDoc = "";

    switch (tipo) {
        case "Lista":
            urlNewDoc =  "xx" + + "/Lists/" + urlNameList + '/NewForm.aspx' + source;
            break;
        case "Biblioteca":
            urlNewDoc =  "xx"  + "/" + urlNameList + '/Forms/AllItems.aspx' + source;
            break;
        default:
            urlNewDoc = "xx" + "/Lists/" + urlNameList + '/AllItems.aspx' + source;
            break;
    }


    let urlApi = "https://intranet.trabajo.gob.ar/GestionAdministrativa/DGIIT/DDOyST/IySFA" + + "/_api/web/lists/GetByTitle('" + nameList + "')";
    let divNuevo = $("#" + idDivNew);

    let htmlSection = '<div class="text-mutted btnNew" style="display:none"><a class="btn btn-primary btn-sm" style="color: #FFFFFF" href="' + urlNewDoc
        + '" role="button">Nuevo</a></div>' + '</div>';

    divNuevo.before(htmlSection);


    $.ajax({
        url: urlApi,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {

            data = data.d.results;
            $.each(data, function (index, value) {
                getCurrentUserInGroup(nameGroup);

            });
        },
        error: function (data) {
            console.log(data);
        }
    });
}



function getCurrentUserGroup(userId, nameGroup) {
    $.ajax
        ({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetUserById(" + userId + ")/Groups",
            method: "GET",
            headers: { "Accept": "application/json; odata=verbose" },
            success: function (data) {
                console.log(data);
                console.log("USERID: " + userId);

                data = data.d.results;
                $.each(data, function (index, value) {
                    console.log(value.Title);
                    if (value.Title == nameGroup) {
                        $(".btnNew").show();
                    }
                });

            },
            error: function (data) {
                console.log(data);
            }
        });
}



function getCurrentUser(userId) {
    var urlCurrentUser = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetUserById(" + userId + ")";
    console.log(urlCurrentUser);
    $.ajax
        ({
            url: urlCurrentUser,
            method: "GET",
            headers: { "Accept": "application/json; odata=verbose" },
            success: function (data) {
                data = data.d.results;
                console.log(data);


            },
            error: function (data) {
                console.log(data);
            }
        });
}
function getOnlyListSF(nameList, idDiv, source, urlNameList) {
    console.log("nameList: " + nameList);
    let Url = "";
    let divContenedor = $("#" + idDiv);
    var URLItem = "";

    Url =  "xx" + "/_api/web/lists/GetByTitle('" + nameList + "')/items";
    console.log(Url);


    $.ajax({
        url: Url,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            data = data.d.results;
            if (data.length > 0) {
                $.each(data, function (index, value) {
                    console.log(value);
                    URLItem = "https://intranet.trabajo.gob.ar/GestionAdministrativa/DGIIT/DDOyST/IySFA" + "/Lists/" + urlNameList + "/DispForm.aspx?ID=" + value.ID + "&Source=" + source;
                    console.log(URLItem);
                    var htmlInfo =
                        '<div class="col-4">'
                        + ' <a class="panel panel-default" href="' + URLItem + '" target="_self">'
                        + '  <div class="panel-body">'
                        + '      <h3>' + value.Title + '</h3>'
                        + '  </div> '
                        + ' </a>'
                        + ' </div>';
                    divContenedor.append(htmlInfo);
                });

            }
            else {
                divContenedor.append('<span class="text-mutted m-1">No existe información en esta vista.</span>');
            }

        },
        error: function (data) {
            console.log(data);
        }
    });
}


function getUrlListSF(nameList, idDiv, source, urlNameList, itemList) {
    console.log("nameList: " + nameList);
    let Url = "";
    let divContenedor = $("#" + idDiv);
    var URLItem = "";
    Url = "xx" + "/_api/web/lists/GetByTitle('" + nameList + "')/items";
    console.log(Url);
    $.ajax({
        url: Url,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            data = data.d.results;
            if (data.length > 0) {
                $.each(data, function (index, value) {
                    console.log(value);
                    URLItem =  "xx" + "/Lists/" + urlNameList + "/DispForm.aspx?ID=" + value.ID + "&Source=" + source;
                    console.log(data);
                    var htmlInfo =
                        '<div class="col-4">'
                        + '<a class="panel panel-default" href="' + value[itemList] + '" target="_self">'
                        + '<div class="panel-body">'
                        + '<h3>' + value.URL.Description + '</h3>'
                        + '</div> '
                        + '</a>'
                        + '</div>';
                    divContenedor.append(htmlInfo);
                    console.log(itemList);
                });

            }
            else {
                divContenedor.append('<span class="text-mutted m-1">No existe información en esta vista.</span>');
            }

        },
        error: function (data) {
            console.log(data);
        }
    });
}




