/*******************************************************************************
*  Code contributed to the webinos project
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
*     http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* Copyright 2011 University of Oxford
*******************************************************************************/


var util = require('util'),
    tssbridge = require('../build/Release/tssbridge'),
    assert = require('assert');


// TODO: use jasmine or vows.


// getPCR
var pcr = [];

for (var i=0; i<8; i++) {
    console.log("Reading pcr " + i + "...");
    pcr[i] = tssbridge.getPCR(i);
    assert.equal(pcr[i].length, 20, "PCR " + i + " correct length");
    if (i<8) {
        assert.notDeepEqual(pcr[i], [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0], "PCR " + i + " not empty");
    }
    
}
console.log("Done");

tssbridge.extendPCR(7, [0x00,0x01,0x02,0x03,0x04,
                        0x10,0x11,0x12,0x13,0x14,
                        0x20,0x21,0x22,0x23,0x24,                        
                        0x30,0x31,0x32,0x33,0x34]);                        
var pcrNewSeven = tssbridge.getPCR(7);
assert.notDeepEqual(pcrNewSeven,pcr[7], "PCR 7 hasn't changed post extend");










