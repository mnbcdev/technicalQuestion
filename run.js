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
