const entryForm = document.getElementById('entryForm')
const entriesSection = document.getElementById('entries')
const entryTextbox = document.querySelector('.entry-textbox')

entryForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const entryDiv = document.createElement('div')
  entryDiv.className = 'singe-entry'
  entryDiv.innerText = entryTextbox.value

  entriesSection.append(entryDiv)
})
