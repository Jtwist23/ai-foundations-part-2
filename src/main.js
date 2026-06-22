import './style.css'

const STORAGE_KEY = 'ai-foundations-lab-notes'
const form = document.querySelector('#lab-notes-form')
const statusMessage = document.querySelector('#form-status')
const loadButton = document.querySelector('#load-notes')
const clearButton = document.querySelector('#clear-notes')
const analogClock = document.querySelector('#analog-clock')
const clockTime = document.querySelector('#clock-time')
const hourHand = document.querySelector('#hour-hand')
const minuteHand = document.querySelector('#minute-hand')
const secondHand = document.querySelector('#second-hand')

const fieldNames = [
  'title',
  'date',
  'goal',
  'tools',
  'observations',
  'results',
  'nextSteps',
]

function updateClock() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  const readableTime = now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  })

  hourHand.style.setProperty('--rotation', `${(hours % 12) * 30 + minutes * 0.5}deg`)
  minuteHand.style.setProperty('--rotation', `${minutes * 6 + seconds * 0.1}deg`)
  secondHand.style.setProperty('--rotation', `${seconds * 6}deg`)
  clockTime.textContent = readableTime
  clockTime.dateTime = now.toISOString()
  analogClock.setAttribute('aria-label', `Current local time: ${readableTime}`)
}

function showStatus(message) {
  statusMessage.textContent = message
}

function getFormData() {
  return Object.fromEntries(
    fieldNames.map((fieldName) => [fieldName, form.elements[fieldName].value]),
  )
}

function fillForm(notes) {
  fieldNames.forEach((fieldName) => {
    form.elements[fieldName].value = notes[fieldName] ?? ''
  })
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormData()))
  showStatus('Notes saved in this browser.')
}

function loadNotes() {
  const savedNotes = localStorage.getItem(STORAGE_KEY)

  if (!savedNotes) {
    showStatus('No saved notes were found.')
    return
  }

  try {
    fillForm(JSON.parse(savedNotes))
    showStatus('Saved notes loaded.')
  } catch {
    showStatus('The saved notes could not be read. Clear them and try again.')
  }
}

function clearNotes() {
  localStorage.removeItem(STORAGE_KEY)
  form.reset()
  showStatus('Form and saved notes cleared.')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  saveNotes()
})

loadButton.addEventListener('click', loadNotes)
clearButton.addEventListener('click', clearNotes)

updateClock()
setInterval(updateClock, 1000)
