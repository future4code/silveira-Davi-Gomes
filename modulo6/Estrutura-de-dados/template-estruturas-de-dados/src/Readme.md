# 1)

export class LinkedList {
  constructor(public start?: LinkedListNode) {}
  public appendToTail(value: number) {
    if (!this.start) {
      this.start = new LinkedListNode(value)
    } else {
      let node: LinkedListNode = this.start;
      while (node && node.getNext() !== undefined) {
        node = node.getNext()!
      }
      node.setNext(new LinkedListNode(value))
    }
  }
  public print(): void {
    let node: LinkedListNode | undefined = this.start;
    let i = 1
    while (node !== undefined) {
      console.log(`Elemento ${i}:`, node!.getData())
      node = node!.getNext()
      i++
    }
  }
}

# 2) 

class Stack {
   constructor(
      public frames: LinkedList = new LinkedList()
   ) { }
   public isEmpty = (): boolean => this.frames.start === null
   public push = (
      value: any
   ): void => {
      this.frames.addToTail(value)
   }
   public pop = (): any => {
      if(!this.isEmpty()) return null
      let previousNode: ListNode | null = null
      let currentNode: ListNode | null = this.frames.start
      while(currentNode!.next){
         previousNode = currentNode
         currentNode = currentNode!.next 
      }
      previousNode!.next = null
      return currentNode
   }
}

# 3)
class Queue {
   constructor(
      public items: any[] = []
   ) { }
   public isEmpty = (): boolean => this.items.length === 0
   public enqueue = (
      value: any
   ): void => {
      const index = this.items.length
      this.items[index] = value
   }
   public dequeue = (): ListNode | null => {
      const removedItem = this.items[0]
      for (let i = 0; i < this.items.length; i++) {
         this.items[i] = this.items[i + 1]
      }
      this.items.length--
      return removedItem
   }
}