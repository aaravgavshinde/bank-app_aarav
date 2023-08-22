let totalMoney = 0.00;
let depositeMoney = 0.00;
let withdrawMoney = 0.00;

function deposite() {
    let a = parseFloat(document.getElementById("depositeAmt").value);
    totalMoney = totalMoney + a;

    let b = document.getElementById("outputAmt");
    let c = document.createElement("div");
    c.innerHTML = `<div id="outputAmt" class="rupee1"> ${totalMoney} </div>`;
    b.replaceWith(c);
}

let save = 0.00;

function withdraw() {
    let d = parseFloat(document.getElementById("withdrawAmt").value);
    save = totalMoney;
    totalMoney = totalMoney - d;

    if (save >= d) {
        let e = document.getElementById("outputAmt");
        let f = document.createElement("div");
        f.innerHTML = `<div id="outputAmt" class="rupee1"> ${totalMoney} </div>`;
        e.replaceWith(f);
    }
    else {
        totalMoney = save;
        let e = document.getElementById("outputAmt");
        let f = document.createElement("div");
        f.innerHTML = `<div class="error"> Not Enough Balance! </div>`;
        e.append(f);
    }
}
