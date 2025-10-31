import React from 'react'

export default function Exp4() {
  return (
    <div><pre>
        {`#include <iostream>
#include <cmath>
using namespace std;

string intToTernary(int n) {
    string ternary = "";
    if (n == 0) return "0";
    while (n > 0) {
        ternary = to_string(n % 3) + ternary;
        n /= 3;
    }
    return ternary;
}

string fracToTernary(double frac, int precision = 8) {
    string ternary = "";
    while (precision--) {
        frac *= 3;
        int digit = (int)frac;
        frac -= digit;
        ternary += to_string(digit);
        if (frac == 0.0) break;
    }
    return ternary;
}

int main() {
    double num;
    cout << "Enter the input decimal number: ";
    cin >> num;

    int intPart = (int)num;
    double fracPart = num - intPart;

    string terInt = intToTernary(intPart);
    string terFrac = fracToTernary(fracPart);

    cout << "\nDecimal " << intPart << " converted into base-3 system " << terInt << endl;
    cout << "Fractional decimal " << fracPart << " converted into base-3 system " << terFrac << endl;
    cout << "\nTernary number: " << terInt;
    if (fracPart > 0) cout << "." << terFrac;
    cout << endl;

    return 0;
}
`}</pre></div>
  )
}
