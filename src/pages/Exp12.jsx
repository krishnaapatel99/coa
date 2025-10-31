import React from 'react'

export default function Exp12() {
  return (
    <div><pre>{`
        def three_level_memory():
    print("---- 3-LEVEL MEMORY SYSTEM ANALYSIS ----")

    # Inputs
    C1 = float(input("Enter cost/bit C1: "))
    C2 = float(input("Enter cost/bit C2: "))
    C3 = float(input("Enter cost/bit C3: "))

    S1 = float(input("Enter size (bits) S1: "))
    S2 = float(input("Enter size (bits) S2: "))
    S3 = float(input("Enter size (bits) S3: "))

    H1 = float(input("Enter hit ratio H1: "))
    H2 = float(input("Enter hit ratio H2: "))

    ta1 = float(input("Enter access time ta1 (microseconds): "))
    ta2 = float(input("Enter access time ta2 (microseconds): "))
    ta3 = float(input("Enter access time ta3 (microseconds): "))

    # Average cost/bit
    numerator = (C1 * S1) + (C2 * S2) + (C3 * S3)
    denominator = (S1 + S2 + S3)
    avgCost = numerator / denominator

    # Average access time
    avgAccess = (H1 * ta1) + ((1 - H1) * H2 * ta2) + ((1 - H1) * (1 - H2) * ta3)

    # Output
    print("\n--- RESULTS ---")
    print("Average cost/bit (INR) = ((C1*S1)+(C2*S2)+(C3*S3)) / (S1+S2+S3)")
    print(f"= ({numerator} / {denominator}) = {avgCost:.6f} INR/bit\n")

    print("Average access time (microseconds):")
    print("Formula: H1*ta1 + (1-H1)H2*ta2 + (1-H1)(1-H2)*ta3")
    print(f"= {avgAccess:.2f} µs")


# Run the function
three_level_memory()`
}</pre></div>
  )
}
