// 插入排序

/*
  插入排序（Insertion Sort）是一种简单的排序算法，它将数组分为已排序部分和未排序部分，然后逐一将未排序部分的元素插入到已排序部分的正确位置。

  tips:
  insertionSort 函数使用一个外部循环来遍历数组，并一个内部循环将未排序部分的元素插入到已排序部分的正确位置。外部循环从索引 1 开始，因为索引 0 视为已排序的部分。

插入排序的时间复杂度为 O(n^2)，因此它不适合用于大型数据集，但它对于小型数据集或在已经部分有序的情况下表现较好。
*/

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    // 将元素插入到已排序部分的正确位置
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// 例子
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
