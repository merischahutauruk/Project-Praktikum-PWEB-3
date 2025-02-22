document.getElementById('addTask').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        let li = document.createElement('li');
        li.textContent = taskText;
        
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.onclick = function() {
            let newText = prompt('Edit tugas:', taskText);
            if (newText) li.firstChild.textContent = newText;
        };
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            if (confirm('Yakin ingin menghapus?')) {
                li.remove();
            }
        };
        
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        
        taskInput.value = '';
    }
});
