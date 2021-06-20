function numbersOfWords(text){
    text = text.replace (/\r?\n/g," "); //// REEMPLAZO DE SALTO DE LINEA
    text = text.replace (/[ ]+/g," "); //// REEMPLAZO DE ESPACIOS SEGUIDOS
    text = text.replace (/^ /,""); //// REEMPLAZO DE ESPACIOS AL INICIO
	text = text.replace (/ $/,""); //// REEMPLAZO DE ESPACIOS AL FINAL
    fSplit = text.split(' ');
    numWords = fSplit.length;
    console.log(numWords)
}
numbersOfWords(' Loren  ipsum dolor sit amen ')

function isPalindrome(text){
    let convert = text.toLowerCase().match(/[a-z]/gi).reverse();
    let result = convert.join('') === convert.reverse().join('');

    if(result === true){
        console.log('Yes it is palindrome')
    }else {
        console.log('No it\’s not palindrome')
    }
}
isPalindrome('Atar a la rata');