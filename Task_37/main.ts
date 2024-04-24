// Large Shirts:

function make_shirt(size: string = "large", text:string = "I love typeScript"): void {
    console.log(`"The size of the shirt is ${size}, and it says ${text}"`)
}

make_shirt();
make_shirt("medium");
make_shirt("small", "Hello World");


