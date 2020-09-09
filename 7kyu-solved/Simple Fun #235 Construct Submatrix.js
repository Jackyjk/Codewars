function constructSubmatrix (matrix, rowsToDelete, columnsToDelete) {
    let arr = []
    for (let i = 0; i < matrix.length; ++i) {
        if (rowsToDelete.indexOf(i) == -1) {
            let ar = []
            for (let j = 0; j < matrix[i].length; ++j)
                if (columnsToDelete.indexOf(j) == -1)
                    ar.push(matrix[i][j])
            arr.push(ar)
        }
    }
    return arr
}