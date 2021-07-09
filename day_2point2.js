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