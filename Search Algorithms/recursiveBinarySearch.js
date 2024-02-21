function recursiveBinarySearch(arr, target) {
  return binarySearch(arr, target, 0, arr.length - 1);
}

function binarySearch(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor(leftIndex - rightIndex) / 2;
  if (target === arr[middleIndex]) {
    return arr[middleIndex];
  }
  if (target < arr[middleIndex]) {
    return binarySearch(arr, target, leftIndex, middleIndex - 1);
  } else
  if (target > arr[middleIndex]) {
    return binarySearch(arr, target, middleIndex + 1, rightIndex)
  }
}
