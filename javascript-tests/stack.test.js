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
        const items = _items.get(this)
        if(items.length > 0 )
            return items.pop()
        throw new Error("Stack is Empty");
        
    }
    peek(){
        const items = _items.get(this);
        if(items.length - 1 > 0)
            return items[items.length - 1];
        throw new Error ("Stack is Empty")

    }
    get count(){
        return _items.get(this).length;
    }
    
}

const stack = new Stack();
