#include <stdio.h>


int mymult(int a, int b) {
    int c = a * b;
    return c;
}

int main() {
    int mymult();
    int retval;

    retval = mymult(6,7);
    printf("Answer: %d\n",retval);
}
