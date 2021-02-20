module.exports = {
  /**
   * 百度地图坐标点转换为腾讯地图(高德地图坐标点) e.g: (11.11, 111.11)
   * @param coordinate
   * @returns {Object}
   */
  convertTecentMap(lng, lat) {
    if (lng == '' && lat == '') {
      return {
        lng: '',
        lat: ''
      }
    }
    var x_pi = 3.14159265358979324 * 3000.0 / 180.0
    var x = lng - 0.0065
    var y = lat - 0.006
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi)
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi)
    var qqlng = z * Math.cos(theta)
    var qqlat = z * Math.sin(theta)
    return {
      lng: qqlng,
      lat: qqlat
    }
  },

  /**
   * 腾讯地图坐标点(百度地图坐标点)转换为百度地图坐标点 e.g: (11.11, 111.11)
   * @param coordinate
   * @returns {Object}
   */
  convertBaiDuMap(lng, lat) {
    if (lng == '' && lat == '') {
      return {
        lng: '',
        lat: ''
      }
    }
    let pi = 3.14159265358979324 * 3000.0 / 180.0;
    let x = lng;
    let y = lat;
    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * pi);
    var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * pi);
    lng = z * Math.cos(theta) + 0.0065;
    lat = z * Math.sin(theta) + 0.006;
    return {
      lng: lng,
      lat: lat
    };
  }
};