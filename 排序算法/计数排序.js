// 计数排序

/*

  计数排序（Counting Sort）是一种非比较排序算法，适用于一定范围内的整数排序。
  它的基本思想是统计数组中每个元素出现的次数，然后根据统计信息重新构建有序数组。
  计数排序的时间复杂度为 O(n + k)，其中 n 是数组的长度，k 是整数的范围。

  tips:
  首先找到数组中的最大值和最小值，然后创建一个计数数组 countArray，用于存储每个元素出现的次数。
  接下来，我们遍历原数组并更新计数数组。
  最后，我们根据计数数组的信息构建有序数组。
  计数排序适用于范围较小且非负整数的排序，它是一种高效的排序算法，尤其在这种情况下。
  然而，对于包含负整数或范围较大的数组，计数排序可能不是最佳选择。

*/

function countingSort(arr) {
  // 找出数组中的最大值和最小值
  // 使用 Math.max 和 Math.min 函数来找到数组中的最大值和最小值确实会遍历数组一次。
  //  这可以导致在计数排序之前需要遍历整个数组以查找这些值，使计数排序的时间复杂度增加了一个额外的线性遍历。
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // 创建计数数组，并初始化为0
  const countArray = new Array(max - min + 1).fill(0);

  // 统计每个元素出现的次数
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }

  // 根据计数数组构建有序数组
  const sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      sortedArray.push(i + min);
    }
  }

  return sortedArray;
}

function countingSortBetter(arr) {
  if (arr.length === 0) {
    return arr;
  }

  // 初始化最小值和最大值
  let min = arr[0];
  let max = arr[0];

  // 找出数组中的最大值和最小值
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  // 创建计数数组，并初始化为0
  const countArray = new Array(max - min + 1).fill(0);

  // 统计每个元素出现的次数
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }

  // 根据计数数组构建有序数组
  const sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      sortedArray.push(i + min);
    }
  }

  return sortedArray;
}

// 例子
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);
