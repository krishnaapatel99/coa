import React from 'react'

function Exp3() {
  return (
    <div><pre>
        {`#include <iostream>
#include <cmath>
using namespace std;

char hexDigit(int val) {
    if (val < 10) return '0' + val;
    return 'A' + (val - 10);
}

string intToHex(int n) {
    string hex = "";
    if (n == 0) return "0";
    while (n > 0) {
        hex = hexDigit(n % 16) + hex;
        n /= 16;
    }
    return hex;
}

string fracToHex(double frac, int precision = 8) {
    string hex = "";
    while (precision--) {
        frac *= 16;
        int digit = (int)frac;
        frac -= digit;
        hex += hexDigit(digit);
        if (frac == 0.0) break;
    }
    return hex;
}

int main() {
    double num;
    cout << "Enter the input decimal number: ";
    cin >> num;

    int intPart = (int)num;
    double fracPart = num - intPart;

    string hexInt = intToHex(intPart);
    string hexFrac = fracToHex(fracPart);

    cout << "\nDecimal " << intPart << " converted into base-16 system  " << hexInt << endl;
    cout << "Fractional decimal " << fracPart << " converted into base-16 system " << hexFrac << endl;
    cout << "\nHexadecimal number: " << hexInt;
    if (fracPart > 0) cout << "." << hexFrac;
    cout << endl;

    return 0;
}
`}</pre></div>
  )
}

export default Exp3