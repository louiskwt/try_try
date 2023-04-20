#include <stdio.h>

int main() {
    printf("Enter line\n");
    char line [1000];
    scanf("%[^\n]1000s", line);
    printf("Line: %s\n", line);
}