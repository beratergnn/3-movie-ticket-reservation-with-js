const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {

        // container de her tıkladığımız yer değil sadece koltuklara
        // tıklandığında seçme işlemi yapması için sadece seat class alındı

        e.target.classList.toggle('selected'); // toggle varsa sil yoksa ekle 
        calculateTotal();


    }
});

select.addEventListener('change', function (e) {
    calculateTotal();

});

function calculateTotal() {
    let selectedSeatCount = container.querySelectorAll('.selected').length;
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;

}

