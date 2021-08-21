function memoryCall(total) {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = total;
    addAll()
}

document.getElementById('16gb-memory').addEventListener('click', function () {
    memoryCall(180)
})
document.getElementById('8gb-memory').addEventListener('click', function () {
    memoryCall(0)
})
//
function storageCall(total) {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = total;
    addAll()
}
document.getElementById('1tb-ssd').addEventListener('click', function () {
    storageCall(180)
})
document.getElementById('512bg-ssd').addEventListener('click', function () {
    storageCall(100)
})
document.getElementById('256gb-ssd').addEventListener('click', function () {
    storageCall(0)
})
//
function deliveryCall(total) {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = total;
    addAll()
}
document.getElementById('delivery-paid').addEventListener('click', function () {
    deliveryCall(20)
})
document.getElementById('delivery-Free').addEventListener('click', function () {
    deliveryCall(0)
})
const totalCost = document.getElementById('total-cost');
const totalText = parseInt(totalCost.innerText);

const avgTotal = document.getElementById('avg-total');
const avgTotalText = parseInt('avgTotal.innerText')
function addAll() {
    const storageCost = document.getElementById('storage-cost');
    const storagePriceCost = parseInt(storageCost.innerText);
    const deliveryCose = document.getElementById('delivery-cost');
    const deliveryPriceCost = parseInt(deliveryCose.innerText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryPriceCost = parseInt(memoryCost.innerText);
    const totalSum = storagePriceCost + deliveryPriceCost + memoryPriceCost;
    totalCost.innerText = totalText + totalSum;


    avgTotal.innerText = totalText + totalSum;


};


document.getElementById('cpn-apply').addEventListener('click', function () {
    const cpnInput = document.getElementById('cpn-input');
    const cpnInputValue = cpnInput.value;

    if (cpnInputValue == 'stevekaku') {
        const discount = (totalCost.innerText / 100) * 20;

        avgTotal.innerText = totalCost.innerText - discount;

    }
    cpnInput.value = '';
})

