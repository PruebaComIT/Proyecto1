// Comentario agregado
// Otro comentario

var persona1={nombre:"Mauro", numero:1}
var persona2={nombre:"Gerardo", numero:2}
var persona3={numero:3}
var persona4={nombre:"Silvia", numero:4}
var arrayusuarios=[persona1, persona2, persona3, persona4];


for (var i = 0; i<=arrayusuarios.length-1; i++) {

	if(arrayusuarios[i] != undefined)
	{	

		if (typeof arrayusuarios[i].nombre == "string")
		{
			agregarboton(arrayusuarios[i].nombre, arrayusuarios[i].numero)
		}
		else
		{
			console.log("datos incorrectos en el nombre de la  posicion "+i);
		}

	}
	else{console.log ("La posicion "+i+ "no contiene elementos")}

}

function agregarboton(nombre, id){

	let texto = document.createTextNode(nombre);

	let boton = document.createElement("button");
	boton.appendChild(texto);

    boton.addEventListener("click", function(){verPostsUsuario(id)});

	document.getElementById("div1").appendChild(boton);

}


function verPostsUsuario(idUsuario) {

    var divContenedor = document.getElementById("divPosts");

    var listaPosts = consultarPostsUsuario(idUsuario);

    for (var i = 0; i < listaPosts.length; i++) {

        // Crear div para el post
        var divPost = document.createElement("div");
        divPost.appendChild(document.createTextNode(listaPosts[i].titulo));

        divContenedor.appendChild(divPost);
    }

}





function consultarPostsUsuario(idUsuario) {

    var respuesta = [];

    switch (idUsuario) {

        case 1:
            respuesta.push({
                id: 1,
                idUsuario: 1,
                titulo: "Review de 1984 (George Orwell)",
                contenido: "Léanlo, maravilloso."
            });
            break;

        case 2:
        case 3: break;

        case 4:
            respuesta.push({
                id: 2,
                idUsuario: 4,
                titulo: '¿Qué es el teléfono de línea"?',
                contenido: "Nunca tuve, ¿alguien sabe?"
            });
            respuesta.push({
                id: 2,
                idUsuario: 4,
                titulo: "Página de memes",
                contenido: "Entren a www.memegato.com"
            });
            respuesta.push({
                id: 2,
                idUsuario: 4,
                titulo: "Probando 123",
                contenido: "Haciendo un post de prueba de caracteres especiales: %$#%/#%$#!!!)=="
            });
            break;

    }

    console.log(respuesta);

    return respuesta;

}