const list = document.getElementById('list')
const load = document.getElementById('load')
const count = document.getElementById('count')
load.addEventListener('click', function () {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count.value}`)
        .then(response => response.json())
        .then(data => {
            list.innerHTML = ""
            data.forEach(task => {
                const li = document.createElement('li')
                if (task.completed) {
                    li.classList.add("done")
                }

                li.textContent = task.title
                list.appendChild(li)
            })
        })
        .catch(error => {
            list.innerHTML = "Erreur de chargement"
        })

})
