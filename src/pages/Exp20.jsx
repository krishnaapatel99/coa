import React from 'react'

export default function Exp20() {
  return (
    <div><pre>{`
        #include <iostream>
#include <cmath>
using namespace std;

int main() {
    double cache_size_kb, main_size_mb, line_size;
    cout << "Enter size of Cache memory (in KB): ";
    cin >> cache_size_kb;
    cout << "Enter size of Main memory (in MB): ";
    cin >> main_size_mb;
    cout << "Enter size of each cache line (in Bytes): ";
    cin >> line_size;

    double cache_size = cache_size_kb * 1024;
    double main_size = main_size_mb * 1024 * 1024;

    int address_bits = log2(main_size);
    int cache_lines = cache_size / line_size;
    int main_blocks = main_size / line_size;

    int byte_bits = log2(line_size);
    int tag_bits = address_bits - byte_bits;

    cout << "\n--- RESULTS ---\n";
    cout << "Size of Cache memory = " << cache_size_kb << " KB\n";
    cout << "Size of Main memory = " << main_size_mb << " MB\n";
    cout << "Total cache lines = " << cache_lines << "\n";
    cout << "Mapping Policy: Fully Associative Mapping\n";
    cout << "Tag bits = " << tag_bits << ", Byte bits = " << byte_bits << "\n";

    int block_num;
    cout << "\nEnter any Main memory block number: ";
    cin >> block_num;

    cout << "Block " << block_num << " can be placed in ANY of the " << cache_lines << " cache lines\n";

    return 0;
}
        `}</pre></div>
  )
}
