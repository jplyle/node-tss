node-tss
========

NodeJS module for accessing the TCG Software Stack

This is currently completely broken.  

REQUIREMENTS
============

(1) A TPM or TPM Emulator
(2) A valid TSS stack.  I've tested it against the TrouSerS stack.
(3) OpenSSL
(4) Linux compiled with the linux-ima option enabled, and your kernel running
    with this option turned on.
(5) Patience.  A lot of patience.
(6) The 'dcrypt' module.  At present this is broken on newer nodejs and NPM versions.  I suggest using paddybyer's branch at https://github.com/paddybyers/dcrypt and then installing manually into the node_modules folder.  You may also need to change the first line of dcrypt.coffee to change the link to the binary.


COMPILATION
===========
Using node-waf.  Two steps:

1) node-waf configure
2) node-waf

KEYS
====

This API doesn't create keys for you, it needs you to do it.

(1) create a directory somewhere for keys (we'll call it AIKDIR here).  

(2) Go to http://privacyca.com/code.html and follow instructions for the 
Privacy CA client and (if possible) the EK Certificate Extractor.

(3) Use the identity code to do the following, chosing any value for [label]:

./identity [label] AIKDIR/[label]/key.blob AIKDIR/[label]/cert.pem

(4) Change line 80 of attestation.js so that "aikdirectory" points to AIKDIR.

LOGS
====

The attestation module relies on the IMA subsystem of Linux to record the 
identity of software running on the OS.  These logfiles are read by the API.

You need to change lines 86 and 89 of attestation.js to point to these:

imalog: "/sys/kernel/security/ima/ascii_runtime_measurements"
bootlog: "/sys/kernel/security/tpm0/ascii_bios_measurements"

if you are *not* running IMA, you can point them to some dummy files in the test
directory

imalog: "[WEBINOS PATH]/API/Attestation/src/test/samplelogs/imalog.txt",
bootlog: "[WEBINOS PATH]/API/Attestation/src/test/samplelogs/bootlog.txt"



