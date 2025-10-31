import React from 'react'

export default function Exp13() {
  return (
    <div><pre>{`
        #include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << "---- 2-LEVEL MEMORY SYSTEM ANALYSIS ----\n";

    double C1, C2, S1, S2, H1, ta1, ta2;

    cout << "Enter cost/bit C1: ";
    cin >> C1;
    cout << "Enter cost/bit C2: ";
    cin >> C2;

    cout << "Enter size (bits) S1: ";
    cin >> S1;
    cout << "Enter size (bits) S2: ";
    cin >> S2;

    cout << "Enter hit ratio H1: ";
    cin >> H1;

    cout << "Enter access time ta1 (microseconds): ";
    cin >> ta1;
    cout << "Enter access time ta2 (microseconds): ";
    cin >> ta2;

    double numerator = (C1 * S1) + (C2 * S2);
    double denominator = (S1 + S2);
    double avgCost = numerator / denominator;

    double avgAccess = H1 * ta1 + (1 - H1) * ta2;

    cout << fixed << setprecision(6);
    cout << "\n--- RESULTS ---\n";
    cout << "Average cost/bit (INR) = ((C1*S1)+(C2*S2)) / (S1+S2)\n";
    cout << "= (" << numerator << " / " << denominator << ") = " << avgCost << " INR/bit\n\n";

    cout << setprecision(2);
    cout << "Average access time (microseconds):\n";
    cout << "Formula: H1*ta1 + (1-H1)*ta2\n";
    cout << "= " << avgAccess << " µs\n";

    return 0;
}`}</pre></div>
  )
}
