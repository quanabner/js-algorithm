// 快速排序
/*
 *  1.选择一个元素作为"基准"（通常是第一个元素）。
 *  2.遍历数组，将小于基准的元素放在左侧，大于基准的元素放在右侧。
 *  3.对左侧和右侧的子数组递归地应用相同的排序过程。
 *  4.合并左侧、基准和右侧，得到排序后的数组。
 *
 *   tips:
 *   这个算法具有较快的平均时间复杂度，但也需要额外的内存空间用于递归调用。
 *   其平均时间复杂度为 O(n log n)。这意味着在平均情况下，快速排序对 n 个元素的数组进行排序所需的比较和交换操作次数与 n * log₂(n) 成正比。
 *   快速排序通常在大多数情况下表现出色，但在最坏情况下（已排序数组）性能可能较差。
 *   在最坏情况下，即当选择的基准元素总是最大或最小元素时，快速排序的时间复杂度可能会达到 O(n^2)，
 *   但这种情况相对较少发生，在实际应用中，通常会对数组进行随机化或采用其他方法来改进快速排序的性能。
 *
 *   在快速排序算法中，选择基准元素是非常重要的，它会影响算法的性能。通常有几种常见的方法来选择基准元素：

      1.选择第一个元素或最后一个元素： 这是最简单的方法，即将数组的第一个元素或最后一个元素作为基准元素。
      这种方法的实现非常简单，但如果输入数据已经接近排序状态，可能会导致快速排序的性能下降。

      2.随机选择： 随机选择数组中的一个元素作为基准元素。这样可以减少快速排序在特定情况下的性能波动，但需要生成随机数。

      4.三数取中或平均值： 从数组的第一个、中间和最后一个元素中选择中位数或者平均值作为基准元素。
      这是一种折衷的方法，可以减少最坏情况下的性能下降，同时不需要太多的额外计算，但取平均值比取中位数多了除法运算，新增加了复杂度和性能损耗。

      5.随机化选择： 在实际应用中，可以选择一个随机数来决定基准元素的选择策略。
      例如，你可以在前面提到的几种方法中随机选择一种。这种方法可以在大多数情况下获得良好的性能。

    基准元素的选择策略取决于你的应用场景和输入数据的性质。
    在实际情况中，随机选择或三数取中通常是不错的选择，因为它们可以平衡性能并减少最坏情况的出现。
    如果你知道输入数据的特点，也可以根据情况选择合适的基准选择策略。
 *
 *
 */

// 正序快排示例
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // 输出 [1, 1, 2, 3, 6, 8, 10]

// 倒序快排示例用法
function quick(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]); // 比基准小的放在基准右边，比基准大的放在基准左边， 实现倒序排序
    } else {
      left.push(arr[i]);
    }
  }

  return [...quick(left), pivot, ...quick(right)];
}

// 示例用法
const unsortedArray1 = [3, 6, 8, 10, 1, 2, 1];
const sortedArray1 = quick(unsortedArray1);
console.log(sortedArray1); // 输出 [1, 1, 2, 3, 6, 8, 10]

// 随机选择基准示例：
function quick1(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let random = Math.floor(Math.random() * arr.length);
  let pivot = arr[random];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]); // 这种方式注意对与基准元素相等的情况再做判断，不然会导致无限循环
    }
  }

  return [...quick1(left), ...equal, ...quick1(right)];
}

const unsortedArray2 = [3, 6, 8, 10, 1, 2, 1];
const sortedArray2 = quick1(unsortedArray2);
console.log(sortedArray2); // 输出 [1, 1, 2, 3, 6, 8, 10]
