
class Palindrome{
    constructor(text){
        this.text = text;
        Object.defineProperty(this, 'text', {
            set: function(value){
                text = value;
            }
        })
    }

    get isPalindrome(){
        const letters = this.text.split("");
        const reversed = letters.reverse();
        try {
            if(letters === reversed)
                return(`${text} + is a palindrome!`);
            return(`${text} + is not a palindrome!`);
        } catch (error) {
            return(error);          
            
        }
    }
        
}

const palindrome = new Palindrome('EVE');