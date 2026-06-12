function initInteractivePlot(tableId, canvasId) {
    const table = document.getElementById(tableId);
    const canvas = document.getElementById(canvasId);
    if (!table || !canvas) return;

    const ctx = canvas.getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Vout / Vin',
                data: [],
                borderColor: '#3f51b5',
                backgroundColor: 'rgba(63, 81, 181, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'logarithmic',
                    title: { display: true, text: 'Frequency (Hz)' },
                    min: 1,
                    max: 100000
                },
                y: {
                    title: { display: true, text: 'Gain (Vout/Vin)' },
                    min: 0,
                    max: 1.2
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    function updateChart() {
        const rows = table.querySelectorAll('tbody tr');
        const labels = [];
        const data = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const freqStr = cells[0].innerText.replace(/[^0-9.k]/g, '');
            let freq = parseFloat(freqStr);
            if (freqStr.includes('k')) freq *= 1000;

            const vin = parseFloat(cells[1].innerText);
            const vout = parseFloat(cells[2].innerText);

            if (!isNaN(freq) && !isNaN(vin) && !isNaN(vout) && vin !== 0) {
                labels.push(freq);
                data.push({ x: freq, y: vout / vin });
            }
        });

        // Sort by frequency
        const combined = data.sort((a, b) => a.x - b.x);
        
        chart.data.labels = combined.map(d => d.x);
        chart.data.datasets[0].data = combined;
        chart.update();
    }

    table.addEventListener('input', updateChart);
    // Initial call in case data is already there
    updateChart();

    // Export functionality
    window[`exportCSV_${tableId}`] = function() {
        let csv = "Frequency,Vin,Vout,Gain\n";
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const freq = cells[0].innerText;
            const vin = cells[1].innerText;
            const vout = cells[2].innerText;
            const gain = (parseFloat(vin) && parseFloat(vout)) ? (parseFloat(vout)/parseFloat(vin)).toFixed(3) : "";
            csv += `${freq},${vin},${vout},${gain}\n`;
        });
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', `${tableId}_data.csv`);
        a.click();
    };

    window[`downloadPlot_${tableId}`] = function() {
        const link = document.createElement('a');
        link.download = `${tableId}_plot.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
}

document.addEventListener('DOMContentLoaded', () => {
    initInteractivePlot('table-highpass', 'plot-highpass');
    initInteractivePlot('table-lowpass', 'plot-lowpass');
});
