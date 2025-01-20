// Node class
class Node {
    constructor(key, value=null, nextNode=null) {
        if (!key) throw 'ERROR: Cannot initiate node with no Key';
        
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default Node