            function ejemploVariables() {
    var varFunc = "Soy var dentro de función";
    let letFunc = "Soy let dentro de función";
    const constFunc = "Soy const dentro de función";

    console.log(varFunc);
    console.log(letFunc);
    console.log(constFunc);

    if (true) {
        var varIf = "Soy var dentro de if";
        let letIf = "Soy let dentro de if";
        const constIf = "Soy const dentro de if";

        console.log(varIf);
        console.log(letIf);
        console.log(constIf);
    }

    console.log(varIf);
    console.log(letIf);
    console.log(constIf);
    // Let y const NO se pueden usar fuera del bloque donde se declararon
    // console.log(letIf);   // Error
    // console.log(constIf); // Error
}

ejemploVariables();