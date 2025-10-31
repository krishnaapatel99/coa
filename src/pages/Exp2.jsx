import React from 'react'

function Exp2() {
  return (
    <div><pre>
        {`#include <iostream>
#include <cmath>
using namespace std;

string intToOctal(int n) {
    string octal = "";
    if (n == 0) return "0";
    while (n > 0) {
        octal = to_string(n % 8) + octal;
        n /= 8;
    }
    return octal;
}

string fracToOctal(double frac, int precision = 8) {
    string octal = "";
    while (precision--) {
        frac *= 8;
        int digit = (int)frac;
        frac -= digit;
        octal += to_string(digit);
        if (frac == 0.0) break;
    }
    return octal;
}

int main() {
    double num;
    cout << "Enter the input decimal number: ";
    cin >> num;

    int intPart = (int)num;
    double fracPart = num - intPart;

    string octInt = intToOctal(intPart);
    string octFrac = fracToOctal(fracPart);

    cout << "\nDecimal " << intPart << " converted into base-8 system -> " << octInt << endl;
    cout << "Fractional decimal " << fracPart << " converted into base-8 system -> ." << octFrac << endl;
    cout << "\nOctal number: " << octInt;
    if (fracPart > 0) cout << "." << octFrac;
    cout << endl;

    return 0;
}
`}
        </pre></div>
  )
}

export default Exp2