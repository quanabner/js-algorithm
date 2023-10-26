// 归并排序

/*
  归并排序（Merge Sort）是一种分而治之的排序算法，它将一个数组分成较小的子数组，然后合并这些子数组以获得排序的结果。
  这个算法是一种稳定的排序算法，其时间复杂度为 O(n log n)，非常适合排序大型数据集。
*/

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // 分割数组成两半
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // 递归排序左半部分和右半部分
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // 合并已排序的左右两部分
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 比较左右两部分的元素，并将较小的元素放入结果数组中
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 将剩余的元素（如果有）添加到结果数组中
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// 例子
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
