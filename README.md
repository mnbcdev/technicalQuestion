# IP Address Validator

This project contains a function to validate whether a given IP address is IPv4, IPv6, or neither. 

## Overview

The `validIPAddress` function takes a string `queryIP` and returns:
- `"IPv4"` if the IP address is a valid IPv4 address,
- `"IPv6"` if the IP address is a valid IPv6 address,
- `"Neither"` if the IP address is not a valid IPv4 or IPv6 address.

### Valid IPv4 Address

A valid IPv4 address is in the form `x1.x2.x3.x4` where:
- `0 <= xi <= 255`
- Each `xi` cannot contain leading zeros (e.g., `192.168.01.1` is invalid).

**Examples:**
- `"192.168.1.1"` - Valid
- `"192.168.1.0"` - Valid
- `"192.168.01.1"` - Invalid (leading zero in one of the octets)
- `"192.168.1.00"` - Invalid (leading zero in one of the octets)
- `"192.168@1.1"` - Invalid (contains non-digit characters)

### Valid IPv6 Address

A valid IPv6 address is in the form `x1:x2:x3:x4:x5:x6:x7:x8` where:
- `1 <= xi.length <= 4`
- Each `xi` is a hexadecimal string (digits and letters a-f/A-F).
- Leading zeros are allowed (e.g., `0001` is valid).

**Examples:**
- `"2001:0db8:85a3:0000:0000:8a2e:0370:7334"` - Valid
- `"2001:db8:85a3:0:0:8A2E:0370:7334"` - Valid
- `"2001:0db8:85a3::8A2E:037j:7334"` - Invalid (contains invalid character 'j')
- `"02001:0db8:85a3:0000:0000:8a2e:0370:7334"` - Invalid (too many segments)

### Example Usage

The project includes a script `run.js` that demonstrates how the `validIPAddress` function can be used:

```javascript
const validIPAddress = require('./src/index');

const testIPs = [
    "172.16.254.1", 
    "2001:0db8:85a3:0:0:8A2E:0370:7334", 
    "256.256.256.256",      
    "2001:0db8:85a3::8A2E:037j:7334"    
];

testIPs.forEach(ip => {
    console.log(`${ip}: ${validIPAddress(ip)}`);
});

```

Run the test by executing 
``` node run.js ```