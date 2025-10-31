import React from 'react'

export default function Exp9() {
  return (
    <div><pre>{`
        import struct

# Function to convert float to binary (32-bit)
def float_to_binary(num):
    packed = struct.pack('!f', num)                # Pack float into 4 bytes (big-endian)
    binaries = ''.join(f'{b:08b}' for b in packed) # Convert each byte to 8-bit binary
    return binaries

# Function to convert float to hexadecimal
def float_to_hex(num):
    packed = struct.pack('!f', num)
    return ''.join(f'{b:02X}' for b in packed)

# Main function to convert decimal to IEEE 754 format
def decimal_to_ieee754(num):
    print(f"Enter the Decimal Number = {num}")

    int_part = int(abs(num))
    frac_part = abs(num) - int_part

    # Convert integer part to binary
    int_binary = bin(int_part).replace("0b", "")

    # Convert fractional part to binary
    frac_binary = ""
    f = frac_part
    for _ in range(10):  # take 10 bits precision
        f *= 2
        bit = int(f)
        frac_binary += str(bit)
        f -= bit

    bin_repr = int_binary + "." + frac_binary
    print(f"Given number in Binary = {bin_repr}")

    # Normalized form
    normalized = int_binary[0] + "." + int_binary[1:] + frac_binary
    exponent = len(int_binary) - 1
    print(f"Given number in Scientific Notation = 1.{int_binary[1:]}{frac_binary} * 2^{exponent}")
    print(f"Real Exponent = {exponent}")

    # Bias for 32-bit float
    bias = 127
    biased_exp = exponent + bias
    biased_exp_bin = f"{biased_exp:08b}"
    print(f"Biased Exponent = {exponent} + 127 = {biased_exp} = {biased_exp_bin}")

    # Mantissa (fractional part after normalization)
    mantissa = (int_binary[1:] + frac_binary).ljust(23, "0")[:23]
    print(f"Actual fractional part = {int_binary[1:]}{frac_binary}")
    print(f"Mantissa of 23 bits = {mantissa}")

    # Sign bit
    sign_bit = "0" if num >= 0 else "1"
    print(f"Sign bit = {sign_bit}")

    # Combine to form IEEE 754 binary
    ieee754_binary = sign_bit + biased_exp_bin + mantissa
    print(f"32 bit representation of the given number = {ieee754_binary}")

    # Hex representation
    ieee754_hex = float_to_hex(num)
    print(f"Hex representation = {ieee754_hex}")

# Example
if _name_ == "_main_":
    decimal_to_ieee754(12.75)`
    }</pre></div>
  )
}
