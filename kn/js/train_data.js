var train_data = [
    // Times
    {
        input: [ // row 1 v1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [1, 1] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [1]
    },
    {
        input: [ // row 1 v2
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [2]
    },
    {
        input: [ // row 1 v3
            [
                [1, 1], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [3]
    },
    {
        input: [ // row 2 v1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [1, 1] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [4]
    },
    {
        input: [ // row 2 v2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [5]
    },
    {
        input: [ // row 2 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [1, 1], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [6]
    },
    {
        input: [ // row 3 v1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [1, 1] // column 3
            ] // row 3
        ],
        output: [7]
    },
    {
        input: [ // row 3 v2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ] // row 3
        ],
        output: [8]
    },
    {
        input: [ // row 3 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 1], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [9]
    },
    {
        input: [ // column 1 v1
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [7]
    },
    {
        input: [ // column 1 v2
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [4]
    },
    {
        input: [ // column 1 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [1]
    },
    {
        input: [ // column 2 v1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [8]
    },
    {
        input: [ // column 2 v2
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [5]
    },
    {
        input: [ // column 2 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [2]
    },
    {
        input: [ // column 3 v1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [9]
    },
    {
        input: [ // column 3 v2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ] // row 3
        ],
        output: [6]
    },
    {
        input: [ // column 3 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ] // row 3
        ],
        output: [3]
    },
    {
        input: [ // diagonal 1 v1
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [9]
    },
    {
        input: [ // diagonal 1 v2
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [5]
    },
    {
        input: [ // diagonal 1 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ] // row 3
        ],
        output: [1]
    },
    {
        input: [ // diagonal 2 v1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [7]
    },
    {
        input: [ // diagonal 2 v2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 1] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [5]
    },
    {
        input: [ // diagonal 2 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 1], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 1], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [3]
    },
    // Circles
    {
        input: [ // row 1 v1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [1, 0] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [1]
    },
    {
        input: [ // row 1 v2
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [2]
    },
    {
        input: [ // row 1 v3
            [
                [1, 0], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [3]
    },
    {
        input: [ // row 2 v1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [1, 0] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [4]
    },
    {
        input: [ // row 2 v2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [5]
    },
    {
        input: [ // row 2 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [1, 0], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [6]
    },
    {
        input: [ // row 3 v1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [1, 0] // column 3
            ] // row 3
        ],
        output: [7]
    },
    {
        input: [ // row 3 v2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ] // row 3
        ],
        output: [8]
    },
    {
        input: [ // row 3 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 0], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [9]
    },
    {
        input: [ // column 1 v1
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [7]
    },
    {
        input: [ // column 1 v2
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [4]
    },
    {
        input: [ // column 1 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [1]
    },
    {
        input: [ // column 2 v1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [8]
    },
    {
        input: [ // column 2 v2
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [5]
    },
    {
        input: [ // column 2 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [2]
    },
    {
        input: [ // column 3 v1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [9]
    },
    {
        input: [ // column 3 v2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ] // row 3
        ],
        output: [6]
    },
    {
        input: [ // column 3 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ] // row 3
        ],
        output: [3]
    },
    {
        input: [ // diagonal 1 v1
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [9]
    },
    {
        input: [ // diagonal 1 v2
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [5]
    },
    {
        input: [ // diagonal 1 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ] // row 3
        ],
        output: [1]
    },
    {
        input: [ // diagonal 2 v1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [7]
    },
    {
        input: [ // diagonal 2 v2
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [1, 0] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [5]
    },
    {
        input: [ // diagonal 2 v3
            [
                [0, 2], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ], // row 1
            [
                [0, 2], // column 1
                [1, 0], // column 2
                [0, 2] // column 3
            ], // row 2
            [
                [1, 0], // column 1
                [0, 2], // column 2
                [0, 2] // column 3
            ] // row 3
        ],
        output: [3]
    }
]