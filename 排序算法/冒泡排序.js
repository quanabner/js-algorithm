// 冒泡排序
/*
 *  冒泡排序（Bubble Sort）是一种基础的排序算法，它通过多次遍历数组，比较相邻元素并交换它们，使较大的元素逐渐"冒泡"到数组的末尾。
 *  这个过程一直持续到没有需要交换的元素为止。
 *  tips:
 *   通过重复遍历数组，比较相邻元素，如果前一个元素大于后一个元素，就交换它们的位置，直到没有需要交换的元素为止。
 *   这会将较大的元素逐渐移动到数组的末尾，最终得到一个有序的数组。
 *   请注意，冒泡排序是一种简单但不是最有效的排序算法，它的时间复杂度为 O(n^2)，
 *   因此在处理大型数据集时不太适用。更高效的排序算法如快速排序和归并排序通常更适合处理大型数据集。
 *
 *
 */
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // 交换 arr[i] 和 arr[i + 1] 的位置
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);
