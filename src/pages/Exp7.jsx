import React from 'react'

export default function Exp7() {
  return (
    <div><pre>
        {`#include <iostream>
#include <bitset>
#include <cmath>
using namespace std;

// Function to convert decimal number to binary string of given bits
string decimal_to_binary(int n, int bits) {
    string binary = "";
    for (int i = bits - 1; i >= 0; i--) {
        binary += ((n >> i) & 1) ? '1' : '0';
    }
    return binary;
}

void non_restoring_division(int dividend, int divisor) {
    int n = (int)log2(dividend) + 1; // bit length of dividend
    int Q = dividend;
    int M = divisor;
    int A = 0; // accumulator initialized to 0
    int count = n;

    cout << "Binary representation of Dividend (Q) = " << decimal_to_binary(Q, n) << endl;
    cout << "Binary representation of Divisor  (M) = " << decimal_to_binary(M, n) << endl;

    while (count > 0) {
        // Left shift A and Q together
        A = (A << 1) | ((Q >> (n - 1)) & 1);
        Q = (Q << 1) & ((1 << n) - 1);

        // Subtract or add divisor depending on sign of A
        if (A >= 0) {
            A = A - M;
        } else {
            A = A + M;
        }

        // Set Q0 bit
        if (A >= 0)
            Q = Q | 1; // set last bit as 1
        else
            Q = Q | 0; // set last bit as 0

        count--;
    }

    // Final correction if A < 0
    if (A < 0)
        A = A + M;

    cout << "Quotient in binary   = " << decimal_to_binary(Q, n) << endl;
    cout << "Remainder in binary  = " << decimal_to_binary(A, n) << endl;
}

int main() {
    int dividend, divisor;
    cout << "Enter the Divisor (M) = ";
    cin >> divisor;
    cout << "Enter the Dividend (Q) = ";
    cin >> dividend;

    non_restoring_division(dividend, divisor);
    return 0;
}`}</pre></div>
  )
}
