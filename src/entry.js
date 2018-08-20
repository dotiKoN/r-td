const obj = {
    list: [
        {name: 'name - 1'},
        {name: 'name - 2'},
        {name: 'name - 3'},
    ],
    multiply: function() {
        return this.list;
    }
};


function add(obj) {
    const c = obj.list.slice();

    c.push({
        name: 'test'
    })

    return c;
}

const newlist = add(obj);

console.log(newlist, obj.list)

