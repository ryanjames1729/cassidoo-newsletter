// User defined class node
class Node {
	// constructor
	constructor(element)
	{
		this.element = element;
		this.next = null
        this.random = null
	}
}

// linkedlist class
class LinkedList {
	constructor()
	{
		this.head = null;
		this.size = 0;
	}

	// add(element)
    add(element) {
        const node = new Node(element);
        let current = null;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    getElement(index) {
        let current = this.head;
        let count = 0;

        while (current != null) {
            if (count === index) {
                return current;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    // randomize pointers
    randomize() {
        let arr = [];
        for(let i = 0; i < this.size; i++) {
            arr.push(i);
        }

        let current = this.head;

        for(let i = 0; i < this.size; i++) {
            let randomIndex = Math.floor(Math.random() * arr.length);
            let randomNode = this.getElement(arr[randomIndex]);
            arr.splice(randomIndex, 1);
            current.random = randomNode;
            current = current.next;
        }
    }
	// PrintList
    printList() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.element + ' ';
            current = current.next;
        }
        console.log(str);
    }

    stringReturn() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.element + ' '
            current = current.next;
        }
        return str;
    }

    randomCopy() {
        let current = this.head;
        let copy = [];
        while (current) {
            copy.push(current.random.element);
            current = current.next;
        }
        return copy;
    }
}

// implementation of the class
const lList = new LinkedList();
lList.printList();
for (let i = 1; i <= 5; i++) {
    lList.add(i);
}
lList.printList();
lList.randomize();
const deepCopy = lList.randomCopy();

document.getElementById("input").innerHTML += lList.stringReturn();


console.log(deepCopy);

document.getElementById("output").innerHTML += JSON.stringify(deepCopy, 2, null);
