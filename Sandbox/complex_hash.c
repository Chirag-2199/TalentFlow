#include <stdio.h>
#include <string.h>

unsigned long hash(char *str) {
    unsigned long hash = 5381;
    int c;

    while ((c = *str++)) {
        hash = ((hash << 5) + hash) + c; // hash * 33 + c
    }

    return hash;
}

int main() {
    char data[] = "TalentFlowUser123";
    printf("Hash for '%s' is: %lu\n", data, hash(data));
    return 0;
}
