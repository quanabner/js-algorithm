// 快速排序有多种变体和不同的实现方式，但它们都遵循相似的原则。
// 下面是另一种基于原地分区（in-place partitioning）的快速排序实现方式：
// 这个实现方式与基本快速排序示例的不同之处在于它在原地进行分区，避免了创建额外的数组。
// 它使用partition函数将数组分为两部分，左侧部分小于基准元素，右侧部分大于基准元素，并返回分区索引。
// 然后，对左右两部分分别递归应用快速排序。

// 这种实现方式通常在实际应用中更有效，因为它不需要额外的内存来存储左右子数组。
// 这是一种原地排序算法，适用于大型数据集。

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换arr[i]和arr[j]以将小于基准的元素移到左侧
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

// 示例用法
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // 输出 [1, 1, 2, 3, 6, 8, 10]
