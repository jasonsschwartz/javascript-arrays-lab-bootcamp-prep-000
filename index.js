// Add your functions and code here
//var kittens = ["Milo", "Otis", "Garfield"]
var newArray = new Array

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  newArray = [...kittens, name]
  return newArray
}

function prependKitten(name){
  newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten(){
  newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

function removeFirstKitten(){
  newArray = kittens.slice(1)
  return newArray
}