class URLHelper {
  parseSearchUrlForValue(name: string, url?: string): any {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  parseSearchUrlForValueAsIs(key: string, searchUrl: string) {
    let keyIndex: number = searchUrl.indexOf(key);
    let valueString = searchUrl.slice(keyIndex);
    let startOfValue = valueString.indexOf(key + "=") + key.length + 1;
    let endOfValue = valueString.indexOf("&");
    if (endOfValue == -1) {
      endOfValue = valueString.length;
    }
    return valueString.slice(startOfValue, endOfValue);
  }
}

let urlHelper: URLHelper = new URLHelper();
export default urlHelper;
