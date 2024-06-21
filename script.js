let queue = [];

// renderizar el queue en la página web
function renderQueue() 
{
    const queueDiv = document.getElementById('queue-div');
    queueDiv.innerHTML = '';
    for (const element of queue) 
    {
        const item = document.createElement('div');
        item.className = 'queue-item';
        item.textContent = element;
        queueDiv.appendChild(item);
    }
}

function insertar() 
{
    const pos = queue.length - 1;
    const valor = queue[pos] + 1 || 1;
    queue.push(valor);
    renderQueue();
}

function remover() 
{
    if (queue.length > 0) 
    {
        const dequeuedValue = queue.shift();
        renderQueue();
        document.getElementById('mensaje').textContent = `Valor removido: ${dequeuedValue}`;
    } 
    else 
    {
        alert('El queue está vacío');
    }
}

function leer() 
{
    if (queue.length > 0) 
    {
        const frontValue = queue[0];
        document.getElementById('mensaje').textContent = `El primer valor es: ${frontValue}`;
    } 
    else 
    {
        alert('El queue está vacío');
    }
}

// inicializar el queue
renderQueue();