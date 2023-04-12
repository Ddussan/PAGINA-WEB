const form = document.getElementById("form");

const addclient=(name,lastName, mail, select, tele, msn) =>{
    let person ={
        pname: name,
        plastName : lastName,
        pmail: mail,
        ptele:tele,
        
    };
    let text = ` ${person.pname} ${person.plastName} tu información ha sido enviada con éxito `;

    alert(text, "aceptar", person);
}
function modalAlert(cad, tipo, persona){
    //El div es para crear el alert
    const alerta= document.createElement('div');
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");
    alerta.setAttribute("id", "alerta" );
    alerta.setAttribute("class", "alerta" );
    texto.setAttribute("class", "textAlerta");
    //Strong me muestra los datos en la alerta
    texto.innerHTML= `<strong>${cad}</strong>`;
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo==="aceptar"){       
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(persona, "");
            document.getElementById("alerta").remove();          
        }
    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick=function(){

        document.getElementById("alerta").remove();
    }

}