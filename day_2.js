c3 = 0
c5 = 0
for(i=1; i<=100; i++){
  s = ""
  c3++
  c5++
  if(c3==3){
    s = s + "Fizz"
    c3 = 0
  }
  if(c5==5){
    s = s + "Buzz"
    c5 = 0
  }
  if(s==""){
    console.log(i)
  }
  else{
    console.log(s)
  }
}

// second assignment

s = "madam is walking with her dad and mom"
s = s+ " "
word = ""
for(k of s){
  if(k != " "){
    word = word + k
  }
  else{
    rev = word.split("").reverse().join("")
    if(rev == word){
      console.log(word)
    }
    word = ""
  }
}
