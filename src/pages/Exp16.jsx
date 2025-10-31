import React from 'react'

export default function Exp16() {
  return (
    <div><pre>
        {`
        import math

def two_way_set_associative():
    cache_size_kb = int(input("Enter size of Cache memory (in KB): "))
    main_size_mb = int(input("Enter size of Main memory (in MB): "))
    line_size = int(input("Enter size of each cache line (in Bytes): "))

    cache_size = cache_size_kb * 1024
    main_size = main_size_mb * 1024 * 1024

    address_bits = int(math.log2(main_size))
    total_lines = cache_size // line_size
    ways = 2
    sets = total_lines // ways
    main_blocks = main_size // line_size

    byte_bits = int(math.log2(line_size))
    set_bits = int(math.log2(sets))
    tag_bits = address_bits - (byte_bits + set_bits)

    print("\n--- RESULTS ---")
    print(f"Size of Cache memory = {cache_size_kb} KB")
    print(f"Size of Main memory = {main_size_mb} MB")
    print(f"Total cache lines = {total_lines}")
    print(f"Number of sets = {sets}")
    print(f"Associativity = {ways}-way")
    print(f"Mapping Policy: 2-Way Set Associative")
    print(f"Tag bits = {tag_bits}, Set bits = {set_bits}, Byte bits = {byte_bits}")

    block_num = int(input("\nEnter any Main memory block number: "))
    cache_set = block_num % sets
    print(f"Block {block_num} is mapped into cache set number = {cache_set}")
    print(f"It can occupy any of the 2 lines in set {cache_set}")

if __name__ == "__main__":
    two_way_set_associative()`}</pre></div>
  )
}
