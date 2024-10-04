#include <sys/wait.h>
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define TSH_RL_BUFSIZE 1024
#define TSH_TOK_BUFSIZE 64
#define TSH_TOK_DELIM " \t\r\n\a"

void tsh_loop(void);
char *tsh_read_line(void);
int tsh_execute(char **args);
char **tsh_split_line(char *line);

// Built in functions
int tsh_cd(char **args);
int tsh_help(char **args);
int tsh_exit(char ** args);

/**
 * list of builtin commands and functions
 */

char *builtin_str[] = {
    "cd",
    "help",
    "exit"
};

int (*builtin_func[]) (char **) = {
    &tsh_cd,
    &tsh_help,
    &tsh_exit
};

int tsh_num_builtins() 
{
    return sizeof(builtin_str) / sizeof(char *);
}
 

int main (int argc, char **argv) 
{
    // load config files, if any

    // Run command loop
    tsh_loop();

    // perform shutdown / clean up when terminate
    return EXIT_SUCCESS;
}

void tsh_loop(void)
{
    char *line;
    char **args;
    int status;

    do {
        printf("> ");
        line = tsh_read_line();
        args = tsh_split_line(line); // split the line into args
        status = tsh_execute(args);
        
        free(line);
        free(args);
    } while (status);
}

char *tsh_read_line(void)
{
    int bufsize = TSH_RL_BUFSIZE;
    int position = 0;
    char *buffer = malloc(sizeof(char) * bufsize);
    int c;

    if (!buffer) 
    {
        fprintf(stderr, "tsh: allocation error\n");
        exit(EXIT_FAILURE);
    }

    while (1)
    {
        // read a char
        c = getchar();

        // if we hit EOF, replace it with a null character and return
        if (c == EOF || c == '\n')
        {
            buffer[position] = '\0';
            return buffer;
        }
        else
        {
            buffer[position] = c;
        }
        position++;

        // if we have exceeded the buffe, reallocate
        if (position >= bufsize)
        {
            bufsize += TSH_RL_BUFSIZE;
            buffer = realloc(buffer, bufsize);
            if (!buffer)
            {
                fprintf(stderr, "lsh: allocation error\n");
                exit(EXIT_FAILURE);
            }
        }
    }
}

char **tsh_split_line(char *line)
{
    int bufsize = TSH_TOK_BUFSIZE, position = 0;
    char **tokens = malloc(bufsize * sizeof(char*));
    char *token;

    if (!tokens) 
    {
        fprintf(stderr, "lsh: allocation error\n");
    }

    token = strtok(line, TSH_TOK_DELIM);

    while (token != NULL)
    {
        tokens[position] = token;
        position++;

        if (position >= bufsize)
        {
            bufsize += TSH_TOK_BUFSIZE;
            tokens = realloc(tokens, bufsize * sizeof(char*));
            if (!tokens) 
            {
                fprintf(stderr, "lsh: allocation error\n");
                exit(EXIT_FAILURE);
            }
        }
        token = strtok(NULL, TSH_TOK_DELIM);
    }

    tokens[position] = NULL;
    return tokens;
}

int tsh_launch(char **args)
{
    pid_t pid, wpid;
    int status;

    pid = fork();

    if (pid == 0)
    {
        // child process
        if (execvp(args[0], args) == -1)
        {
            perror("tsh");
        }  
        exit(EXIT_FAILURE); 
    }
    else if (pid < 0)
    {
        // error forking
        perror("tsh");
    }
    else
    {
        // parent process
        do 
        {
            wpid = waitpid(pid, &status, WUNTRACED);
        }
        while (!WIFEXITED(status) && !WIFSIGNALED(status));
    }

    return 1;
}

int tsh_execute(char **args)
{
    int i;

    if (args[0] == NULL)
    {
        // An empty command entered
        return 1;
    }

    for (int i = 0; i < tsh_num_builtins(); i++)
    {
        if (strcmp(args[0], builtin_str[i]) == 0)
        {
            return (*builtin_func[i])(args);
        }
    }
    return tsh_launch(args);
}



int tsh_cd(char **args)
{
    if (args[1] == NULL)
    {
        fprintf(stderr, "tsh: expected argument to \"cd\"\n");
    }
    else
    {
        if (chdir(args[1]) != 0)
        {
            perror("lsh");
        }
    }
    return 1;
}

int tsh_help(char **args)
{
    int i;
    printf("LT's Tsh\n");
    printf("Type program names and arguments, and hit enter.\n");
    printf("The following are built in: \n");

    for (i = 0; i < tsh_num_builtins(); i++)
    {
        printf(" %s\n", builtin_str[i]);
    }

    printf("Use the man command for information on other programs.\n");
    return 1;
} 

int tsh_exit(char **args)
{
    return 0;
}