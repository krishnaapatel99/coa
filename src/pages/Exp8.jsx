import React from 'react'

export default function Exp8() {
  return (
    <div><pre>{
        `
        #include <iostream>
#include <bitset>
using namespace std;

// Function to convert decimal to binary (fixed bits)
string dec_to_bin(int n, int bits) {
    return bitset<8>(n).to_string().substr(8 - bits); // limit bits for clarity
}

// Restoring Division Algorithm
void res_div(int dividend, int divisor) {
    int n = 4; // bit length (you can change depending on inputs)
    int Q = dividend;
    int M = divisor;
    int A = 0;
    int count = n;

    cout << "Binary representation of Dividend (Q) = " << dec_to_bin(dividend, n) << endl;
    cout << "Binary representation of Divisor  (M) = " << dec_to_bin(divisor, n) << endl;

    for (int i = 0; i < count; i++) {
        // Left shift (A,Q)
        A = (A << 1) | ((Q >> (n - 1)) & 1);
        Q = (Q << 1) & ((1 << n) - 1);

        // Subtract M
        A = A - M;

        if (A < 0) {
            Q = Q | 0;   // set Q0 = 0
            A = A + M;   // restore A
        } else {
            Q = Q | 1;   // set Q0 = 1
        }
    }

    cout << "Quotient in binary  = " << dec_to_bin(Q, n) << endl;
    cout << "Remainder in binary = " << dec_to_bin(A, n) << endl;
}

int main() {
    int dividend, divisor;

    cout << "Enter the dividend (Q): ";
    cin >> dividend;
    cout << "Enter the divisor (M): ";
    cin >> divisor;

    res_div(dividend, divisor);
    return 0;
}
    `}</pre></div>
  )
}
