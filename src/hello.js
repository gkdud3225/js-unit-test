var Hello = {
    message: 'Hello world',
    greeting() {
      return this.message;
    }
};

var inputStr = {
    str: prompt('enter the word'),
    returnStr() {
        return this.str;
    }
};