// 1. push/pop - Add/remove from end
function arrayBasics() {
    let arr = [1, 2, 3];
    arr.push(4);     
    arr.pop();        
    return arr;
    
}

// 2. shift/unshift - Add/remove from beginning
function arrayShiftUnshift() {
    let arr = [2, 3, 4];
    arr.unshift(1);   
    arr.shift();      
    return arr;
}

// 3. forEach - Iterate
function arrayForEach() {
    let arr = [1, 2, 3];
    arr.forEach(item => console.log(item * 2));
}

// 4. map - Transform array
function arrayMap() {
    let arr = [1, 2, 3];
    return arr.map(num => num * 2); 
}