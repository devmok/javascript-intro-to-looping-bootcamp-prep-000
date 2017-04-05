function makeArray()
{
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < t; i++)
  {
    array.push("I am a strange loop.")
  }

  return [array,t]
}

const [array,t] = makeArray()

function forLoop(X)
{
    for (let i = 0; i < 25; i++)
     {
    let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
    X.push (s)
  }
  return X
}

function whileLoop(n)
{
  while(n>0)
  {
    console.log(n--)
  }
 if(n==0)
 {
   n='done'
 }
 return n
}

whileLoop(5)

function maybeTrue()
{
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
function doWhileLoop(Y)
{
  do {
    Y.shift()
    return Y
  } while (Y.length > 0 && maybeTrue());

}

doWhileLoop(array)
