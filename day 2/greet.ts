const greet = (name: string) => {
    if (!name) {
        return console.log("Please provide a name");
    }
    return console.log("Hello "+name);
}

module.exports