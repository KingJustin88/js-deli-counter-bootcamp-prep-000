// function takeANumber(katzDeli, name) {
//   katzDeli.push(name)

//   return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
// };

takeANumber(line) -> 1 
takeANumber(line) -> 2 
nowServing(line) -> 1 
nowServing(line) -> 2 
takeANumber(line) -> 3

function takeANumber(array)
  var num = []
  for(let i = 1, i += 1  )
  return ` You are number ${array}`
  

function nowServing(deliLine) {
  if (!deliLine.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${deliLine.shift()}.`
};

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  var currentDeliLine = []

  for (let i = 0, deliLine = line.length; i < deliLine; i+=1) {
    currentDeliLine.push(`${i}. ${line[i]}`)
  }

  console.log(`The line is currently: ${currentDeliLine.join(', ')}`)
};
  

