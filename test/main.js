let a  = parseInt(prompt("mời bạn nhập số a"));
let b = parseInt(prompt("mời bạn nhập số b"));

let n  = parseInt(prompt("mời bạn nhập số dongf n"));
function numberOneTriangle(n) {
    for(i = 1;i<=n;++i){
        for(j=1;j<=i;j++){
        document.write("*");
        }
        document.write("<br/>");
        }
}
numberOneTriangle(n);




function sNT(num1, num2) {
    let numstr = "";
    for (let i = num1; i <= num2; i++) {
        if (i == 2 || i == 3) {
            numstr += i + ", ";
        }
        if (i > 3) {
            for (j = 2; j < i; a++) {
                if (i % j != 0) {
                    numstr += i + ", ";
                    break;
                } else {
                    break;
                }
            }
        }
    }
    alert("Số nguyên tố trong khoảng hai số là: " + numstr);
}

if (a < b) {
    sNT(a, b);
} else {
    sNT(b, a);
}