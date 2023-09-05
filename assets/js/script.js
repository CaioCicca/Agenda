class User {
    constructor(nome, fixo, fone, foto, data, email, cep, cidade, insta, github, signo, idade, id) {
        this.nome = nome;
        this.fixo = fixo;
        this.fone = fone;
        this.foto = foto;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.github = github;
        this.signo = this.getZodiacSign();
        this.idade = this.getAge()
        this.id = this.randomId()
    }

    getZodiacSign() {
        let birthdate = new Date(this.data);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    getAge() {
        const today = new Date();
        const birthDate = new Date(this.data);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    randomId() {
        return Math.floor(Math.random() * 9998) + 1;
    }
}

class Users {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        if (campos()) {
            errorMsg("Preencha todos os campos")
        }
        else if (!verificarFoto(user.foto)) {
            errorMsg("Coloque um url valido")
        }
        else {
            msg("Cadastrado com sucesso")
            this.users.push(user);
            limpa()
            exibir()
        }
    }

    getUserbyId(id) {
        return this.users.find((user) => user.id === id)
    }

    updateUser(nome, fixo, fone, foto, data, email, cep, cidade, insta, github) {
        const user = this.getUserId(aux);
        user.nome = nome;
        user.fixo = fixo;
        user.fone = fone;
        user.foto = foto;
        user.data = data;
        user.email = email;
        user.cep = cep;
        user.cidade = cidade;
        user.insta = insta;
        user.github = github
    }

    deleteUser(id) {
        this.users = this.users.filter((user) => user.id == id);
    }
}

const userList = new Users()
let aux = -1;

function createUser() {
    let nome = document.getElementById('nome').value;
    let fixo = document.getElementById('fixo').value;
    let fone = document.getElementById('fone').value;
    let foto = document.getElementById('foto').value;
    let data = document.getElementById('data').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let insta = document.getElementById('insta').value;
    let github = document.getElementById('github').value;

    const user = new User(nome, fixo, fone, foto, data, email, cep, cidade, insta, github)

    userList.addUser(user);
}

function verificarFoto(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function campos() {
    let nome = document.getElementById('nome').value;
    let fixo = document.getElementById('fixo').value;
    let fone = document.getElementById('fone').value;
    let foto = document.getElementById('foto').value;
    let data = document.getElementById('data').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let insta = document.getElementById('insta').value;
    let github = document.getElementById('github').value;

    console.log(nome)
    console.log(fixo)
    console.log(fone)
    console.log(foto)
    console.log(data)
    console.log(email)
    console.log(cep)
    console.log(cidade)
    console.log(insta)
    console.log(github)

    if (fixo == '' || nome == '' || fone == '' || foto == '' || data == '' || email == '' || cep == '' || cidade == '' || insta == '' || github == '') {
        return true;
    } else {
        return false;
    }
}

function limpa() {
    document.getElementById('nome').value = '';
    document.getElementById('fixo').value = '';
    document.getElementById('fone').value = '';
    document.getElementById('foto').value = '';
    document.getElementById('data').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('insta').value = '';
    document.getElementById('github').value = '';
}

function formatedfixo(telefone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = telefone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + "-"
        + cellphoneArray[6] + cellphoneArray[7]
        + cellphoneArray[8] + cellphoneArray[9];
    return cellphoneFormated;
}

function formatedCellphone(telefone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = telefone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function formatedCep(cep) {

    let cepArray = cep.split("");
    let cepFormated = cepArray[0] + cepArray[1]
        + cepArray[2] + cepArray[3] + cepArray[4]
        + "-" + cepArray[5] + cepArray[6]
        + cepArray[7];
    return cepFormated;
}

function errorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function msg(msg) {
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("msg").classList.add("hidden");
    }, 4000);
}

function exibir() {
    document.getElementById("userslista").classList.remove("hidden");
    let msg = '';

    userList.users.forEach(user => {
        msg += `<div onclick="more(${user.id})" id="box">
            <div>
                <img src="${user.foto}" alt="foto de ${user.nome}"/>
            </div>
            <div>
                <h3>${user.nome}</h3>
                <p>Telefone Fixo: ${formatedfixo(user.fixo)}</p>
                <p>Telefone Celular: ${formatedCellphone(user.fone)}</p>
            </div>
        </div>
        `
        document.getElementById('userslista').innerHTML = msg
    });
}

function editar(id) {
    const user = userList.getUserbyId(id);
    document.getElementById('nome').value = user.nome;
    document.getElementById('fixo').value = user.fixo;
    document.getElementById('fone').value = user.fone;
    document.getElementById('foto').value = user.foto;
    document.getElementById('data').value = user.data;
    document.getElementById('email').value = user.email;
    document.getElementById('cep').value = user.cep;
    document.getElementById('cidade').value = user.cidade;
    document.getElementById('insta').value = user.insta;
    document.getElementById('github').value = user.github;
    document.getElementById('nome').focus();
    document.getElementById("addbutton").classList.add("hidden");
    document.getElementById("editbutton").classList.remove("hidden");
    aux = id;
}

function atualizarUser() {
    const nome = document.getElementById('nome').value;
    const fixo = document.getElementById('fixo').value;
    const fone = document.getElementById('fone').value;
    const foto = document.getElementById('foto').value;
    const data = document.getElementById('data').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const insta = document.getElementById('insta').value;
    const github = document.getElementById('github').value;
    userList.updateUser(nome, fixo, fone, foto, data, email, cep, cidade, insta, github)
    document.getElementById("addbutton").classList.remove("hidden");
    document.getElementById("editbutton").classList.add("hidden");
    aux = -1;
    createUser()
    exibir()
    limpa()
    more()
}

function excluir(id) {
    userList.deleteUser(id)
    document.getElementById("main").classList.remove("principal");
    document.getElementById("mais").classList.add("hidden");
    exibir()
    more()
}

function more(id) {
    document.getElementById("mais").classList.remove("hidden");
    document.getElementById('mais').innerHTML = ''
    document.getElementById("main").classList.add("principal");
    const more = userList.getUserbyId(id)
    let msg = `<div id="box">
                <h3>Detalhes</h3>
                <img src="${more.foto}" alt="foto de ${more.nome}">
                <p><strong>${more.nome}</strong></p>
                <p><strong>identificador: ${more.id}</strong></p>
                <p>Celular: ${formatedCellphone(more.fone)}</p>
                <p>Telefone: ${formatedfixo(more.fixo)}</p>
                <p>Data de nascimento: ${more.data}</p>
                <p>Idade: ${more.idade}</p>
                <p>Signo: ${more.signo}</p>
                <p><Email: ${more.email}/p>
                <p>CEP: ${formatedCep(more.cep)}</p>
                <p>Cidade: ${more.cidade}</p>
                <p>Instagram: ${more.insta}</p>
                <p>GitHub: ${more.github}</p>
                <div>
                    <a href="https://wa.me/${more.fone}" target="_parent"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/${more.insta}/" target="_parent"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/${more.github}" target="_parent"><i class="fa-brands fa-github"></i></a>
                </div>
                <div>
                    <button onclick="editar(${more.id})"><i class="fa-solid fa-pen"></i></button>
                    <button onclick="excluir(${more.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`

    document.getElementById('mais').innerHTML = msg;
}
/*
        msg += `
            <div>
                <h3>Detalhes</h3>
                <img src="${user.foto}" alt="foto de ${user.nome}">
                <p><strong>${user.nome}</strong></p>
                <p><strong>identificador: ${user.id}</strong></p>
                <p>Celular: ${formatedCellphone(user.fone)}</p>
                <p>Telefone: ${formatedfixo(user.fixo)}</p>
                <p>Data de nascimento: ${user.data}</p>
                <p>Idade: ${user.idade}</p>
                <p>Signo: ${user.signo}</p>
                <p><Email: ${user.email}/p>
                <p>CEP: ${formatedCep(user.cep)}</p>
                <p>Cidade: ${user.cidade}</p>
                <p>Instagram: ${user.insta}</p>
                <p>GitHub: ${user.github}</p>
                <div>
                    <a href="https://wa.me/${user.fone}" target="_parent"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/${user.insta}/" target="_parent"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/${user.github}" target="_parent"><i class="fa-brands fa-github"></i></a>
                </div>
                <div>
                    <button onclick="editar(${user.id})"><i class="fa-solid fa-pen"></i></button>
                    <button onclick="excluir(${user.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `
        document.getElementById('mais').innerHTML = msg
        */