//sorts from largest to smallest. eg [1,4,5,2] -> [5,4,2,1]
export function sortBy<T>(array: T[], field: keyof T): T[] {
  return array.sort((a, b) => {
    if (a[field] < b[field]) {
      return 1
    } else if (a[field] > b[field]) {
      return -1
    } else {
      return 0
    }
  })
}
