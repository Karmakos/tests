const _items = new WeakMap();

class Stack{
    constructor(radius){
        this.radius = radius,
        _items.set(this, [])
    }

    push(item){
       _items.get(this).push(item)
    }
    pop(){
       _items.get(this).pop()
    }
    
}

const stack = new Stack();
stack.push()