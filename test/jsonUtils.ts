export class JsonUtils {
  public static getNullsCountFromObject(object) {

    let nullsCount = 0;
    let y;

    for (const x in object) {
      y = object[x];
      if (y == "null" || y  == undefined || y == "" || typeof y == "undefined" || (y instanceof Object && Object.keys(y).length == 0)) {
        nullsCount++;
      }
    }
    return nullsCount;
  }

}