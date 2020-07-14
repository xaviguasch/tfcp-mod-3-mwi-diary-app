const entryForm = document.querySelector('#entryForm')
const entriesSection = document.querySelector('#entries')
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav')

let count = 1

entryForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const entryDiv = document.createElement('div')

  entryDiv.className = 'singe-entry'
  entryDiv.innerText = entryTextbox.value
  entryDiv.style.display = 'none'

  entriesSection.append(entryDiv)

  entryTextbox.value = ''

  const displayEntryButton = document.createElement('button')
  displayEntryButton.className = 'display-entry-button'
  displayEntryButton.innerText = count
  entriesNav.append(displayEntryButton)

  displayEntryButton.addEventListener('click', () => {
    entryDiv.style.display = 'block'
  })

  count++
})
