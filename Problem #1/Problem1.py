segment = [
    [
        " __ ",
        "    ",
        " __ ",
        " __ ",
        "    ",
        " __ ",
        " __ ",
        " __ ",
        " __ ",
        " __ ",
        "    ",
    ],
    [
        "|  |",
        "   |",
        " __|",
        " __|",
        "|__|",
        "|__ ",
        "|__ ",
        "   |",
        "|__|",
        "|__|",
        "    ",
    ],
    [
        "|__|",
        "   |",
        "|__ ",
        " __|",
        "   |",
        " __|",
        "|__|",
        "   |",
        "|__|",
        " __|",
        " __ ",
    ],
]


def main():
    t = input("Input: ")
    h, m, s = t.split(":")
    h = int(h)
    m = int(m)
    s = int(s)
    print()
    if m < 0 or m > 59 or s < 0 or s > 59:
        error()
    else:
        draw(h, m, s)


def draw(h, m, s):
    time = str(h) + str(m) + str(s)
    for i in range(3):
        for j in range(len(time)):
            print(segment[i][int(time[j])], end="")
            if j == len(str(h)) - 1 or j == len(time) - 3:
                if i == 0:
                    print("   ", end="")
                else:
                    print(" . ", end="")
        print()


def error():
    for i in range(3):
        for j in range(6):
            print(segment[i][10], end="")
            if i == 1 or i == 2:
                if j % 2 == 1 and j != 5:
                    print(" . ", end="")
        print()


main()
