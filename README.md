================================================================================
                                  NODE-TSS
================================================================================

NodeJS module for accessing the TCG Software Stack and therefore the Trusted 
Platform Module


Currently supports reading and extending PCRs, some key and quote-related
operations.


This was originally part of the webinos project (http://webinos.org/) but was
extracted and turned into a separate project.



================================================================================
Requirements
================================================================================

(1) A TPM or TPM Emulator
(2) A valid TSS stack.  I've tested it against the TrouSerS stack.
(3) The cvv8 V8 type conversion headers, as provided in the "includes" 
    directory.  More details - http://code.google.com/p/v8-juice/wiki/V8Convert



================================================================================
Compilation
================================================================================

Using node-waf.  Two steps:

1) node-waf configure
2) node-waf

You will get the following warning: 

../src/tsscommands.c: In function ‘getErrorCode’:
../src/tsscommands.c:38:18: warning: cast to pointer from integer of different size



================================================================================
Testing
================================================================================

There's one test - run the following from the root directory of the module

node ./test/test-bridge-main.js

It should 

================================================================================
TPM Keys
================================================================================
This API doesn't create keys for you, it needs you to do it.

Go to http://privacyca.com/code.html and follow instructions for the 
Privacy CA client and (if possible) the EK Certificate Extractor.


================================================================================
TODO List / known bugs
================================================================================

At the moment all operations are synchronous.  This might need to change.

Reading too many PCRs in a row results in a segfault in Trousers (on my PC).  
That might be this module, or it might be trousers



================================================================================
License
================================================================================

/*******************************************************************************
*  Code originally contributed to the webinos project
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

