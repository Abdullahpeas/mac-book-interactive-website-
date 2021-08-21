function memoryValue(total) {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = total;
    totalUpdate()
}

document.getElementById('16gb-memory').addEventListener('click', function () {
    memoryValue(180)
})
document.getElementById('8gb-memory').addEventListener('click', function () {
    memoryValue(0)
})
/* storage */
function storageValue(total) {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = total;
    totalUpdate()
}
document.getElementById('1tb-ssd').addEventListener('click', function () {
    storageValue(180)
})
document.getElementById('512gb-ssd').addEventListener('click', function () {
    storageValue(100)
})
document.getElementById('256gb-ssd').addEventListener('click', function () {
    storageValue(0)
})
/* delivery */
function deliveryValue(total) {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = total;
    totalUpdate()
}
document.getElementById('delivery-paid').addEventListener('click', function () {
    deliveryValue(20)
})
document.getElementById('delivery-Free').addEventListener('click', function () {
    deliveryValue(0)
})
const totalCost = document.getElementById('total-cost');
const totalText = parseInt(totalCost.innerText);

const avgTotal = document.getElementById('avg-total');
const avgTotalText = parseInt('avgTotal.innerText')
function totalUpdate() {
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
/* cuppon code */
document.getElementById('cpn-button').addEventListener('click', function () {
    const cpnInput = document.getElementById('cpn-input');
    const cpnInputValue = cpnInput.value;

    if (cpnInputValue == 'stevekaku') {
        const discount = (totalCost.innerText / 100) * 20;

        avgTotal.innerText = totalCost.innerText - discount;
    }
    cpnInput.value = '';
});