// Write a function that checks if a given string is a palindrome.
const _text = new WeakMap();


class Palindrome{
    constructor(text){
        _text.set(this, text);

    }

    set checkText(value){
        _text.set(this, value);       
    }
    get checkText(){
       return _text.get(this);
    }

    get isPalindrome(){
        const text = _text.get(this)
        const letters = text.toLowerCase();
        const reversed = [...letters].reverse().join('');
        return (letters === reversed)
        ? (`${text} is a palindrome!`)
        : (`${text} is not a palindrome!`);
        
    }
        
}

const palindrome = new Palindrome('EVE');