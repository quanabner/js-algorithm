// 选择排序
/*
  选择排序（Selection Sort）是一种简单的排序算法，它不像冒泡排序那样频繁地交换元素，
  而是在每次迭代中找到未排序部分中的最小元素，并将其放在已排序部分的末尾。

  tips:
  selectionSort 函数使用两个嵌套循环来实现选择排序。外部循环迭代数组，内部循环在未排序部分中查找最小元素的索引，并将其与当前位置的元素交换。

选择排序的时间复杂度为 O(n^2)，因此它不适合用于大型数据集
*/

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // 假设当前元素是最小的
    let minIndex = i;

    // 在未排序部分中查找最小元素的索引
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 将最小元素交换到已排序部分的末尾
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// 例子
const unsortedArray = [64, 25, 22, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);
