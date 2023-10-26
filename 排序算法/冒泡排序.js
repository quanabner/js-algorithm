// 冒泡排序
/*
 *  冒泡排序（Bubble Sort）是一种基础的排序算法，它通过多次遍历数组，比较相邻元素并交换它们，使较大的元素逐渐"冒泡"到数组的末尾。
 *  这个过程一直持续到没有需要交换的元素为止。
 *  tips:
 *   通过重复遍历数组，比较相邻元素，如果前一个元素大于后一个元素，就交换它们的位置，直到没有需要交换的元素为止。
 *   这会将较大的元素逐渐移动到数组的末尾，最终得到一个有序的数组。
 *   请注意，冒泡排序是一种简单但不是最有效的排序算法，它的时间复杂度为 O(n^2)，
 *   因此在处理大型数据集时不太适用。更高效的排序算法如快速排序和归并排序通常更适合处理大型数据集。
 *   swapped 标记在冒泡排序中是一个可选的优化，它用于减少不必要的比较和循环次数。
 *   虽然它不是绝对必要的，但它可以提高冒泡排序的效率，特别是在数组已经有序或近乎有序的情况下。
     swapped 标记的作用是在一轮遍历中，如果没有发生任何元素交换（即数组已经有序），就可以提前结束排序。
     这是因为如果在一轮遍历中没有元素交换，说明数组已经达到了它的最终有序状态，后续的遍历不会再有任何交换，因此可以节省不必要的比较和循环。
     如果不使用 swapped 标记，冒泡排序会在每一轮遍历中始终继续，即使数组已经有序，也会浪费时间和计算资源。
     因此，swapped 标记是一种用于优化冒泡排序的技巧，可以显著提高它的性能，尤其是在处理部分有序的数组时。
     如果你不关心优化或理解算法的运行原理，可以在代码中省略这个标记，但最好保留它以获得更好的性能。
 *
 */

// 第一种写法
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

// 第二种写法
function bubbleSort1(arr) {
  const n = arr.length;
  let swapped; // 用于标记是否在一轮遍历中发生了交换

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // 在每轮中遍历数组，比较相邻的元素
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 如果顺序不正确，交换两个元素的位置
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // 如果一轮中没有发生交换，说明数组已经有序，可以提前结束
    if (!swapped) {
      break;
    }
  }

  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);
