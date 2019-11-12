let promise = new Promise((resolve, reject) => {
    let answer = prompt("Ko je najjaci ?", "Coda il Daco");

    if(answer === "Coda"){
        resolve("Bravo!");
    }
    else reject("Nije tacno");
});

promise.finally( () => {
    alert("Dobro si i reko");
});