import React from 'react'

export default function Exp1() {
  return (
    <div>
      <pre>{`#include <bits/stdc++.h>
using namespace std;

int main() {
float n;
cout<<"Enter a decimal number:";
cin>>n;

int decimal = (int)n;
float fractional = n-decimal;

string integerpart="";
string fracpart="";

while(decimal>0) {
    int rem = decimal%2;
     integerpart= to_string(rem) + integerpart ;
    decimal= decimal/2;
}

//Fractional part
int j=1;
while(j<5) {
  fractional = fractional*2;
  fracpart= fracpart + to_string(int(fractional));
  fractional = fractional-int(fractional);
  j++;
}


cout<<"Decimal "<<n<<" converted into Base -2 system is:"<<integerpart<<"\n";
cout<<"Fractional decimal"<<fracpart<<" converted into Base -2 system is:"<<fracpart<<"\n";
cout<<"Hence, Base-2 equivalent of input decimal = "<<integerpart<<"."<<fracpart<<"\n";

return 0; 
}`}</pre>
    </div>
  )
}
