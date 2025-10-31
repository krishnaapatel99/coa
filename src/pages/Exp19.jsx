import React from 'react'

export default function Exp19() {
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
    int total_lines = cache_size / line_size;
    int ways = 2;
    int sets = total_lines / ways;
    int main_blocks = main_size / line_size;

    int byte_bits = log2(line_size);
    int set_bits = log2(sets);
    int tag_bits = address_bits - (byte_bits + set_bits);

    cout << "\n--- RESULTS ---\n";
    cout << "Size of Cache memory = " << cache_size_kb << " KB\n";
    cout << "Size of Main memory = " << main_size_mb << " MB\n";
    cout << "Total cache lines = " << total_lines << "\n";
    cout << "Number of sets = " << sets << "\n";
    cout << "Associativity = " << ways << "-way\n";
    cout << "Mapping Policy: 2-Way Set Associative\n";
    cout << "Tag bits = " << tag_bits << ", Set bits = " << set_bits << ", Byte bits = " << byte_bits << "\n";

    int block_num;
    cout << "\nEnter any Main memory block number: ";
    cin >> block_num;

    int cache_set = block_num % sets;
    cout << "Block " << block_num << " is mapped into cache set number = " << cache_set << endl;
    cout << "It can occupy any of the 2 lines in set " << cache_set << endl;

    return 0;
}`}</pre></div>
  )
}
