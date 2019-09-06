const list = ['a','a','b','c','a','b']

removeDuplicates = (list) =>{

    return list.reduce((a,b)=>a.some(c=>b===c) ? a : [...a,b],[])
}


console.log(removeDuplicates(list))