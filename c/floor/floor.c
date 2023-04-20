#include <stdio.h>

int main() {
    printf("Enter US Floor\n");
    int usf;
    scanf("%d", &usf);
    int euf = usf - 1;
    printf("EU Floor %d\n", euf);
}