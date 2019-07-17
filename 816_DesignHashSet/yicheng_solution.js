/**
 * Initialize your data structure here.
 */
class MyHashSet{
  constructor(){
    this.list = [];
  }

  add(value){
    if (!this.contains(value)){
      this.list.push(value);
    }
  }
  remove(value){
    if (this.contains(value)){
      var newList = this.list.filter(item => {
        if (item == value){
          return false;
        }
        else{
          return true;
        }
      })
      this.list = newList;
    }
  }
  contains(value){

    return this.list.indexOf(value) != -1;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

module.exports = MyHashSet;
