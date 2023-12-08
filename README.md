[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11754430&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The complexity of my implementation in the worst case should be $\Theta(n^3)$. The outer loop will run $n$ times as it iterates through the array. The first inner for-loop will also run $n$ times. Within the worst case, the list would be in reversed order which will end up having to move $n$ items then $n-1$ items then $n-2$ and so on till the 2nd to last element as it will then be sorted. This would become $n(n(n-2))$ which is $n^3-2n^2$ which would be $\Theta(n^3)$