import React from 'react'

function Exp() {
  return (
    <div><pre>
        {`#include <iostream>
#include <cmath>
using namespace std;

// Function to convert integer part to base-5
string intToBase5(int n) {
    string base5 = "";
    if (n == 0) return "0";
    while (n > 0) {
        base5 = to_string(n % 5) + base5;
        n /= 5;
    }
    return base5;
}

// Function to convert fractional part to base-5
string fracToBase5(double frac, int precision = 8) {
    string base5 = "";
    while (precision--) {
        frac *= 5;
        int digit = (int)frac;
        frac -= digit;
        base5 += to_string(digit);
        if (frac == 0.0) break;
    }
    return base5;
}

int main() {
    double num;
    cout << "Enter the input decimal number: ";
    cin >> num;

    int intPart = (int)num;
    double fracPart = num - intPart;

    string base5Int = intToBase5(intPart);
    string base5Frac = fracToBase5(fracPart);

    cout << "\nDecimal " << intPart << " converted into base-5 system -> " << base5Int << endl;
    cout << "Fractional decimal " << fracPart << " converted into base-5 system -> ." << base5Frac << endl;

    cout << "\nBase-5 number: " << base5Int;
    if (fracPart > 0) cout << "." << base5Frac;
    cout << endl;

    return 0;
}
`}</pre></div>
  )
}

export default Exp