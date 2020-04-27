export class TableUtils {
  static getRows = (arr, page, rowsPerpage) => {
    const sArr = arr.slice(
      page * rowsPerpage,
      page * rowsPerpage + rowsPerpage
    );
    return sArr;
  }
}
