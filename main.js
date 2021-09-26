function run(e) {
    error = 0;
    display = document.getElementById('display');
    inputDiv = document.getElementById('input');
    outputDiv = document.getElementById('output');
    display.innerHTML = '';
    inputDiv.innerHTML = '';
    outputDiv.innerHTML = '';
    size11 = document.getElementById('size11');
    size12 = document.getElementById('size12');
    size21 = document.getElementById('size21');
    size22 = document.getElementById('size22');
    operation = document.getElementById('operation');

    if(e == 1 && (size11.value == '' || size11.value == '' || size11.value == '' || size11.value == '')) {
        return 0;
    }

    if(size11.value == '' || size11.value == '' || size11.value == '' || size11.value == '') {
        warning1 = document.createTextNode("Please fill up all the field to proceed next .......")
        h2 = document.createElement('h2');
        h2.appendChild(warning1);
        document.getElementById('display').appendChild(h2);
        error++;
    }

    if(operation.value == 'empty') {
        warning2 = document.createTextNode("Please select at least one operation to proceed .......")
        h2 = document.createElement('h2');
        h2.appendChild(warning2);
        document.getElementById('display').appendChild(h2);
        error++;
    }

    if(operation.value == "Addition") {
        if(!(size11.value === size21.value && size12.value === size22.value)) {
            warning3 = document.createTextNode("To apply Addition operation between two Matrix size of both Matrix should be equal .......")
            h2 = document.createElement('h2');
            h2.appendChild(warning3);
            document.getElementById('display').appendChild(h2);
            error++;
        }
    }

    if(operation.value == "Subtraction") {
        if(!(size11.value === size21.value && size12.value === size22.value)) {
            warning4 = document.createTextNode("To apply Subtraction operation between two Matrix size of both Matrix should be equal .......")
            h2 = document.createElement('h2');
            h2.appendChild(warning4);
            document.getElementById('display').appendChild(h2);
            error++;
        }
    }

    if(operation.value == "Multiplication") {
        if(!(size12.value === size21.value)) {
            warning5 = document.createTextNode("To apply Multiplication operation between two Matrix number of Columns of First Matrix should be equal to number of Rows of Second Matrix .......")
            h2 = document.createElement('h2');
            h2.appendChild(warning5);
            document.getElementById('display').appendChild(h2);
            error++;
        }
    }

    if(error === 0) {
        takeInput(size11.value, size12.value, size21.value, size22.value, operation.value);
    }
}


function takeInput(s1, s2, s3, s4, op) {
    s1 = parseInt(s1);
    s2 = parseInt(s2);
    s3 = parseInt(s3);
    s4 = parseInt(s4);
    inputDiv = document.getElementById('input');
    inputDiv.innerHTML = '';
    matrixA = document.createTextNode("Matrix A:");
    h2 = document.createElement('h2');
    h2.appendChild(matrixA);
    inputDiv.appendChild(h2);
    table = document.createElement('table');
    table.setAttribute('id', 'input1')
    inputDiv.appendChild(table);
    for(i = 1; i <= s1; i++) {
        row = document.createElement('tr');
        table.appendChild(row);
        for(j = 1; j <= s2; j++) {
            data = document.createElement('td');
            iField = document.createElement('input');
            id = "A";
            id += i;
            id += j;
            iField.setAttribute('id', id);
            data.appendChild(iField);
            row.appendChild(data);
        }
    }
    br = document.createElement('br');
    inputDiv.appendChild(br);
    inputDiv.appendChild(br);
    matrixB = document.createTextNode("Matrix B:");
    h2 = document.createElement('h2');
    h2.appendChild(matrixB);
    inputDiv.appendChild(h2);
    table = document.createElement('table');
    table.setAttribute('id', 'input2')
    inputDiv.appendChild(table);
    for(i = 1; i <= s3; i++) {
        row = document.createElement('tr');
        table.appendChild(row);
        for(j = 1; j <= s4; j++) {     
            data = document.createElement('td');
            iField = document.createElement('input');
            id = "B";
            id += i;
            id += j;
            iField.setAttribute('id', id);
            data.appendChild(iField);
            row.appendChild(data);
        }
    }
    inputDiv.appendChild(br);
    inputDiv.appendChild(br);
    buttonText = document.createTextNode('Get Result');
    button = document.createElement('button');
    button.setAttribute("onclick", "output(" + s1 + "," + s2 + "," + s3 + "," + s4 + ", '" + op + "')");
    button.appendChild(buttonText);
    inputDiv.appendChild(button);
}

function output(s1, s2, s3, s4, op) {
    error = false;
    for (i = 1; i <= s1; i++){
        for(j = 1; j <= s2; j++) {
            id = "A";
            id += i;
            id += j;
            A = document.getElementById(id);
            if (A.value == ''){
                error = true
            }
        }
    }
    for (i = 1; i <= s3; i++){
        for(j = 1; j <= s4; j++) {
            id = "B";
            id += i;
            id += j;
            B = document.getElementById(id);
            if (B.value == ''){
                error = true
            }
        }
    }

    if(error){
        outputDiv = document.getElementById('output');
        err = document.createTextNode("Please fill up all the fields to get your desire result.......");
        h2 = document.createElement('h2');
        h2.appendChild(err);
        h2.setAttribute('style', 'color: red;')
        outputDiv.appendChild(h2);
        return 0;
    }

    s1 = parseInt(s1);
    s2 = parseInt(s2);
    s3 = parseInt(s3);
    s4 = parseInt(s4);
    if(op == "Addition") {
        outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        result = document.createTextNode("Result of Matrix Addition:");
        h2 = document.createElement('h2');
        h2.appendChild(result);
        outputDiv.appendChild(h2);
        table = document.createElement('table');
        table.setAttribute('id', 'output1')
        outputDiv.appendChild(table);
        for(i = 1; i <= s1; i++) {
            row = document.createElement('tr');
            table.appendChild(row);
            for(j = 1; j <= s2; j++) {
                id1 = "A";
                id1 += i;
                id1 += j;
                id2 = "B";
                id2 += i;
                id2 += j;
                A = document.getElementById(id1);
                B = document.getElementById(id2);
                value1 = parseInt(A.value);
                value2 = parseInt(B.value);
                addition = value1 + value2;
                data = document.createElement('td');
                text = document.createTextNode(addition);
                data.appendChild(text);
                row.appendChild(data);
            }
        }
    }

    if(op == "Subtraction") {
        outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        result = document.createTextNode("Result of Matrix Subtraction:");
        h2 = document.createElement('h2');
        h2.appendChild(result);
        outputDiv.appendChild(h2);
        table = document.createElement('table');
        table.setAttribute('id', 'output1')
        outputDiv.appendChild(table);
        for(i = 1; i <= s1; i++) {
            row = document.createElement('tr');
            table.appendChild(row);
            for(j = 1; j <= s2; j++) {
                id1 = "A";
                id1 += i;
                id1 += j;
                id2 = "B";
                id2 += i;
                id2 += j;
                A = document.getElementById(id1);
                B = document.getElementById(id2);
                value1 = parseInt(A.value);
                value2 = parseInt(B.value);
                subtraction = value1 - value2;
                data = document.createElement('td');
                text = document.createTextNode(subtraction);
                data.appendChild(text);
                row.appendChild(data);
            }
        }
    }

    if(op == "Multiplication") {
        outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        result = document.createTextNode("Result of Matrix Multiplication:");
        h2 = document.createElement('h2');
        h2.appendChild(result);
        outputDiv.appendChild(h2);
        table = document.createElement('table');
        table.setAttribute('id', 'output1')
        outputDiv.appendChild(table);
        for(i = 1; i <= s1; i++) {

            row = document.createElement('tr');
            table.appendChild(row);
            
            for(j = 1; j <= s4; j++) {
                total = 0;
                for(k = 1; k <= s2; k++){
                    id1 = "A";
                    id1 += i;
                    id1 += k;
                    id2 = "B";
                    id2 += k;
                    id2 += j;
                    A = document.getElementById(id1);
                    B = document.getElementById(id2);
                    value1 = parseInt(A.value);
                    value2 = parseInt(B.value);
                    total += value1 * value2;
                }
                multiplication = total;
                data = document.createElement('td');
                text = document.createTextNode(multiplication);
                data.appendChild(text);
                row.appendChild(data);
            }
        }
    }
}