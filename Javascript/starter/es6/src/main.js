//AULA 1
// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class ToDoList extends List{
//     constructor() {
//         super();
//         this.user = 'Caio';
//     }

//     showUser() {
//         console.log(this.user);
//     }
// }

// const MinhaLista = new ToDoList();
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo Todo');
//     MinhaLista.showUser();
// }


//  AULA 2
// const arr = [1,3,4,5,8,9];

// const newArr = arr.map(function(item,index){
//     return item + index;
// })

// console.log(newArr);

// const sum = arr.reduce(function(total,next){
//     return total + next;
// })

// console.log(sum);

// const filter = arr.filter(function(item){

// })

// AULA 3
// const arr = [1,3,4,5,8,9];
// const newArr = arr.map(item => item * 2);

// console.log(newArr);

// const teste = () => ({nome:'Diego'});
// console.log(teste());

// function soma(a = 0,b = 0) {
//     return a+b;
// }

// console.log(soma(1));

// const somaa = (a = 0,b = 0) => a+b;

// console.log(somaa(1));


// AULA 4

// const usuario = {
//     nome: 'Caio',
//     idade:23,
//     endereco: {
//         cidade: 'Manaus',
//         estado: 'AM'
//     }
// };

// console.log(usuario);

// const {nome, idade, endereco: {cidade}} = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// function mostraInfo({nome,idade}) {
//     console.log(idade,nome);
// }

// mostraInfo(usuario);

// AULA 5


// REST
// const usuario = {
//     nome: 'Caio',
//     idade:23,
//     endereco: {
//         cidade: 'Manaus',
//         estado: 'AM'
//     }
// };

// const {nome, ...resto} = usuario;
// console.log(nome);
// console.log(resto);


// const arr = [1,2,3,4];

// const [a,b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function soma(...params) {
//     return params.reduce((total,next) => total+next);
// }

// // SPREAD

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [...arr1,...arr2];

// console.log(arr3);

// const usuario2 = {...usuario, nome: 'Leticia'};
// console.log(usuario2);

// Template Literals
// const nome = "diego";
// const idade = 23;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos!`)

// //Object Short Sintax
// const user = {
//     nome,
//     idade,
//     empresa: 'Transire'
// }

// const minhaPromise = () => new Promise((resolve,reject) => {
//     setTimeout(() => { resolve('OK') },2000);
// });

// // minhaPromise()
// //     .then(response => {
// //         console.log(response);
// // });

// async function executePromise() {
//     const response = await minhaPromise()
//     console.log(response);
// }

// executePromise();

import api from './api';

class App {

    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepo(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Loading...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepo(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length == 0) {
            return;
        }
        this.setLoading();

        try {
            const response = await api.get(`repos/${repoInput}`)

            const {
                name, 
                description,
                html_url,
                avatar_url
            } = response.data;
        
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        } catch(err) {
            alert('Repositório não existe');
        }

        this.setLoading(false);

    }

    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));
            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));
            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
    
}


new App();