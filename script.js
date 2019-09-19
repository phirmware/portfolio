function toString(n) {
    if (n == 0) {
        return '0';
    }
    var strN = n.toString();
    if (strN.endsWith('1')) {
        console.log(strN + 'st');
    } else if (strN.endsWith('2') && Number(strN) <= 2) {
        console.log(strN + 'nd');
    }
    else if (strN.endsWith('3')) {
        console.log(strN + 'rd');
    } else {
        console.log(strN + 'th');
    }
}

toString(112);