import React from 'react'

function Exp6() {
  return (
    <div><pre>
        {`#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

// Convert decimal to binary (2’s complement for negatives)
vector<int> decimalToBinary(int num, int bits) {
    vector<int> bin(bits, 0);
    if (num < 0)
        num = pow(2, bits) + num; // two's complement
    for (int i = bits - 1; i >= 0; i--) {
        bin[i] = num % 2;
        num /= 2;
    }
    return bin;
}

// Add two binary numbers
vector<int> addBinary(const vector<int>& A, const vector<int>& B) {
    int n = A.size();
    vector<int> result(n);
    int carry = 0;
    for (int i = n - 1; i >= 0; i--) {
        int sum = A[i] + B[i] + carry;
        result[i] = sum % 2;
        carry = sum / 2;
    }
    return result;
}

// Two's complement
vector<int> twosComplement(vector<int> A) {
    int n = A.size();
    for (int i = 0; i < n; i++)
        A[i] = (A[i] == 0) ? 1 : 0; // invert bits
    vector<int> one(n, 0);
    one[n - 1] = 1;
    return addBinary(A, one);
}

// Print binary
void printBinary(const vector<int>& A) {
    for (int bit : A) cout << bit;
}

int main() {
    int M, Q;
    cout << "Enter multiplicand: ";
    cin >> M;
    cout << "Enter multiplier: ";
    cin >> Q;

    int n = 8; // number of bits (adjust if needed)
    vector<int> A(n, 0);
    vector<int> M_bin = decimalToBinary(M, n);
    vector<int> Q_bin = decimalToBinary(Q, n);
    vector<int> M_neg = twosComplement(M_bin);
    int Q_1 = 0;

   
    cout << "Binary representation of multiplicand: ";
    printBinary(M_bin); cout << endl;
    cout << "Binary representation of multiplier: ";
    printBinary(Q_bin); cout << endl;

    // --- Booth’s Algorithm ---
    for (int step = 0; step < n; step++) {
        if (Q_bin[n - 1] == 0 && Q_1 == 1)
            A = addBinary(A, M_bin);
        else if (Q_bin[n - 1] == 1 && Q_1 == 0)
            A = addBinary(A, M_neg);

        // Arithmetic Right Shift (A, Q, Q-1)
        Q_1 = Q_bin[n - 1];
        for (int i = n - 1; i > 0; i--) Q_bin[i] = Q_bin[i - 1];
        Q_bin[0] = A[n - 1];
        for (int i = n - 1; i > 0; i--) A[i] = A[i - 1];
    }

    cout << "Result of multiplication in binary: ";
    printBinary(A);
    printBinary(Q_bin);
    cout << endl;

    int result = M * Q;
    

    return 0;
}
`}</pre></div>
  )
}

export default Exp6