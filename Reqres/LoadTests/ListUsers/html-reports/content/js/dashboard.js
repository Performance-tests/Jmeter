/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 49.03846153846154, "KoPercent": 50.96153846153846};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.49038461538461536, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9753086419753086, 500, 1500, "HTTP Request (page ID = 0)"], "isController": false}, {"data": [0.9705075445816187, 500, 1500, "HTTP Request (page ID = 1)"], "isController": false}, {"data": [0.0, 500, 1500, "HTTP Request (page = 3333333)"], "isController": false}, {"data": [0.9725651577503429, 500, 1500, "HTTP Request (page ID = 2)"], "isController": false}, {"data": [0.9787379972565158, 500, 1500, "HTTP Request (page ID = 3)"], "isController": false}, {"data": [0.9698216735253772, 500, 1500, "HTTP Request (page ID = 4)"], "isController": false}, {"data": [0.9752916952642416, 500, 1500, "HTTP Request (page ID = 5)"], "isController": false}, {"data": [0.0, 500, 1500, "HTTP Request (page = 444325465)"], "isController": false}, {"data": [0.0, 500, 1500, "HTTP Request (page = 1000000)"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 17368, 8851, 50.96153846153846, 195.0703017042834, 96, 38895, 151.0, 331.0, 423.0, 602.3100000000013, 96.48084881815404, 122.8999254402411, 12.277676947059968], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request (page ID = 0)", 1458, 36, 2.4691358024691357, 193.04458161865577, 100, 1902, 150.0, 336.10000000000014, 429.04999999999995, 602.2300000000002, 8.104367353518285, 15.002789697781584, 1.0051314979461154], "isController": false}, {"data": ["HTTP Request (page ID = 1)", 1458, 43, 2.9492455418381343, 195.57544581618643, 96, 1788, 152.0, 337.3000000000004, 424.0999999999999, 589.6400000000003, 8.103421444609946, 15.006786502564971, 1.0050141830717414], "isController": false}, {"data": ["HTTP Request (page = 3333333)", 2874, 2874, 100.0, 192.0066109951291, 99, 1902, 149.0, 328.0, 419.25, 665.75, 15.965336221981502, 17.168322995653142, 2.0736227710190818], "isController": false}, {"data": ["HTTP Request (page ID = 2)", 1458, 40, 2.7434842249657065, 191.25925925925955, 101, 1147, 150.5, 317.10000000000014, 431.0, 581.4100000000001, 8.184941504053173, 15.466990858604854, 1.0151245810690948], "isController": false}, {"data": ["HTTP Request (page ID = 3)", 1458, 31, 2.1262002743484225, 192.8120713305899, 101, 1160, 152.0, 331.2000000000003, 416.14999999999986, 595.2800000000007, 8.192023733270403, 8.768919780464438, 1.0160029434817786], "isController": false}, {"data": ["HTTP Request (page ID = 4)", 1458, 44, 3.017832647462277, 194.40603566529518, 98, 1030, 151.0, 330.10000000000014, 430.0999999999999, 685.1200000000026, 8.190137007847476, 8.770948650495171, 1.0157689453092085], "isController": false}, {"data": ["HTTP Request (page ID = 5)", 1457, 36, 2.4708304735758406, 193.61015785861326, 103, 1317, 152.0, 331.20000000000005, 426.0999999999999, 620.9400000000005, 8.202858896189076, 8.791575091768427, 1.017346757632825], "isController": false}, {"data": ["HTTP Request (page = 444325465)", 2874, 2874, 100.0, 192.33576896311777, 101, 1813, 151.0, 324.5, 419.0, 617.5, 15.96932822137023, 17.23228285443407, 2.105331357309552], "isController": false}, {"data": ["HTTP Request (page = 1000000)", 2873, 2873, 100.0, 205.79986077271133, 101, 38895, 150.0, 337.0, 421.2999999999997, 598.5599999999986, 16.133198562443848, 17.37448254471305, 2.095425203911163], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1,902 milliseconds, but should not have lasted longer than 1,500 milliseconds.", 1, 0.011298158400180771, 0.005757715338553662], "isController": false}, {"data": ["Response time not compliant with SLA", 228, 2.5759801152412156, 1.312759097190235], "isController": false}, {"data": ["The operation lasted too long: It took 1,788 milliseconds, but should not have lasted longer than 1,500 milliseconds.", 1, 0.011298158400180771, 0.005757715338553662], "isController": false}, {"data": ["Test failed: code expected to contain /404/", 8621, 97.40142356795842, 49.63726393367112], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 17368, 8851, "Test failed: code expected to contain /404/", 8621, "Response time not compliant with SLA", 228, "The operation lasted too long: It took 1,902 milliseconds, but should not have lasted longer than 1,500 milliseconds.", 1, "The operation lasted too long: It took 1,788 milliseconds, but should not have lasted longer than 1,500 milliseconds.", 1, "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request (page ID = 0)", 1458, 36, "Response time not compliant with SLA", 35, "The operation lasted too long: It took 1,902 milliseconds, but should not have lasted longer than 1,500 milliseconds.", 1, "", "", "", "", "", ""], "isController": false}, {"data": ["HTTP Request (page ID = 1)", 1458, 43, "Response time not compliant with SLA", 42, "The operation lasted too long: It took 1,788 milliseconds, but should not have lasted longer than 1,500 milliseconds.", 1, "", "", "", "", "", ""], "isController": false}, {"data": ["HTTP Request (page = 3333333)", 2874, 2874, "Test failed: code expected to contain /404/", 2874, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["HTTP Request (page ID = 2)", 1458, 40, "Response time not compliant with SLA", 40, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["HTTP Request (page ID = 3)", 1458, 31, "Response time not compliant with SLA", 31, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["HTTP Request (page ID = 4)", 1458, 44, "Response time not compliant with SLA", 44, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["HTTP Request (page ID = 5)", 1457, 36, "Response time not compliant with SLA", 36, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["HTTP Request (page = 444325465)", 2874, 2874, "Test failed: code expected to contain /404/", 2874, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["HTTP Request (page = 1000000)", 2873, 2873, "Test failed: code expected to contain /404/", 2873, "", "", "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
