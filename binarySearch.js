let binarySearch = function (
  arr,
  x,
  start,
  end
) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid].trim() == x) return true;
  if (arr[mid] > x) return binarySearch(arr, x, start, mid - 1);
  else return binarySearch(arr, x, mid + 1, end);
};

module.exports = binarySearch;
