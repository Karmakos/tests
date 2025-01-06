const _first = new WeakMap();
const _second = new WeakMap();
const _limit = new WeakMap();


class SumMultiples{
    constructor(firstNumber, secondNumber, limit){
        _first.set(this, firstNumber);
        _second.set(this, secondNumber);
        _limit.set(this, limit);
    }
    set newEntries({updatedFirstNumber, updatedSecondNumber, updatedLimit}){
        _first.set(this, updatedFirstNumber);
        _second.set(this, updatedSecondNumber);
        _limit.set(this, updatedLimit);
    }
    get entries(){

        return {firstNumber: _first.get(this), secondNumber: _second.get(this), limit: _limit.get(this)}
    }
    get sum(){
        const firstNumber = _first.get(this);
        const secondNumber = _second.get(this);
        const limit = _limit.get(this);


        let sum = 0
        if(firstNumber <= 0 || secondNumber <= 0) throw new Error('first and second Numbers cannot be zero')

        for(let i = 1; i <= limit; i++){
            if(i % firstNumber === 0 || i % secondNumber === 0)
                sum += i;

        }
        return sum;
    }

}
const summation = new sumMultiples(3, 5, 50)
