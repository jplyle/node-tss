node-tss
========

NodeJS module for accessing the TCG Software Stack



REQUIREMENTS
============

(1) A TPM or TPM Emulator
(2) A valid TSS stack.  I've tested it against the TrouSerS stack.


COMPILATION
===========
Using node-waf.  Two steps:

1) node-waf configure
2) node-waf

KEYS
====

This API doesn't create keys for you, it needs you to do it.

Go to http://privacyca.com/code.html and follow instructions for the 
Privacy CA client and (if possible) the EK Certificate Extractor.


