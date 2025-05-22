document.getElementById('oms').onclick = function() {
    const age = document.getElementById('tepot').value;
    const result = document.getElementById('result');
    
    if (age) {
        const birthYear = 2025 - age;
        result.textContent = `سنة ميلادك هي ${birthYear}`;
    } else {
        result.textContent = 'الرجاء إدخال عمرك';
        result.style.color = 'black';
    }
}
