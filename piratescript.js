
function piratize(input){

    const words = input.split (' '); 
    const translatedwords = []
    for (let element of words) {
        console.log(element);
        if(element==="pounds"){
            translatedwords.push("doubloons")
        }
        else if(Number(element)){
            translatedwords.push(element);
        }
        else{
            let ArrWord = '';
            let Phrase = element.substring(1);
            ArrWord = Phrase + element[0] + "arr"
            translatedwords.push(ArrWord);
        }
    }
    let PirateCode = ' ';
    PirateCode = translatedwords.join(' ');
    return PirateCode; 

    
} 