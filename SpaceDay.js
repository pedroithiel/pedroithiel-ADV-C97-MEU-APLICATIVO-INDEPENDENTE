userName = localStorage.getItem("name");

document.getElementById("name").innerHTML = "Bem-vindo(a) " + userName + "!";

function Mercurio() {
    elemento("mercurio").innerHTML = "<div> <h5>Mercúrio é um dos quatro planetas telúricos do Sistema Solar e seu corpo é rochoso como a Terra. É o menor planeta do sistema solar, com um raio equatorial de 2 439,7 km. Mercúrio é menor até que os dois maiores satélites naturais do sistema solar, as luas Ganimede e Titã, embora seja mais massivo.</h5></div>"

}

function Venus() {
    elemento("venus").innerHTML = "<div> <h5>Vênus é um dos planetas que compõem o Sistema Solar, sendo o segundo planeta a partir do sol e o de maior proximidade com a Terra. Vênus é um planeta que compõe o sistema solar. Está situado no sistema solar no segundo lugar entre os planetas a partir do sol.</h5></div>"

}

function Terra() {
    elemento("terra").innerHTML = "<div> <h5>A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.</h5></div>"
}

function Marte() {
    elemento("marte").innerHTML = "<div> <h5>Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o 'Planeta Vermelho', porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.</h5></div>"

}

function Jupiter() {
    elemento("jupiter").innerHTML = "<div> <h5>Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno.</h5></div>"

}

function Saturno() {
    elemento("saturno").innerHTML = "<div> <h5></h5>Saturno possui 9 vezes o tamanho do planeta Terra e é formado principalmente por gases. Dispõe de 7 conjuntos de anéis circundantes e 82 luas, como Titã, a maior e mais conhecida. Saturno é o sexto planeta a partir do Sol e é o segundo maior planeta do Sistema Solar, ficando atrás apenas de Júpiter.</div>"

}

function Urano() {
    elemento("urano").innerHTML = "<div> <h5> </h5>Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano.</div>"

}

function Netuno() {
    elemento("netuno").innerHTML = "<div> <h5>Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres.</h5></div>"

}

function Sistema() {
    elemento("sistema solar").innerHTML = "<div> <h5>O Sistema Solar compreende o conjunto constituído pelo Sol e todos os corpos celestes que estão sob seu domínio gravitacional. A estrela central, maior componente do sistema, respondendo por mais de 99,85% da massa total, gera sua energia através da fusão de hidrogênio em hélio, dois de seus principais constituintes</h5></div>"

}

function Universo() {
    elemento("universo").innerHTML = "<div> <h5>Na astronomia, o Universo corresponde ao conjunto de toda a matéria e energia existente. Ele reúne os astros: planetas, cometas, estrelas, galáxias, nebulosas, satélites, dentre outros. É um local imenso e para muitos, infinito. Note que do latim, a palavra universum significa “todo inteiro” ou “tudo em um só”.</h5></div>"

}

function Buraco() {
    elemento("buraco").innerHTML = "<div> <h5>Buraco negro é uma região do espaço-tempo em que o campo gravitacional é tão intenso que nada — nenhuma partícula ou radiação eletromagnética como a luz — pode escapar. A teoria da relatividade geral prevê que uma massa suficientemente compacta pode deformar o espaço-tempo para formar um buraco negro.</h5></div>"

}

function Sol() {
    elemento("sol").innerHTML = "<div> <h5>O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor.</h5></div>"

}


const firebaseConfig = {
    apiKey: "AIzaSyB8O9a1R9OsD-ml8tmznbLQyAHEQcQLH90",
    authDomain: "projeto-space-day.firebaseapp.com",
    databaseURL: "https://projeto-space-day-default-rtdb.firebaseio.com",
    projectId: "projeto-space-day",
    storageBucket: "projeto-space-day.appspot.com",
    messagingSenderId: "298623981624",
    appId: "1:298623981624:web:16532e288bc6de2d792ecd"
};
firebase.initializeApp(firebaseConfig);


function mandar() {
    var bruh = elemento("msg").value;

    firebase.database().ref().push({
        Wena: userName,
        msg: bruh,
    });
    elemento("msg").value = " ";
    
    getdata();

    window.scrollTo(0, document.body.scrollHeight);
}

function getdata() {

    var chatElemento = elemento("chat");
    
    firebase.database().ref("/").on('value', function (snapshot) {

        chatElemento.innerHTML = "";

        snapshot.forEach(function (childSnapshot) {

            childData = childSnapshot.val();

            if (childSnapshot.key != "purpose") {
                chatElemento.innerHTML += childData["Wena"] + ': ' + childData["msg"] + '<br>';
            }
        });
    });

}

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("rooName");
    window.location = "SpaceLogin.html";
}

function elemento(name) {
    return document.getElementById(name);
}

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        mandar();
    }
});