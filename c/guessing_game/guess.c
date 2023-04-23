#include <stdio.h>

int main() {
    int ans = 42;

    do {
        scanf("%d", &ans);
        if (ans == 42) {
            printf("Nice work!\n");
            break;
        } else if (ans < 42)
        {
            printf("Too low - guess again\n");
        } else {
            printf("Too high - guess again\n");
        }
    }
    while(ans != 42);
}