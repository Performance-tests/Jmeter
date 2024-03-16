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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 2083.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 12.0], [10.5, 12.0], [10.6, 12.0], [10.7, 12.0], [10.8, 12.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 13.0], [11.7, 13.0], [11.8, 13.0], [11.9, 13.0], [12.0, 13.0], [12.1, 13.0], [12.2, 13.0], [12.3, 13.0], [12.4, 14.0], [12.5, 14.0], [12.6, 14.0], [12.7, 14.0], [12.8, 14.0], [12.9, 14.0], [13.0, 14.0], [13.1, 14.0], [13.2, 14.0], [13.3, 14.0], [13.4, 15.0], [13.5, 15.0], [13.6, 15.0], [13.7, 15.0], [13.8, 15.0], [13.9, 15.0], [14.0, 15.0], [14.1, 15.0], [14.2, 16.0], [14.3, 16.0], [14.4, 16.0], [14.5, 16.0], [14.6, 16.0], [14.7, 16.0], [14.8, 16.0], [14.9, 16.0], [15.0, 17.0], [15.1, 17.0], [15.2, 17.0], [15.3, 17.0], [15.4, 17.0], [15.5, 17.0], [15.6, 17.0], [15.7, 18.0], [15.8, 18.0], [15.9, 18.0], [16.0, 18.0], [16.1, 18.0], [16.2, 18.0], [16.3, 18.0], [16.4, 19.0], [16.5, 19.0], [16.6, 19.0], [16.7, 19.0], [16.8, 19.0], [16.9, 19.0], [17.0, 19.0], [17.1, 20.0], [17.2, 20.0], [17.3, 20.0], [17.4, 20.0], [17.5, 20.0], [17.6, 20.0], [17.7, 20.0], [17.8, 21.0], [17.9, 21.0], [18.0, 21.0], [18.1, 21.0], [18.2, 21.0], [18.3, 21.0], [18.4, 22.0], [18.5, 22.0], [18.6, 22.0], [18.7, 22.0], [18.8, 22.0], [18.9, 22.0], [19.0, 23.0], [19.1, 23.0], [19.2, 23.0], [19.3, 23.0], [19.4, 23.0], [19.5, 24.0], [19.6, 24.0], [19.7, 24.0], [19.8, 24.0], [19.9, 24.0], [20.0, 24.0], [20.1, 25.0], [20.2, 25.0], [20.3, 25.0], [20.4, 25.0], [20.5, 25.0], [20.6, 26.0], [20.7, 26.0], [20.8, 26.0], [20.9, 26.0], [21.0, 26.0], [21.1, 27.0], [21.2, 27.0], [21.3, 27.0], [21.4, 27.0], [21.5, 27.0], [21.6, 28.0], [21.7, 28.0], [21.8, 28.0], [21.9, 28.0], [22.0, 29.0], [22.1, 29.0], [22.2, 29.0], [22.3, 29.0], [22.4, 30.0], [22.5, 30.0], [22.6, 30.0], [22.7, 30.0], [22.8, 31.0], [22.9, 31.0], [23.0, 31.0], [23.1, 32.0], [23.2, 32.0], [23.3, 32.0], [23.4, 33.0], [23.5, 33.0], [23.6, 33.0], [23.7, 34.0], [23.8, 34.0], [23.9, 34.0], [24.0, 34.0], [24.1, 35.0], [24.2, 35.0], [24.3, 36.0], [24.4, 36.0], [24.5, 37.0], [24.6, 37.0], [24.7, 37.0], [24.8, 38.0], [24.9, 38.0], [25.0, 39.0], [25.1, 39.0], [25.2, 39.0], [25.3, 40.0], [25.4, 40.0], [25.5, 41.0], [25.6, 41.0], [25.7, 42.0], [25.8, 42.0], [25.9, 43.0], [26.0, 44.0], [26.1, 44.0], [26.2, 45.0], [26.3, 45.0], [26.4, 46.0], [26.5, 46.0], [26.6, 46.0], [26.7, 47.0], [26.8, 47.0], [26.9, 48.0], [27.0, 49.0], [27.1, 49.0], [27.2, 50.0], [27.3, 50.0], [27.4, 51.0], [27.5, 51.0], [27.6, 52.0], [27.7, 52.0], [27.8, 53.0], [27.9, 54.0], [28.0, 54.0], [28.1, 55.0], [28.2, 56.0], [28.3, 56.0], [28.4, 57.0], [28.5, 58.0], [28.6, 59.0], [28.7, 60.0], [28.8, 61.0], [28.9, 61.0], [29.0, 62.0], [29.1, 63.0], [29.2, 64.0], [29.3, 65.0], [29.4, 66.0], [29.5, 67.0], [29.6, 68.0], [29.7, 70.0], [29.8, 71.0], [29.9, 71.0], [30.0, 73.0], [30.1, 74.0], [30.2, 75.0], [30.3, 77.0], [30.4, 78.0], [30.5, 79.0], [30.6, 81.0], [30.7, 83.0], [30.8, 84.0], [30.9, 86.0], [31.0, 87.0], [31.1, 88.0], [31.2, 90.0], [31.3, 92.0], [31.4, 94.0], [31.5, 96.0], [31.6, 98.0], [31.7, 101.0], [31.8, 102.0], [31.9, 104.0], [32.0, 106.0], [32.1, 107.0], [32.2, 108.0], [32.3, 109.0], [32.4, 109.0], [32.5, 110.0], [32.6, 111.0], [32.7, 111.0], [32.8, 112.0], [32.9, 112.0], [33.0, 113.0], [33.1, 113.0], [33.2, 114.0], [33.3, 114.0], [33.4, 115.0], [33.5, 115.0], [33.6, 115.0], [33.7, 116.0], [33.8, 116.0], [33.9, 116.0], [34.0, 116.0], [34.1, 117.0], [34.2, 117.0], [34.3, 117.0], [34.4, 117.0], [34.5, 118.0], [34.6, 118.0], [34.7, 118.0], [34.8, 118.0], [34.9, 119.0], [35.0, 119.0], [35.1, 119.0], [35.2, 119.0], [35.3, 120.0], [35.4, 120.0], [35.5, 120.0], [35.6, 120.0], [35.7, 120.0], [35.8, 121.0], [35.9, 121.0], [36.0, 121.0], [36.1, 121.0], [36.2, 121.0], [36.3, 122.0], [36.4, 122.0], [36.5, 122.0], [36.6, 122.0], [36.7, 122.0], [36.8, 123.0], [36.9, 123.0], [37.0, 123.0], [37.1, 123.0], [37.2, 123.0], [37.3, 124.0], [37.4, 124.0], [37.5, 124.0], [37.6, 124.0], [37.7, 124.0], [37.8, 125.0], [37.9, 125.0], [38.0, 125.0], [38.1, 125.0], [38.2, 125.0], [38.3, 125.0], [38.4, 126.0], [38.5, 126.0], [38.6, 126.0], [38.7, 126.0], [38.8, 126.0], [38.9, 127.0], [39.0, 127.0], [39.1, 127.0], [39.2, 127.0], [39.3, 127.0], [39.4, 127.0], [39.5, 128.0], [39.6, 128.0], [39.7, 128.0], [39.8, 128.0], [39.9, 128.0], [40.0, 129.0], [40.1, 129.0], [40.2, 129.0], [40.3, 129.0], [40.4, 129.0], [40.5, 129.0], [40.6, 130.0], [40.7, 130.0], [40.8, 130.0], [40.9, 130.0], [41.0, 130.0], [41.1, 130.0], [41.2, 131.0], [41.3, 131.0], [41.4, 131.0], [41.5, 131.0], [41.6, 131.0], [41.7, 132.0], [41.8, 132.0], [41.9, 132.0], [42.0, 132.0], [42.1, 132.0], [42.2, 133.0], [42.3, 133.0], [42.4, 133.0], [42.5, 133.0], [42.6, 133.0], [42.7, 133.0], [42.8, 133.0], [42.9, 134.0], [43.0, 134.0], [43.1, 134.0], [43.2, 134.0], [43.3, 134.0], [43.4, 134.0], [43.5, 135.0], [43.6, 135.0], [43.7, 135.0], [43.8, 135.0], [43.9, 135.0], [44.0, 136.0], [44.1, 136.0], [44.2, 136.0], [44.3, 136.0], [44.4, 136.0], [44.5, 137.0], [44.6, 137.0], [44.7, 137.0], [44.8, 137.0], [44.9, 137.0], [45.0, 138.0], [45.1, 138.0], [45.2, 138.0], [45.3, 138.0], [45.4, 138.0], [45.5, 139.0], [45.6, 139.0], [45.7, 139.0], [45.8, 139.0], [45.9, 139.0], [46.0, 139.0], [46.1, 140.0], [46.2, 140.0], [46.3, 140.0], [46.4, 140.0], [46.5, 140.0], [46.6, 141.0], [46.7, 141.0], [46.8, 141.0], [46.9, 141.0], [47.0, 142.0], [47.1, 142.0], [47.2, 142.0], [47.3, 142.0], [47.4, 143.0], [47.5, 143.0], [47.6, 143.0], [47.7, 143.0], [47.8, 143.0], [47.9, 144.0], [48.0, 144.0], [48.1, 144.0], [48.2, 144.0], [48.3, 144.0], [48.4, 145.0], [48.5, 145.0], [48.6, 145.0], [48.7, 145.0], [48.8, 145.0], [48.9, 146.0], [49.0, 146.0], [49.1, 146.0], [49.2, 146.0], [49.3, 146.0], [49.4, 147.0], [49.5, 147.0], [49.6, 147.0], [49.7, 147.0], [49.8, 147.0], [49.9, 148.0], [50.0, 148.0], [50.1, 148.0], [50.2, 148.0], [50.3, 148.0], [50.4, 149.0], [50.5, 149.0], [50.6, 149.0], [50.7, 149.0], [50.8, 149.0], [50.9, 150.0], [51.0, 150.0], [51.1, 150.0], [51.2, 150.0], [51.3, 150.0], [51.4, 150.0], [51.5, 151.0], [51.6, 151.0], [51.7, 151.0], [51.8, 151.0], [51.9, 151.0], [52.0, 152.0], [52.1, 152.0], [52.2, 152.0], [52.3, 152.0], [52.4, 152.0], [52.5, 153.0], [52.6, 153.0], [52.7, 153.0], [52.8, 153.0], [52.9, 153.0], [53.0, 154.0], [53.1, 154.0], [53.2, 154.0], [53.3, 154.0], [53.4, 154.0], [53.5, 155.0], [53.6, 155.0], [53.7, 155.0], [53.8, 155.0], [53.9, 155.0], [54.0, 156.0], [54.1, 156.0], [54.2, 156.0], [54.3, 156.0], [54.4, 156.0], [54.5, 157.0], [54.6, 157.0], [54.7, 157.0], [54.8, 157.0], [54.9, 157.0], [55.0, 158.0], [55.1, 158.0], [55.2, 158.0], [55.3, 158.0], [55.4, 159.0], [55.5, 159.0], [55.6, 159.0], [55.7, 159.0], [55.8, 160.0], [55.9, 160.0], [56.0, 160.0], [56.1, 160.0], [56.2, 160.0], [56.3, 161.0], [56.4, 161.0], [56.5, 161.0], [56.6, 161.0], [56.7, 161.0], [56.8, 162.0], [56.9, 162.0], [57.0, 162.0], [57.1, 162.0], [57.2, 163.0], [57.3, 163.0], [57.4, 163.0], [57.5, 163.0], [57.6, 163.0], [57.7, 164.0], [57.8, 164.0], [57.9, 164.0], [58.0, 164.0], [58.1, 164.0], [58.2, 165.0], [58.3, 165.0], [58.4, 165.0], [58.5, 165.0], [58.6, 166.0], [58.7, 166.0], [58.8, 166.0], [58.9, 166.0], [59.0, 166.0], [59.1, 167.0], [59.2, 167.0], [59.3, 167.0], [59.4, 167.0], [59.5, 168.0], [59.6, 168.0], [59.7, 168.0], [59.8, 168.0], [59.9, 169.0], [60.0, 169.0], [60.1, 169.0], [60.2, 169.0], [60.3, 170.0], [60.4, 170.0], [60.5, 170.0], [60.6, 170.0], [60.7, 171.0], [60.8, 171.0], [60.9, 171.0], [61.0, 171.0], [61.1, 172.0], [61.2, 172.0], [61.3, 172.0], [61.4, 172.0], [61.5, 173.0], [61.6, 173.0], [61.7, 173.0], [61.8, 173.0], [61.9, 174.0], [62.0, 174.0], [62.1, 174.0], [62.2, 174.0], [62.3, 175.0], [62.4, 175.0], [62.5, 175.0], [62.6, 175.0], [62.7, 176.0], [62.8, 176.0], [62.9, 176.0], [63.0, 177.0], [63.1, 177.0], [63.2, 177.0], [63.3, 177.0], [63.4, 178.0], [63.5, 178.0], [63.6, 178.0], [63.7, 179.0], [63.8, 179.0], [63.9, 179.0], [64.0, 179.0], [64.1, 180.0], [64.2, 180.0], [64.3, 180.0], [64.4, 180.0], [64.5, 181.0], [64.6, 181.0], [64.7, 181.0], [64.8, 182.0], [64.9, 182.0], [65.0, 182.0], [65.1, 182.0], [65.2, 183.0], [65.3, 183.0], [65.4, 183.0], [65.5, 183.0], [65.6, 184.0], [65.7, 184.0], [65.8, 184.0], [65.9, 184.0], [66.0, 185.0], [66.1, 185.0], [66.2, 185.0], [66.3, 185.0], [66.4, 186.0], [66.5, 186.0], [66.6, 186.0], [66.7, 187.0], [66.8, 187.0], [66.9, 187.0], [67.0, 187.0], [67.1, 188.0], [67.2, 188.0], [67.3, 188.0], [67.4, 189.0], [67.5, 189.0], [67.6, 189.0], [67.7, 189.0], [67.8, 190.0], [67.9, 190.0], [68.0, 190.0], [68.1, 191.0], [68.2, 191.0], [68.3, 191.0], [68.4, 191.0], [68.5, 192.0], [68.6, 192.0], [68.7, 192.0], [68.8, 193.0], [68.9, 193.0], [69.0, 194.0], [69.1, 194.0], [69.2, 194.0], [69.3, 194.0], [69.4, 195.0], [69.5, 195.0], [69.6, 195.0], [69.7, 196.0], [69.8, 196.0], [69.9, 196.0], [70.0, 197.0], [70.1, 197.0], [70.2, 197.0], [70.3, 198.0], [70.4, 198.0], [70.5, 198.0], [70.6, 198.0], [70.7, 199.0], [70.8, 199.0], [70.9, 200.0], [71.0, 200.0], [71.1, 200.0], [71.2, 201.0], [71.3, 201.0], [71.4, 201.0], [71.5, 202.0], [71.6, 202.0], [71.7, 202.0], [71.8, 203.0], [71.9, 203.0], [72.0, 203.0], [72.1, 203.0], [72.2, 204.0], [72.3, 204.0], [72.4, 204.0], [72.5, 205.0], [72.6, 205.0], [72.7, 206.0], [72.8, 206.0], [72.9, 206.0], [73.0, 207.0], [73.1, 207.0], [73.2, 207.0], [73.3, 208.0], [73.4, 208.0], [73.5, 208.0], [73.6, 209.0], [73.7, 209.0], [73.8, 210.0], [73.9, 210.0], [74.0, 210.0], [74.1, 211.0], [74.2, 211.0], [74.3, 211.0], [74.4, 212.0], [74.5, 212.0], [74.6, 213.0], [74.7, 213.0], [74.8, 213.0], [74.9, 214.0], [75.0, 214.0], [75.1, 215.0], [75.2, 215.0], [75.3, 216.0], [75.4, 216.0], [75.5, 216.0], [75.6, 217.0], [75.7, 217.0], [75.8, 217.0], [75.9, 218.0], [76.0, 218.0], [76.1, 218.0], [76.2, 219.0], [76.3, 219.0], [76.4, 220.0], [76.5, 220.0], [76.6, 221.0], [76.7, 221.0], [76.8, 221.0], [76.9, 222.0], [77.0, 222.0], [77.1, 222.0], [77.2, 223.0], [77.3, 223.0], [77.4, 224.0], [77.5, 224.0], [77.6, 225.0], [77.7, 225.0], [77.8, 225.0], [77.9, 226.0], [78.0, 226.0], [78.1, 227.0], [78.2, 227.0], [78.3, 228.0], [78.4, 228.0], [78.5, 228.0], [78.6, 229.0], [78.7, 229.0], [78.8, 230.0], [78.9, 230.0], [79.0, 231.0], [79.1, 231.0], [79.2, 231.0], [79.3, 232.0], [79.4, 233.0], [79.5, 233.0], [79.6, 234.0], [79.7, 234.0], [79.8, 235.0], [79.9, 235.0], [80.0, 236.0], [80.1, 236.0], [80.2, 237.0], [80.3, 237.0], [80.4, 238.0], [80.5, 239.0], [80.6, 239.0], [80.7, 240.0], [80.8, 240.0], [80.9, 241.0], [81.0, 241.0], [81.1, 242.0], [81.2, 242.0], [81.3, 243.0], [81.4, 243.0], [81.5, 244.0], [81.6, 245.0], [81.7, 245.0], [81.8, 246.0], [81.9, 246.0], [82.0, 247.0], [82.1, 247.0], [82.2, 248.0], [82.3, 249.0], [82.4, 249.0], [82.5, 250.0], [82.6, 251.0], [82.7, 251.0], [82.8, 252.0], [82.9, 252.0], [83.0, 253.0], [83.1, 254.0], [83.2, 255.0], [83.3, 256.0], [83.4, 256.0], [83.5, 257.0], [83.6, 258.0], [83.7, 258.0], [83.8, 259.0], [83.9, 260.0], [84.0, 260.0], [84.1, 261.0], [84.2, 261.0], [84.3, 262.0], [84.4, 263.0], [84.5, 263.0], [84.6, 264.0], [84.7, 265.0], [84.8, 266.0], [84.9, 266.0], [85.0, 267.0], [85.1, 268.0], [85.2, 268.0], [85.3, 269.0], [85.4, 270.0], [85.5, 270.0], [85.6, 271.0], [85.7, 272.0], [85.8, 272.0], [85.9, 273.0], [86.0, 274.0], [86.1, 274.0], [86.2, 275.0], [86.3, 275.0], [86.4, 276.0], [86.5, 277.0], [86.6, 278.0], [86.7, 278.0], [86.8, 279.0], [86.9, 280.0], [87.0, 281.0], [87.1, 282.0], [87.2, 282.0], [87.3, 283.0], [87.4, 284.0], [87.5, 285.0], [87.6, 286.0], [87.7, 287.0], [87.8, 288.0], [87.9, 289.0], [88.0, 290.0], [88.1, 291.0], [88.2, 291.0], [88.3, 292.0], [88.4, 293.0], [88.5, 294.0], [88.6, 295.0], [88.7, 296.0], [88.8, 297.0], [88.9, 297.0], [89.0, 298.0], [89.1, 299.0], [89.2, 300.0], [89.3, 301.0], [89.4, 302.0], [89.5, 303.0], [89.6, 304.0], [89.7, 305.0], [89.8, 306.0], [89.9, 307.0], [90.0, 308.0], [90.1, 309.0], [90.2, 310.0], [90.3, 312.0], [90.4, 313.0], [90.5, 314.0], [90.6, 315.0], [90.7, 316.0], [90.8, 317.0], [90.9, 319.0], [91.0, 320.0], [91.1, 321.0], [91.2, 322.0], [91.3, 323.0], [91.4, 324.0], [91.5, 325.0], [91.6, 327.0], [91.7, 328.0], [91.8, 330.0], [91.9, 331.0], [92.0, 332.0], [92.1, 334.0], [92.2, 335.0], [92.3, 336.0], [92.4, 338.0], [92.5, 339.0], [92.6, 340.0], [92.7, 342.0], [92.8, 344.0], [92.9, 346.0], [93.0, 347.0], [93.1, 348.0], [93.2, 350.0], [93.3, 351.0], [93.4, 353.0], [93.5, 355.0], [93.6, 356.0], [93.7, 358.0], [93.8, 360.0], [93.9, 361.0], [94.0, 363.0], [94.1, 365.0], [94.2, 367.0], [94.3, 369.0], [94.4, 371.0], [94.5, 374.0], [94.6, 377.0], [94.7, 381.0], [94.8, 384.0], [94.9, 388.0], [95.0, 391.0], [95.1, 395.0], [95.2, 398.0], [95.3, 401.0], [95.4, 404.0], [95.5, 408.0], [95.6, 411.0], [95.7, 414.0], [95.8, 418.0], [95.9, 421.0], [96.0, 424.0], [96.1, 428.0], [96.2, 431.0], [96.3, 436.0], [96.4, 440.0], [96.5, 444.0], [96.6, 450.0], [96.7, 454.0], [96.8, 460.0], [96.9, 467.0], [97.0, 474.0], [97.1, 480.0], [97.2, 488.0], [97.3, 495.0], [97.4, 502.0], [97.5, 509.0], [97.6, 518.0], [97.7, 523.0], [97.8, 532.0], [97.9, 542.0], [98.0, 552.0], [98.1, 563.0], [98.2, 573.0], [98.3, 582.0], [98.4, 592.0], [98.5, 605.0], [98.6, 615.0], [98.7, 637.0], [98.8, 651.0], [98.9, 671.0], [99.0, 690.0], [99.1, 723.0], [99.2, 743.0], [99.3, 765.0], [99.4, 789.0], [99.5, 814.0], [99.6, 853.0], [99.7, 939.0], [99.8, 1018.0], [99.9, 1126.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 13172.0, "series": [{"data": [[0.0, 10626.0], [600.0, 195.0], [700.0, 132.0], [200.0, 6137.0], [800.0, 75.0], [900.0, 38.0], [1000.0, 36.0], [1100.0, 15.0], [300.0, 2047.0], [1200.0, 7.0], [1300.0, 9.0], [1400.0, 2.0], [100.0, 13172.0], [400.0, 709.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 3.0], [500.0, 370.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 12516.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 21061.0, "series": [{"data": [[0.0, 21061.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 12516.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 16.373205741626773, "minX": 1.71006414E12, "maxY": 50.0, "series": [{"data": [[1.7100642E12, 45.28335343787682], [1.71006432E12, 49.95376600824831], [1.71006414E12, 16.373205741626773], [1.71006426E12, 50.0]], "isOverall": false, "label": "Existing user id-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71006432E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 128.0, "minX": 1.0, "maxY": 376.8, "series": [{"data": [[32.0, 241.28985507246387], [33.0, 187.92473118279582], [2.0, 238.0], [35.0, 179.31451612903234], [37.0, 227.10526315789474], [38.0, 253.81853281853284], [40.0, 313.929906542056], [42.0, 264.8564814814814], [43.0, 246.54098360655743], [45.0, 232.70212765957442], [44.0, 156.25], [46.0, 209.72727272727272], [47.0, 228.95093457943932], [3.0, 376.8], [48.0, 219.60606060606057], [50.0, 150.1788233634314], [4.0, 167.0], [5.0, 159.98333333333338], [6.0, 133.33333333333334], [7.0, 149.13978494623663], [8.0, 146.07826086956516], [9.0, 128.0], [10.0, 145.41134751773043], [12.0, 159.75294117647059], [13.0, 150.11445783132527], [15.0, 175.34730538922148], [16.0, 290.25], [1.0, 246.0], [17.0, 206.0103626943006], [18.0, 206.1634615384615], [19.0, 198.15384615384616], [20.0, 180.9505494505495], [22.0, 173.3093525179856], [23.0, 207.16370106761568], [25.0, 198.09259259259258], [27.0, 156.66923076923075], [28.0, 207.36562499999994], [29.0, 142.75], [30.0, 214.26277372262763]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[46.89885933823777, 159.831104625189]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3832.5333333333333, "minX": 1.71006414E12, "maxY": 411439.8, "series": [{"data": [[1.7100642E12, 163580.75], [1.71006432E12, 298944.11666666664], [1.71006414E12, 37110.21666666667], [1.71006426E12, 411439.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7100642E12, 16890.85], [1.71006432E12, 7573.433333333333], [1.71006414E12, 3832.5333333333333], [1.71006426E12, 16352.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71006432E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 103.55274582157588, "minX": 1.71006414E12, "maxY": 244.26670687575407, "series": [{"data": [[1.7100642E12, 244.26670687575407], [1.71006432E12, 103.55274582157588], [1.71006414E12, 182.02392344497562], [1.71006426E12, 144.10625704622424]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71006432E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 82.80779248968956, "minX": 1.71006414E12, "maxY": 244.23642943305222, "series": [{"data": [[1.7100642E12, 244.23642943305222], [1.71006432E12, 82.80779248968956], [1.71006414E12, 181.90909090909068], [1.71006426E12, 124.58025648252564]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71006432E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 80.85999565878008, "minX": 1.71006414E12, "maxY": 180.2466827503015, "series": [{"data": [[1.7100642E12, 180.2466827503015], [1.71006432E12, 80.85999565878008], [1.71006414E12, 126.89207868155229], [1.71006426E12, 110.62598647125144]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71006432E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 100.0, "minX": 1.71006414E12, "maxY": 500.0, "series": [{"data": [[1.7100642E12, 500.0], [1.71006432E12, 500.0], [1.71006414E12, 490.0], [1.71006426E12, 500.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7100642E12, 100.0], [1.71006432E12, 102.0], [1.71006414E12, 105.0], [1.71006426E12, 100.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7100642E12, 342.0], [1.71006432E12, 282.0], [1.71006414E12, 228.0], [1.71006426E12, 320.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7100642E12, 474.0], [1.71006432E12, 443.1300000000001], [1.71006414E12, 330.46000000000004], [1.71006426E12, 448.47000000000025]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7100642E12, 193.0], [1.71006432E12, 180.0], [1.71006414E12, 158.0], [1.71006426E12, 180.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7100642E12, 395.0], [1.71006432E12, 334.5499999999997], [1.71006414E12, 250.0], [1.71006426E12, 363.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71006432E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7.0, "minX": 2.0, "maxY": 1857.0, "series": [{"data": [[10.0, 237.0], [17.0, 193.0], [31.0, 146.0], [32.0, 132.5], [41.0, 150.0], [47.0, 135.0], [51.0, 129.0], [55.0, 138.0], [58.0, 143.0], [64.0, 141.0], [65.0, 191.0], [70.0, 177.0], [72.0, 151.0], [74.0, 179.0], [78.0, 203.0], [83.0, 155.0], [80.0, 168.0], [81.0, 202.0], [82.0, 153.0], [86.0, 170.5], [85.0, 203.5], [87.0, 241.0], [93.0, 152.0], [95.0, 173.0], [98.0, 161.0], [96.0, 156.0], [101.0, 163.5], [103.0, 156.5], [106.0, 180.0], [109.0, 201.0], [108.0, 185.0], [111.0, 212.0], [115.0, 138.0], [112.0, 306.0], [114.0, 172.0], [113.0, 262.0], [116.0, 152.0], [121.0, 256.0], [123.0, 284.0], [122.0, 129.0], [135.0, 139.0], [128.0, 274.0], [129.0, 240.5], [133.0, 197.5], [131.0, 192.0], [139.0, 227.0], [137.0, 239.5], [138.0, 161.0], [136.0, 261.0], [146.0, 241.0], [144.0, 267.5], [151.0, 158.0], [150.0, 271.0], [154.0, 183.0], [159.0, 212.0], [157.0, 213.0], [152.0, 288.5], [158.0, 318.0], [167.0, 176.0], [165.0, 148.0], [162.0, 201.0], [164.0, 231.0], [160.0, 130.5], [163.0, 172.0], [161.0, 233.5], [173.0, 215.0], [178.0, 201.0], [177.0, 177.0], [180.0, 142.5], [190.0, 223.0], [188.0, 206.0], [187.0, 176.0], [185.0, 253.5], [184.0, 216.5], [192.0, 142.0], [199.0, 205.0], [196.0, 202.0], [207.0, 253.5], [203.0, 192.0], [210.0, 177.0], [213.0, 177.0], [211.0, 177.0], [208.0, 181.0], [212.0, 148.0], [214.0, 191.0], [221.0, 173.5], [222.0, 180.0], [218.0, 157.0], [217.0, 166.0], [220.0, 178.0], [229.0, 173.0], [236.0, 151.0], [233.0, 275.0], [258.0, 130.5], [257.0, 166.0], [261.0, 157.0], [284.0, 160.0], [282.0, 205.5], [283.0, 136.0], [278.0, 198.0], [274.0, 236.0], [279.0, 155.0], [285.0, 188.0], [300.0, 188.0], [297.0, 129.0], [298.0, 195.0], [290.0, 204.5], [301.0, 153.0], [292.0, 203.0], [291.0, 206.5], [313.0, 135.5], [307.0, 163.0], [305.0, 149.0], [306.0, 178.0], [316.0, 140.0], [319.0, 145.5], [311.0, 180.0], [323.0, 163.0], [335.0, 135.0], [331.0, 137.0], [332.0, 140.0], [320.0, 184.0], [330.0, 189.5], [333.0, 185.0], [326.0, 170.0], [343.0, 171.5], [347.0, 145.0], [345.0, 211.0], [351.0, 156.0], [354.0, 179.5], [353.0, 158.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1857.0], [58.0, 528.0], [70.0, 7.0], [74.0, 803.0], [78.0, 518.0], [83.0, 850.0], [81.0, 524.0], [82.0, 659.0], [85.0, 602.0], [87.0, 501.0], [93.0, 596.0], [98.0, 1001.0], [96.0, 987.0], [101.0, 652.0], [103.0, 552.0], [106.0, 688.5], [109.0, 676.0], [108.0, 673.0], [111.0, 905.0], [114.0, 1052.0], [113.0, 664.0], [116.0, 705.5], [121.0, 541.0], [123.0, 612.5], [122.0, 765.0], [135.0, 608.5], [128.0, 657.0], [129.0, 678.0], [133.0, 629.0], [131.0, 653.0], [139.0, 566.0], [137.0, 578.0], [138.0, 582.0], [136.0, 552.0], [146.0, 513.0], [151.0, 697.5], [150.0, 722.5], [154.0, 688.0], [158.0, 501.0], [167.0, 531.0], [165.0, 555.5], [162.0, 826.0], [164.0, 651.0], [160.0, 742.5], [163.0, 558.0], [161.0, 896.0], [173.0, 558.0], [178.0, 569.0], [177.0, 1035.0], [180.0, 809.5], [190.0, 513.0], [187.0, 908.5], [185.0, 551.0], [192.0, 669.0], [196.0, 563.0], [207.0, 503.0], [213.0, 559.0], [211.0, 15.0], [208.0, 613.5], [210.0, 821.0], [212.0, 838.0], [214.0, 570.0], [221.0, 522.0], [222.0, 569.0], [218.0, 578.0], [217.0, 640.0], [220.0, 532.0], [236.0, 13.0], [233.0, 10.0], [258.0, 18.0], [257.0, 20.0], [261.0, 14.0], [284.0, 20.0], [282.0, 21.5], [283.0, 17.0], [278.0, 17.0], [274.0, 13.0], [279.0, 17.0], [285.0, 28.0], [300.0, 23.0], [297.0, 18.0], [298.0, 24.0], [290.0, 17.0], [301.0, 19.0], [292.0, 32.5], [291.0, 14.0], [313.0, 30.0], [307.0, 20.0], [305.0, 25.0], [306.0, 31.0], [316.0, 19.0], [319.0, 19.0], [311.0, 14.0], [323.0, 20.0], [335.0, 22.0], [331.0, 23.0], [332.0, 31.0], [320.0, 24.0], [330.0, 24.0], [333.0, 15.0], [326.0, 21.0], [343.0, 24.0], [347.0, 25.0], [345.0, 19.0], [351.0, 20.0], [354.0, 27.0], [353.0, 26.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 354.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 1835.0, "series": [{"data": [[10.0, 237.0], [17.0, 192.0], [31.0, 146.0], [32.0, 132.5], [41.0, 150.0], [47.0, 134.0], [51.0, 129.0], [55.0, 138.0], [58.0, 143.0], [64.0, 141.0], [65.0, 191.0], [70.0, 177.0], [72.0, 151.0], [74.0, 179.0], [78.0, 203.0], [83.0, 155.0], [80.0, 168.0], [81.0, 201.5], [82.0, 153.0], [86.0, 170.5], [85.0, 203.5], [87.0, 241.0], [93.0, 152.0], [95.0, 173.0], [98.0, 161.0], [96.0, 156.0], [101.0, 163.5], [103.0, 156.5], [106.0, 180.0], [109.0, 201.0], [108.0, 185.0], [111.0, 212.0], [115.0, 138.0], [112.0, 306.0], [114.0, 172.0], [113.0, 262.0], [116.0, 152.0], [121.0, 256.0], [123.0, 284.0], [122.0, 129.0], [135.0, 139.0], [128.0, 274.0], [129.0, 240.5], [133.0, 197.5], [131.0, 192.0], [139.0, 227.0], [137.0, 239.0], [138.0, 161.0], [136.0, 261.0], [146.0, 241.0], [144.0, 267.5], [151.0, 158.0], [150.0, 271.0], [154.0, 183.0], [159.0, 212.0], [157.0, 213.0], [152.0, 288.5], [158.0, 318.0], [167.0, 176.0], [165.0, 148.0], [162.0, 201.0], [164.0, 231.0], [160.0, 130.5], [163.0, 172.0], [161.0, 233.5], [173.0, 215.0], [178.0, 201.0], [177.0, 177.0], [180.0, 142.5], [190.0, 223.0], [188.0, 206.0], [187.0, 176.0], [185.0, 253.5], [184.0, 216.5], [192.0, 142.0], [199.0, 205.0], [196.0, 202.0], [207.0, 253.5], [203.0, 192.0], [210.0, 177.0], [213.0, 177.0], [211.0, 177.0], [208.0, 181.0], [212.0, 148.0], [214.0, 191.0], [221.0, 173.5], [222.0, 180.0], [218.0, 157.0], [217.0, 166.0], [220.0, 178.0], [229.0, 173.0], [236.0, 151.0], [233.0, 275.0], [258.0, 130.5], [257.0, 166.0], [261.0, 157.0], [284.0, 160.0], [282.0, 205.5], [283.0, 136.0], [278.0, 198.0], [274.0, 236.0], [279.0, 155.0], [285.0, 188.0], [300.0, 188.0], [297.0, 129.0], [298.0, 195.0], [290.0, 204.5], [301.0, 153.0], [292.0, 203.0], [291.0, 206.5], [313.0, 135.5], [307.0, 163.0], [305.0, 149.0], [306.0, 178.0], [316.0, 140.0], [319.0, 145.5], [311.0, 180.0], [323.0, 163.0], [335.0, 135.0], [331.0, 137.0], [332.0, 140.0], [320.0, 184.0], [330.0, 189.5], [333.0, 185.0], [326.0, 170.0], [343.0, 171.5], [347.0, 145.0], [345.0, 211.0], [351.0, 156.0], [354.0, 179.5], [353.0, 158.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1835.0], [58.0, 528.0], [70.0, 0.0], [74.0, 803.0], [78.0, 518.0], [83.0, 850.0], [81.0, 524.0], [82.0, 659.0], [85.0, 602.0], [87.0, 501.0], [93.0, 596.0], [98.0, 1001.0], [96.0, 987.0], [101.0, 652.0], [103.0, 552.0], [106.0, 688.5], [109.0, 676.0], [108.0, 673.0], [111.0, 905.0], [114.0, 1052.0], [113.0, 664.0], [116.0, 705.5], [121.0, 541.0], [123.0, 612.5], [122.0, 765.0], [135.0, 608.5], [128.0, 657.0], [129.0, 678.0], [133.0, 629.0], [131.0, 653.0], [139.0, 566.0], [137.0, 578.0], [138.0, 582.0], [136.0, 552.0], [146.0, 513.0], [151.0, 697.5], [150.0, 722.5], [154.0, 688.0], [158.0, 501.0], [167.0, 531.0], [165.0, 555.5], [162.0, 826.0], [164.0, 651.0], [160.0, 742.5], [163.0, 558.0], [161.0, 896.0], [173.0, 558.0], [178.0, 569.0], [177.0, 1035.0], [180.0, 809.5], [190.0, 513.0], [187.0, 908.5], [185.0, 551.0], [192.0, 669.0], [196.0, 563.0], [207.0, 503.0], [213.0, 559.0], [211.0, 0.0], [208.0, 613.5], [210.0, 821.0], [212.0, 837.0], [214.0, 570.0], [221.0, 522.0], [222.0, 569.0], [218.0, 578.0], [217.0, 640.0], [220.0, 532.0], [236.0, 0.0], [233.0, 0.0], [258.0, 0.0], [257.0, 0.0], [261.0, 0.0], [284.0, 0.0], [282.0, 0.0], [283.0, 0.0], [278.0, 0.0], [274.0, 0.0], [279.0, 0.0], [285.0, 0.0], [300.0, 0.0], [297.0, 0.0], [298.0, 0.0], [290.0, 0.0], [301.0, 0.0], [292.0, 0.0], [291.0, 0.0], [313.0, 0.0], [307.0, 0.0], [305.0, 0.0], [306.0, 0.0], [316.0, 0.0], [319.0, 0.0], [311.0, 0.0], [323.0, 0.0], [335.0, 0.0], [331.0, 0.0], [332.0, 0.0], [320.0, 0.0], [330.0, 0.0], [333.0, 0.0], [326.0, 0.0], [343.0, 0.0], [347.0, 0.0], [345.0, 0.0], [351.0, 0.0], [354.0, 0.0], [353.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 354.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 31.55, "minX": 1.71006414E12, "maxY": 236.5, "series": [{"data": [[1.7100642E12, 138.71666666666667], [1.71006432E12, 152.85], [1.71006414E12, 31.55], [1.71006426E12, 236.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71006432E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 31.35, "minX": 1.71006414E12, "maxY": 138.16666666666666, "series": [{"data": [[1.7100642E12, 138.16666666666666], [1.71006432E12, 61.95], [1.71006414E12, 31.35], [1.71006426E12, 133.76666666666668]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71006432E12, 91.61666666666666], [1.71006426E12, 102.76666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71006432E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.71006414E12, "maxY": 130.46666666666667, "series": [{"data": [[1.7100642E12, 7.7], [1.71006432E12, 93.1], [1.71006414E12, 0.4666666666666667], [1.71006426E12, 107.33333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.7100642E12, 130.46666666666667], [1.71006432E12, 60.46666666666667], [1.71006414E12, 30.883333333333333], [1.71006426E12, 129.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71006432E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.71006414E12, "maxY": 130.46666666666667, "series": [{"data": [[1.7100642E12, 130.46666666666667], [1.71006432E12, 60.46666666666667], [1.71006414E12, 30.883333333333333], [1.71006426E12, 129.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7100642E12, 7.7], [1.71006432E12, 93.1], [1.71006414E12, 0.4666666666666667], [1.71006426E12, 107.33333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71006432E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

