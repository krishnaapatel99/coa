import React from 'react'

export default function Exp17() {
  return (
    <div><pre>{`
        import math

def fully_associative():
    cache_size_kb = int(input("Enter size of Cache memory (in KB): "))
    main_size_mb = int(input("Enter size of Main memory (in MB): "))
    line_size = int(input("Enter size of each cache line (in Bytes): "))

    cache_size = cache_size_kb * 1024
    main_size = main_size_mb * 1024 * 1024

    address_bits = int(math.log2(main_size))
    cache_lines = cache_size // line_size
    main_blocks = main_size // line_size

    byte_bits = int(math.log2(line_size))
    tag_bits = address_bits - byte_bits

    print("\n--- RESULTS ---")
    print(f"Size of Cache memory = {cache_size_kb} KB")
    print(f"Size of Main memory = {main_size_mb} MB")
    print(f"Total cache lines = {cache_lines}")
    print(f"Mapping Policy: Fully Associative Mapping")
    print(f"Tag bits = {tag_bits}, Byte bits = {byte_bits}")

    block_num = int(input("\nEnter any Main memory block number: "))
    print(f"Block {block_num} can be placed in ANY of the {cache_lines} cache lines")

if __name__ == "__main__":
    fully_associative()
        `}</pre></div>
  )
}
