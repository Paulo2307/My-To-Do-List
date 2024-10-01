const button = document.querySelector(".button-and-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-tasks")


let minhaListaDeItens = []



function adicionarTarefa(){
        const valor = input.value.trim(); // Remove espaços em branco no início e fim

        // Verifica se o valor do input está vazio
        if (valor === "") {
            alert("Por favor, insira uma tarefa antes de adicionar!");
            return;
        }

        minhaListaDeItens.push({
            tarefa: valor,
            concluida: false 
        })

        if(input.value === "") {
            
            return;
        }

        input.value = ''

        mostrarTarefas()
}

function mostrarTarefas(){

    let novali = ''

    minhaListaDeItens.forEach( (item, index) => {

        novali = novali + `

    <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${index})">
    </li>

         `
    })

    listaCompleta.innerHTML = novali

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens)) 

}

function deletarItem(index){
    minhaListaDeItens.splice(index, 1)
    
    mostrarTarefas()
}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem('lista')

    if(tarefasLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarTarefa)