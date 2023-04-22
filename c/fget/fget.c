#include <stdio.h>

int main() {
    printf("Enter line\n");
    char line[1000];
    fgets(line, 1000, stdin);
    printf("Line: %s\n", line);
}