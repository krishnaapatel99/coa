import React from 'react'

export default function Exp11() {
  return (
    <div><pre>{`def two_level_memory():
    print("---- 2-LEVEL MEMORY SYSTEM ANALYSIS ----")

    # Inputs
    C1 = float(input("Enter cost/bit C1: "))
    C2 = float(input("Enter cost/bit C2: "))
    S1 = float(input("Enter size (bits) S1: "))
    S2 = float(input("Enter size (bits) S2: "))
    H1 = float(input("Enter hit ratio H1: "))
    ta1 = float(input("Enter access time ta1 (microseconds): "))
    ta2 = float(input("Enter access time ta2 (microseconds): "))

    # Average cost/bit
    numerator = (C1 * S1) + (C2 * S2)
    denominator = (S1 + S2)
    avgCost = numerator / denominator

    # Average access time
    avgAccess = H1 * ta1 + (1 - H1) * ta2

    # Output
    print("\n--- RESULTS ---")
    print(f"Average cost/bit (INR) = ((C1*S1) + (C2*S2)) / (S1 + S2)")
    print(f"= ({numerator} / {denominator}) = {avgCost:.6f} INR/bit\n")

    print("Average access time (microseconds):")
    print(f"Formula: H1*ta1 + (1-H1)*ta2")
    print(f"= {avgAccess:.2f} µs")


# Run the function
two_level_memory()`}</pre></div>
  )
}
