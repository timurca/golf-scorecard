    var table = '';
    $.each(data, function (index, item) {
    table += '<tr>' +
            '<td class="hide">' + item.cat + '</td>' +
            '<td>' + index + '</td>' + // Add index
            '<td>' + item.date + '</td>' +
            '<td class="clubck">' + item.club + '</td>' +
            '<td>' + item.cp + '</td>' +
            '<td>' + item.ms + '</td>' +
            '<td class="mys">+' + (item.score=(+item.ms - +item.cp)) + '</td>' + // calculate
            '<td>' + item.bog + '</td>' +
            '<td>' + item.par + '</td>' +
            '<td>' + item.brd + '</td>' +
            '<td>' + item.egl + '</td>' +
            '<td>' + item.price + '</td>' +
            '<td>' + item.friends + '</td></tr>';

    });




// Add TH (Table Headers) 
(function() {

$("table.content").html(table);
$('table.content').prepend('<thead><tr class="trg"><th>#</th><th>Date</th><th>Golf Club</th><th>CP</th><th>MS</th><th>MSC</th><th>BOG</th><th>PAR</th><th>BRD</th><th>EGL</th><th>Price</th><th>Golfers</th></tr></thead>');
// RUN Sieve function
$("table.sieve").sieve();
$('#sort').tablesorter(); 




})();


