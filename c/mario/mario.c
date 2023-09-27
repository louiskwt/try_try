#include <stdio.h>

void draw(int h);

int main()
{
    int height = 3;
    draw(height);
}

void draw(int h)
{
    // base case goes first
   
    for (int i = 0; i < h; i++) 
    {
        for (int j = 0; j < h - i; j++) 
        {
            printf(" ");
        }

        printf("#");
    }
    
}
