import React from 'react'

export default function Exp10() {
  return (
    <div><pre>
        {`
        #include <iostream>
#include <iomanip>
#include <cmath>
#include <bitset>
#include <sstream>
#include <cstring>
using namespace std;

// Convert float to binary (32-bit)
string float_to_binary(float num) {
    unsigned int bits;
    memcpy(&bits, &num, sizeof(bits));
    bitset<32> b(bits);
    return b.to_string();
}

// Convert float to hexadecimal (IEEE 754)
string float_to_hex(float num) {
    unsigned int bits;
    memcpy(&bits, &num, sizeof(bits));
    stringstream ss;
    ss << hex << uppercase << bits;
    return ss.str();
}

// Decimal to IEEE754 manual process
void decimal_to_ieee754(float num) {
    

    int int_part = abs((int)num);
    float frac_part = fabs(num) - int_part;

    // Integer part to binary
    string int_binary = "";
    if (int_part == 0) int_binary = "0";
    else {
        while (int_part > 0) {
            int_binary = char((int_part % 2) + '0') + int_binary;
            int_part /= 2;
        }
    }

    // Fractional part to binary
    string frac_binary = "";
    float f = frac_part;
    for (int i = 0; i < 10; i++) {
        f *= 2;
        int bit = (int)f;
        frac_binary += to_string(bit);
        if (bit == 1) f -= bit;
    }

    cout << "Given number in Binary = " << int_binary << "." << frac_binary << endl;

    // Normalize
    int exponent = int_binary.length() - 1;
    cout << "Given number in Scientific Notation = 1." 
         << int_binary.substr(1) << frac_binary << " * 2^" << exponent << endl;

    cout << "Select the destination floating point format = 32 bit" << endl;
    cout << "Real Exponent = " << exponent << endl;

    int bias = 127;
    int biased_exp = exponent + bias;
    bitset<8> biased_exp_bin(biased_exp);

    cout << "Biased Exponent = " << exponent << " + 127 = " 
         << biased_exp << " = " << biased_exp_bin << endl;

    // Mantissa
    string mantissa = int_binary.substr(1) + frac_binary;
    while (mantissa.length() < 23) mantissa += "0";
    mantissa = mantissa.substr(0, 23);

    cout << "Actual fractional part = " << int_binary.substr(1) << frac_binary << endl;
    cout << "Mantissa of 23 bits = " << mantissa << endl;

    // Sign bit
    string sign_bit = (num >= 0) ? "0" : "1";
    cout << "Sign bit = " << sign_bit << endl;

    // Combine IEEE 754 representation
    string ieee754_binary = sign_bit + biased_exp_bin.to_string() + mantissa;
    cout << "32 bit representation of the given number = " << ieee754_binary << endl;

    // Convert to hex
    cout << "Hex representation = " << float_to_hex(num) << endl;
}

int main() {
    float num;
    cout << "Enter the Decimal Number: ";
    cin >> num;

    decimal_to_ieee754(num);
    return 0;
}`}</pre></div>
  )
}
