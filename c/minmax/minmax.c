#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    int minval, maxval;
    char input;
    char breakoutWord[5] = "done";
    int first = 0;

    do {
        scanf("%s", &input);
        int numInput = atoi(&input);
        printf("Num input %d\n", numInput);

        if (numInput > first || numInput > maxval) {
            maxval = numInput;
        } else {
            maxval = first;
        }

        if (numInput < first || numInput < minval ) {
            minval = numInput;
        } else {
            minval = first;
        }
    }
    while(strcmp(&input, breakoutWord) != 0);
    
   printf("Maximum %d\n", maxval);
   printf("Minimum %d\n", minval); 
}